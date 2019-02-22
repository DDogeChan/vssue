/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2019-01-21-hello-world.html",
    "revision": "4efb8bf79aca7eb99d8616cec95d1bd6"
  },
  {
    "url": "404.html",
    "revision": "fba997f2529853e7f83254a51f16e507"
  },
  {
    "url": "assets/css/0.styles.b45d9151.css",
    "revision": "a8dec9447ca93290ffd08f34ea403b4c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.b9ce47ff.js",
    "revision": "82bef0174fd4ee54413992daa9f63072"
  },
  {
    "url": "assets/js/3.09882d23.js",
    "revision": "f5ac48f1ccf3d8e892b3ee46c4cb6783"
  },
  {
    "url": "assets/js/4.388459f9.js",
    "revision": "902fce060051ac2b289d4187b6147cc5"
  },
  {
    "url": "assets/js/5.6a82c43c.js",
    "revision": "64c5274968737b661b1098abdf719a51"
  },
  {
    "url": "assets/js/6.09abb2ec.js",
    "revision": "27a565dd182ef423d73c69748caae40a"
  },
  {
    "url": "assets/js/7.161131f1.js",
    "revision": "4626ba515f29090082668fbb988b722a"
  },
  {
    "url": "assets/js/app.320a14be.js",
    "revision": "4b9d01a4cdf07e383f117990515dc06a"
  },
  {
    "url": "favicon.png",
    "revision": "e09144a9cc98c9d8cc2d17d10556ac1c"
  },
  {
    "url": "index.html",
    "revision": "b7799cd9e72452d108bf2352e4ca4733"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
