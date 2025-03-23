"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RefreshCwIcon } from "lucide-react";
import { useTheme } from "next-themes";
import useSWR, { useSWRConfig } from "swr";

import { LOGS_LIMITEs_ENUMS } from "@/lib/enums";
import { fetcher } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Icons } from "@/components/shared/icons";

export interface LogEntry {
  target: string;
  slug: string;
  ip: string;
  click: number;
  city?: string;
  country?: string;
  updatedAt: string;
  createdAt: string;
  isNew?: boolean; // New property to track newly added logs
}

export default function LiveLog({ admin }: { admin: boolean }) {
  const { theme } = useTheme();
  const { mutate } = useSWRConfig();
  const [isLive, setIsLive] = useState(false);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [limitDiplay, setLimitDisplay] = useState(100);
  const newLogsRef = useRef<Set<string>>(new Set()); // Track new log keys

  const {
    data: newLogs,
    error,
    isLoading,
  } = useSWR<LogEntry[], Error>(
    isLive ? `/api/url/admin/live-log?admin=${admin}` : null,
    fetcher,
    {
      refreshInterval: 5000,
      dedupingInterval: 2000,
    },
  );

  const handleRefresh = () => {
    mutate(`/api/url/admin/live-log?admin=${admin}`, undefined);
  };

  // 追加和去重逻辑
  useEffect(() => {
    if (newLogs) {
      setLogs((prevLogs) => {
        const logMap = new Map<string, LogEntry>(
          prevLogs.map((log) => [`${log.ip}-${log.slug}`, log]),
        );

        // Store new keys that don't exist or have been updated
        const currentKeys = new Set(logMap.keys());
        const updatedKeys = new Set<string>();

        // 添加或更新新日志
        newLogs.forEach((log) => {
          const key = `${log.ip}-${log.slug}`;
          const existing = logMap.get(key);
          if (
            !existing ||
            new Date(log.updatedAt) > new Date(existing.updatedAt)
          ) {
            // Mark as new if it's a new entry or updated
            updatedKeys.add(key);
            logMap.set(key, {
              ...log,
              isNew: true,
            });
          }
        });

        // Update newLogsRef with the new keys
        newLogsRef.current = updatedKeys;

        // Clear isNew flag for old logs after some time
        setTimeout(() => {
          setLogs((oldLogs) =>
            oldLogs.map((log) => {
              const key = `${log.ip}-${log.slug}`;
              if (newLogsRef.current.has(key)) {
                return { ...log, isNew: false };
              }
              return log;
            }),
          );
          // Clear the set after updating
          newLogsRef.current.clear();
        }, 2000); // Duration of highlight effect (2 seconds)

        // 转换为数组，排序并限制总数
        return Array.from(logMap.values())
          .sort(
            (a, b) =>
              new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
          )
          .slice(0, limitDiplay);
      });
    }
  }, [newLogs, limitDiplay]);

  const toggleLive = () => setIsLive((prev) => !prev);

  const getRowBackground = (index: number, isNew: boolean | undefined) => {
    if (isNew) {
      return "#5facff1d";
    }

    return index % 2 === 0
      ? theme === "dark"
        ? "#1f1f1f"
        : "white"
      : theme === "dark"
        ? "#464646"
        : "#f7f7f7";
  };

  return (
    <Card className="mx-auto w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-base text-gray-800">Live Log</CardTitle>
            <CardDescription>
              Real-time updates of short URL visits.
            </CardDescription>
          </div>

          <Button
            onClick={toggleLive}
            variant={"outline"}
            size="sm"
            className={`ml-auto gap-2 transition-colors hover:border-blue-600 hover:text-blue-600 ${
              isLive ? "border-blue-600 text-blue-500" : ""
            }`}
          >
            <Icons.CirclePlay className="h-4 w-4" /> {isLive ? "Stop" : "Live"}
          </Button>
          <Button
            className="mx-2"
            variant={"outline"}
            size="sm"
            onClick={() => handleRefresh()}
            disabled={isLoading}
          >
            {isLoading ? (
              <RefreshCwIcon className="size-4 animate-spin" />
            ) : (
              <RefreshCwIcon className="size-4" />
            )}
          </Button>
          <Button
            variant={"outline"}
            size="sm"
            onClick={() => setLogs([])}
            className={`gap-2 transition-colors ${
              logs.length > 0
                ? "hover:border-yellow-400 hover:text-yellow-400"
                : ""
            }`}
            disabled={logs.length === 0}
          >
            <Icons.trash className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {error ? (
          <div className="text-center text-red-500">{error.message}</div>
        ) : logs.length === 0 && !newLogs ? (
          <Skeleton className="h-8 w-full" />
        ) : (
          <>
            <div className="h-96">
              <Table>
                <TableHeader className="">
                  <TableRow className="bg-gray-100/50 text-sm dark:bg-primary-foreground">
                    <TableHead className="h-8 w-1/6 px-1">Time</TableHead>
                    <TableHead className="h-8 w-1/12 px-1">Url</TableHead>
                    <TableHead className="h-8 px-1">Target</TableHead>
                    <TableHead className="h-8 w-1/12 px-1">IP</TableHead>
                    <TableHead className="h-8 w-1/6 px-1">Location</TableHead>
                    <TableHead className="h-8 w-1/12 px-1">Clicks</TableHead>
                  </TableRow>
                </TableHeader>
              </Table>
              <div className="scrollbar-hidden h-[calc(100%-2rem)] overflow-y-auto">
                <Table>
                  <TableBody className="">
                    <AnimatePresence initial={false}>
                      {logs.map((log, index) => (
                        <motion.tr
                          key={`${log.ip}-${log.slug}-${log.updatedAt}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                            backgroundColor: getRowBackground(index, log.isNew),
                          }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{
                            duration: 0,
                            backgroundColor: {
                              duration: 0.5,
                              ease: "linear",
                            },
                          }}
                          className="font-mono text-xs hover:bg-gray-200 dark:border-gray-800"
                        >
                          <TableCell className="w-1/6 whitespace-nowrap px-1 py-1.5">
                            {new Date(log.updatedAt).toLocaleString()}
                          </TableCell>
                          <TableCell className="font-midium w-1/12 px-1 py-1.5 text-green-700">
                            {log.slug}
                          </TableCell>
                          <TableCell className="px-1 py-1.5">
                            <TooltipProvider>
                              <Tooltip delayDuration={200}>
                                <TooltipTrigger className="max-w-96 truncate hover:underline">
                                  <a href={log.target} target="_blank">
                                    {log.target}
                                  </a>
                                </TooltipTrigger>
                                <TooltipContent className="w-1/2 text-wrap">
                                  {log.target}
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </TableCell>
                          <TableCell className="w-1/12 px-1 py-1.5">
                            {log.ip}
                          </TableCell>
                          <TableCell className="w-1/6 max-w-6 truncate px-1 py-1.5">
                            {decodeURIComponent(
                              log.city ? `${log.city}, ${log.country}` : "-",
                            )}
                          </TableCell>
                          <TableCell className="w-1/12 px-1 py-1.5">
                            {log.click}
                          </TableCell>
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                  </TableBody>
                </Table>
              </div>
            </div>
          </>
        )}
        {isLive && (
          <div className="flex w-full items-center justify-end gap-2 border-t border-dashed pt-4 text-sm text-gray-500">
            <p>{logs.length}</p> of
            <Select
              onValueChange={(value: string) => {
                setLimitDisplay(Number(value));
              }}
              name="expiration"
              defaultValue={limitDiplay.toString()}
            >
              <SelectTrigger className="w-20 shadow-inner">
                <SelectValue placeholder="Select a time" />
              </SelectTrigger>
              <SelectContent>
                {LOGS_LIMITEs_ENUMS.map((e) => (
                  <SelectItem key={e.value} value={e.value}>
                    {e.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p>total logs</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
