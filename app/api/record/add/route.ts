import {
  createUserRecord,
  getUserRecordByTypeNameContent,
  getUserRecordCount,
} from "@/actions/cloudflare-dns-record";

import { env } from "@/env.mjs";
import { createDNSRecord } from "@/lib/cloudflare";
import { getCurrentUser } from "@/lib/session";
import { checkUserStatus } from "@/lib/user";
import { generateSecret } from "@/lib/utils";

export async function POST(req: Request) {
  try {
    const user = checkUserStatus(await getCurrentUser());
    if (user instanceof Response) return user;

    const { records } = await req.json();
    const {
      CLOUDFLARE_ZONE_ID,
      CLOUDFLARE_API_KEY,
      CLOUDFLARE_EMAIL,
      NEXT_PUBLIC_FREE_RECORD_QUOTA,
    } = env;

    if (!CLOUDFLARE_ZONE_ID || !CLOUDFLARE_API_KEY || !CLOUDFLARE_EMAIL) {
      return Response.json("API key、zone iD and email are required", {
        status: 400,
        statusText: "API key、zone iD and email are required",
      });
    }

    const record = {
      ...records[0],
      id: generateSecret(16),
      type: "CNAME",
      proxied: false,
    };

    // check quota
    const user_records_count = await getUserRecordCount(user.id);
    if (
      Number(NEXT_PUBLIC_FREE_RECORD_QUOTA) > 0 &&
      user_records_count >= Number(NEXT_PUBLIC_FREE_RECORD_QUOTA)
    ) {
      return Response.json("Your records have reached the free limit.", {
        status: 409,
        statusText: "Your records have reached the free limit.",
      });
    }

    const user_record = await getUserRecordByTypeNameContent(
      user.id,
      record.type,
      record.name,
      record.content,
      1,
    );

    if (user_record && user_record.length > 0) {
      return Response.json("Record already exists", {
        status: 403,
        statusText: "Record already exists",
      });
    }

    const data = await createDNSRecord(
      CLOUDFLARE_ZONE_ID,
      CLOUDFLARE_API_KEY,
      CLOUDFLARE_EMAIL,
      record,
    );
    if (!data.success || !data.result?.id) {
      return Response.json(data.errors, {
        status: 501,
        statusText: `Error occurred. ${data.errors}`,
      });
    } else {
      const res = await createUserRecord(user.id, {
        record_id: data.result.id,
        zone_id: data.result.zone_id,
        zone_name: data.result.zone_name,
        name: data.result.name,
        type: data.result.type,
        content: data.result.content,
        proxied: data.result.proxied,
        proxiable: data.result.proxiable,
        ttl: data.result.ttl,
        comment: data.result.comment ?? "",
        tags: data.result.tags?.join("") ?? "",
        created_on: data.result.created_on,
        modified_on: data.result.modified_on,
        active: 1,
      });
      if (res.status !== "success") {
        return Response.json(res.status, {
          status: 502,
          statusText: `Error occurred. ${res.status}`,
        });
      }
      return Response.json(res.data);
    }
  } catch (error) {
    console.error(error);
    return Response.json(error?.statusText || error, {
      status: error?.status || 500,
      statusText: error?.statusText || "Server error",
    });
  }
}
