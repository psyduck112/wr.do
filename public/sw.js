if(!self.define){let e,a={};const s=(s,c)=>(s=new URL(s+".js",c).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let n={};const l=e=>s(e,i),r={module:{uri:i},exports:n,require:l};a[i]=Promise.all(c.map((e=>r[e]||l(e)))).then((e=>(t(...e),n)))}}define(["./workbox-e9849328"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"afe9a81462ce4eb08c7dcb771606107e"},{url:"/_next/static/chunks/1125-0fe5af11fb4ca94a.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/1675-ca63c93b1f977927.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/1929-2de88d4c3e03148d.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/1981-7823b3327ea784e6.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/1987-1a1bcb57db9d193c.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/2052-152031d7cec9ff0a.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/2058-70f46fafccc1d3f2.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/232-63a68f649b02ae51.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/2388-6b77dc9ef27e6f48.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/2513-a84d6966f63be8af.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/2906-3ca59035707aace1.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/302-4c6fd3f7756453fb.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/3091-145ca9a06401bb98.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/3241-8300a63ba44f0f17.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/3278-07d8eca4cd7ecfcf.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/3279-5402b7c851f867a7.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/3341-83b4194fa25e85db.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/4216-bc14fff76520c2f0.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/4985-94eccf15ba60ad0d.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/5013-cd42828585430624.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/5559-0b29eeacb5ac8851.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/5c043956-621d06be502321a8.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/6027-05e294e8f143a1d9.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/6052-a9045c40bbcf197f.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/6092-ea2a58cb57f13853.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/6285-b265733e443a73e0.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/6666-8bcf24d534c4b460.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/6747-c8bf226daea57933.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/6952-96bbaaf6e21d6bcd.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/7124-16684b4ed15a05a9.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/7320-388e27d0e8eb0c91.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/7488-cdded9626b974e17.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/7711-7da76c4c5d462b7e.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/8032-cf53b1b23915bf21.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/8066-a3c1df3f17530dfb.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/853-ee15a8452fce5c70.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/9272-32584790f7794c72.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/9445-2873ee2c9f4f2fef.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/9656-971ca706da558c3c.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/991-20b0c88cac8980d2.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(auth)/layout-3940d3aa1e0ac5e6.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(auth)/login/page-f742f1c0c8db9b35.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(auth)/register/page-90c318050690fce1.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(docs)/docs/%5B%5B...slug%5D%5D/page-dfa5778c4d1b9bd9.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(docs)/docs/layout-e50680954962a063.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(docs)/layout-93137d935f058151.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(marketing)/%5Bslug%5D/page-7a625266d4f6193f.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(marketing)/error-926bbcb3b4847451.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(marketing)/layout-6a1184c70a403e52.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(marketing)/not-found-9dc4c41dbb3b3e99.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(marketing)/page-47b43c9b15ef42f4.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(protected)/admin/layout-a08e6adc884ab242.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(protected)/admin/loading-b8ee172896c0ad69.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(protected)/admin/page-cc73ce7124adeb3d.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(protected)/admin/records/loading-9b5676e0bd0cb62c.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(protected)/admin/records/page-61110a88968ccf0e.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(protected)/admin/urls/loading-2ba94218a70a7fca.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(protected)/admin/urls/page-c35bcfab9d8aa52e.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(protected)/admin/users/loading-e1a4e731294e127e.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(protected)/admin/users/page-ef07a644dc9e147e.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(protected)/dashboard/loading-10281139331751be.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(protected)/dashboard/page-3bb55235f9fd0bb9.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(protected)/dashboard/records/loading-441c12d0d9792558.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(protected)/dashboard/records/page-e162d3839915cf70.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(protected)/dashboard/scrape/loading-098033273f3a2de5.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(protected)/dashboard/scrape/markdown/loading-0ce29994fe463c36.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(protected)/dashboard/scrape/markdown/page-40b705cbe65740b4.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(protected)/dashboard/scrape/meta-info/loading-16989b1f716c32c8.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(protected)/dashboard/scrape/meta-info/page-5e0c9a058d76d15d.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(protected)/dashboard/scrape/page-aa5b169844fd0106.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(protected)/dashboard/scrape/qrcode/loading-91af0347275fa113.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(protected)/dashboard/scrape/qrcode/page-23ffc1107266220c.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(protected)/dashboard/scrape/screenshot/loading-f7db9e2295103a22.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(protected)/dashboard/scrape/screenshot/page-00c499171067ba26.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(protected)/dashboard/settings/loading-22dae58e0e833667.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(protected)/dashboard/settings/page-c2b9980d79c2c0c8.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(protected)/dashboard/urls/loading-8455915b1b2cfb5d.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(protected)/dashboard/urls/page-a59cfe893aab8d14.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/(protected)/layout-9bd4f23c05b018df.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/_not-found/page-b6ad958dbd444c15.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/emails/layout-e11dfe225815486c.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/emails/loading-78aa9ff7e139c103.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/emails/page-4ee244ae6820ceaf.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/layout-863f40a4d585a0c8.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/app/not-found-25bd827946d9daf4.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/ba634aa8-76268b13b379a184.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/ddaba3cc-3a75da178da1d731.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/framework-20afca218c33ed8b.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/main-5ecfe2675ad945f4.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/main-app-c8bb88c7e00d69ba.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/pages/_app-e10e3cd6371b6a5b.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/pages/_error-fd8ff6538379579c.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-871c9472bda90afe.js",revision:"llJRZKal2KbZv5qpwKMCZ"},{url:"/_next/static/css/13697a75013f7da6.css",revision:"13697a75013f7da6"},{url:"/_next/static/css/26f2d9014a23aebc.css",revision:"26f2d9014a23aebc"},{url:"/_next/static/css/45a6a8d6489d6174.css",revision:"45a6a8d6489d6174"},{url:"/_next/static/llJRZKal2KbZv5qpwKMCZ/_buildManifest.js",revision:"6b5028f239292de384eea7c0063fa8e0"},{url:"/_next/static/llJRZKal2KbZv5qpwKMCZ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/90475aac776488b6-s.p.woff2",revision:"183db31d6365283bef4914042be9dfab"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/d9396795aa5ec363-s.p.woff2",revision:"70880e42f07b0386e261974cd14820a1"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/_static/blog/blog-post-1.jpg",revision:"d91bb1224212bd1a832f99fe7494554f"},{url:"/_static/blog/blog-post-2.jpg",revision:"04442fcb79e9538e65be3476b2b6aa3a"},{url:"/_static/blog/blog-post-3.jpg",revision:"a758717dd624c5900385151290cf378d"},{url:"/_static/blog/blog-post-4.jpg",revision:"135c157ecc4dfcbac1ebe27a04f40d84"},{url:"/_static/docs/gg-auth-config.jpg",revision:"8e10e48df3a501dc502c36bb581b7247"},{url:"/_static/examples/vercel_01.png",revision:"b9ec020bc5de0489ea314526dc1f4a38"},{url:"/_static/examples/vercel_02.png",revision:"a5a0dfb0b257becb83e6b70cbccc4490"},{url:"/_static/examples/vercel_03.png",revision:"e002acbc83d08aa0e9a650a71d1d02da"},{url:"/_static/examples/zeabur_01.png",revision:"06be65f37902549a587de901020a79f6"},{url:"/_static/examples/zeabur_02.png",revision:"d202334b902359133a9283c5500b20f2"},{url:"/_static/examples/zeabur_03.png",revision:"071418bf8c5046459e675d024e90b90b"},{url:"/_static/favicons/android-chrome-192x192.png",revision:"b978b46f31a53cc58dee7658950d7ae5"},{url:"/_static/favicons/android-chrome-512x512.png",revision:"3bcd5e4781b970a5043988462ed924cd"},{url:"/_static/favicons/apple-touch-icon.png",revision:"b5d3ba9c2426ac2cf48d3624dbea5acb"},{url:"/_static/favicons/favicon-16x16.png",revision:"e8b487ad7a04f0d411efa33d0fdfa68c"},{url:"/_static/favicons/favicon-32x32.png",revision:"e329308917ffa92f6518b0a6046247f7"},{url:"/_static/fonts/BAHAMASB.woff",revision:"19c1033177bfe869798e41c1d65c37d9"},{url:"/_static/fonts/BAHAMASN.woff",revision:"e5d96cc42c5bc3f5ae3302f9cdef6c9b"},{url:"/_static/illustrations/call-waiting.svg",revision:"bc1d08db6006f643c596558a8ce2115e"},{url:"/_static/illustrations/rocket-crashed.svg",revision:"f1404f635f3e5b8802646d01a0d46cbb"},{url:"/_static/images/dark-preview.png",revision:"00efdf36a39be71e7776ace65c67efa9"},{url:"/_static/images/example_01.png",revision:"447959f405fb701dbf9cdebf1f2b25c5"},{url:"/_static/images/example_02.png",revision:"3c7f6c032dc79c2abb0bbfe9601da14f"},{url:"/_static/images/example_03.png",revision:"08b367207274b741363b600f2ff1af79"},{url:"/_static/images/light-preview.png",revision:"f3edeb27e481833123aad8cf940870fc"},{url:"/_static/images/linuxdo.png",revision:"8f5868732c21463c570d75b36b43f62a"},{url:"/_static/images/linuxdo.webp",revision:"8f5868732c21463c570d75b36b43f62a"},{url:"/_static/images/x-preview.png",revision:"f3edeb27e481833123aad8cf940870fc"},{url:"/_static/logo.svg",revision:"429dca80df2bb617b2196488ddb1ab4d"},{url:"/_static/og.jpg",revision:"a37ef3da3c6ad18d0bc600549c5f6bb2"},{url:"/_static/wr.png",revision:"45189df007a8b89e4914fa9a6c47ccc7"},{url:"/_static/wrdo.png",revision:"d6edf9a7e97b6408e5aa3a69f2374f10"},{url:"/favicon.ico",revision:"30b96c1ef5b076144f192057b8d73eb3"},{url:"/manifest.json",revision:"41ae209a465bac286dc6409a45151dca"},{url:"/site.webmanifest",revision:"41ae209a465bac286dc6409a45151dca"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:c})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
