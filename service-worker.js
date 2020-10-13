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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2020/06/06/python-venvs/index.html",
    "revision": "893dd5e01241387235f64bbb02899e01"
  },
  {
    "url": "2020/07/23/git/index.html",
    "revision": "925dd856c91d46840995c3cf01050a86"
  },
  {
    "url": "404.html",
    "revision": "51e304bb88f0826b856acf3bffd93fef"
  },
  {
    "url": "about/index.html",
    "revision": "e9d469c2f2ddbc53c67b0908f95f20d9"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "8a67f301c9e9ea6505760f6b060e57d7"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "14636f0a7e2cae5595bcac5fedc9eec5"
  },
  {
    "url": "assets/css/0.styles.735d0a3b.css",
    "revision": "318dc560e23c7d0ab80af8535e9d3589"
  },
  {
    "url": "assets/img/git-add.c290eabb.png",
    "revision": "c290eabbd96360f364c27218fdcb75ee"
  },
  {
    "url": "assets/img/git-branch.7be33b15.png",
    "revision": "7be33b15fc646eb3430c55d7a0c0f2c3"
  },
  {
    "url": "assets/img/git-checkout-b.a8e40359.png",
    "revision": "a8e40359e1e1a0b1d4a8af7da65b54a2"
  },
  {
    "url": "assets/img/git-checkout.08c3d60f.png",
    "revision": "08c3d60fb3c86f1623e813a71262bb36"
  },
  {
    "url": "assets/img/git-clone.1690a692.png",
    "revision": "1690a6928ec5674d37d97d1a799185ef"
  },
  {
    "url": "assets/img/git-commit.a3286a46.png",
    "revision": "a3286a46d4e5dcbec574ba3f94c62706"
  },
  {
    "url": "assets/img/git-fetch.f3086528.png",
    "revision": "f30865282b024b85f71db52903c43b9d"
  },
  {
    "url": "assets/img/git-init.6e6b43fe.png",
    "revision": "6e6b43fe432bb15484aa42a54d3750da"
  },
  {
    "url": "assets/img/git-merge.0f07a4b7.png",
    "revision": "0f07a4b7ccd8512435e8628c6c922865"
  },
  {
    "url": "assets/img/git-push.e8cae63d.png",
    "revision": "e8cae63d2771d45f4e8c7578d448fde3"
  },
  {
    "url": "assets/img/git-status.b028dbaf.png",
    "revision": "b028dbaf14e59641cd3537ea83c796aa"
  },
  {
    "url": "assets/img/git.abffe2e3.svg",
    "revision": "abffe2e3294248d16d4e13c92d42b9a5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/venvs.1f310185.svg",
    "revision": "1f310185e891744036901d2b08b30e2b"
  },
  {
    "url": "assets/js/10.a2de5062.js",
    "revision": "ca096c6ff7141a97b77e1fa3956717e6"
  },
  {
    "url": "assets/js/2.0b4da9f0.js",
    "revision": "fbb13f8bec459d48e37e547f04abb29a"
  },
  {
    "url": "assets/js/3.940acf34.js",
    "revision": "43098adf681e650088450f3f65e09388"
  },
  {
    "url": "assets/js/4.747782d2.js",
    "revision": "b1ee012d83ddb8c6ebef3c68d366e257"
  },
  {
    "url": "assets/js/5.d142da8f.js",
    "revision": "f47bca951db1b2a965ffe2fa7773a9b1"
  },
  {
    "url": "assets/js/6.d009b843.js",
    "revision": "7b9f23029e5dfe363b0880ef44e6a12e"
  },
  {
    "url": "assets/js/7.1b64f762.js",
    "revision": "085e67f621b7e6bd55654b97056b03fc"
  },
  {
    "url": "assets/js/8.6e211f00.js",
    "revision": "e735df07ee5c83c51ececc19168b71e9"
  },
  {
    "url": "assets/js/9.044fd9f7.js",
    "revision": "5abe61279f9aad530911d820bebfb0a7"
  },
  {
    "url": "assets/js/app.c3e58ea8.js",
    "revision": "cb12541fa3f99c30ea77362b60242e45"
  },
  {
    "url": "error.svg",
    "revision": "b3a6bdd76d63c6d14d6c908de8142f47"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "d93da60a960e688da5e305e6a9485db1"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "9c9494b25d73d5071658688e09bfa08a"
  },
  {
    "url": "index.html",
    "revision": "b106c7ddb926c2c8101efc81704192bc"
  },
  {
    "url": "logo.png",
    "revision": "bf81dfebcada6d389453d0e4752dfa7e"
  }
].concat(self.__precacheManifest || []);
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
