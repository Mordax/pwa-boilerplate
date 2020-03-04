/* 
  This service worker is optimized more for Single Page Applications. 
  'cacheNames' can be named whatever you want it to be. 
  You can split up the files types further into separate caches. 
  Add things like about pages, any other separate pages into the precaching code. 
  See Readme for more on strategies.  
*/

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js"
);

if (workbox) {
  // Serve these pages even offline (return 200 ok)
  workbox.precaching.precacheAndRoute([
    { url: "/" }
    // { url: "/about" },
    // { url: "/profile" }
  ]);

  // Cache google fonts
  workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.CacheFirst({
      cacheName: "google-fonts-stylesheets"
    })
  );

  // Cache images
  workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
    new workbox.strategies.NetworkFirst({
      cacheName: "images",
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
        })
      ]
    })
  );

  //Cache css, js and html
  workbox.routing.registerRoute(
    /\.(?:js|css|html)$/,
    new workbox.strategies.NetworkFirst({
      cacheName: "static-resources"
    })
  );

  //Cache anything else you need following above functions.
} else {
  console.log("Workbox failed to load.");
}
