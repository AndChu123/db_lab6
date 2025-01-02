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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "84ea7e2d411d1d31ea856c94422b3bdd"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.5d5611b6.css",
    "revision": "34fff1e30cdf589de4c9b2c79cb05c1b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.7f9b9093.js",
    "revision": "3abd99d4fbb74c94973865c896b407bf"
  },
  {
    "url": "assets/js/10.6490fded.js",
    "revision": "af996d2557c785c43219b821cd755b58"
  },
  {
    "url": "assets/js/13.8aa6d1bf.js",
    "revision": "bacd803f74bd95c9fc8109001a2023ba"
  },
  {
    "url": "assets/js/14.6c4250fc.js",
    "revision": "92c5fe3e7b4fa1045772763b6126c1a8"
  },
  {
    "url": "assets/js/15.79afe120.js",
    "revision": "bba3b8518af54b49da56c1c041e21c45"
  },
  {
    "url": "assets/js/16.a444a5b0.js",
    "revision": "2373e0bae12fef4124b3402981be9be7"
  },
  {
    "url": "assets/js/17.2505833e.js",
    "revision": "ddd5cc307e5f74fd7e8cf674ee2040dd"
  },
  {
    "url": "assets/js/18.6504ce24.js",
    "revision": "63613a2a15b0fdaaacee62def2196260"
  },
  {
    "url": "assets/js/19.e537277b.js",
    "revision": "76c89b6b1c5ce563627eb188cc65ac29"
  },
  {
    "url": "assets/js/2.dc8b2f68.js",
    "revision": "1c415a3acc02113cc5216e0a073ad762"
  },
  {
    "url": "assets/js/20.da6bd744.js",
    "revision": "48d03736181705f013352b3f2a6a6ebc"
  },
  {
    "url": "assets/js/21.5a075f7d.js",
    "revision": "1493f25483d4890174d662cd4cb6e338"
  },
  {
    "url": "assets/js/22.bf6db5e9.js",
    "revision": "d8ad13f1a0ad62a1a63b9dbeec3ac858"
  },
  {
    "url": "assets/js/23.a751b2ca.js",
    "revision": "8f3528e834371523f26c9fa2b22daa0a"
  },
  {
    "url": "assets/js/24.f827aa29.js",
    "revision": "ff496d20579bf37cbba94960ce972237"
  },
  {
    "url": "assets/js/25.09537068.js",
    "revision": "1e0e259625641c0ab639481c89c0ec2d"
  },
  {
    "url": "assets/js/26.cacd13da.js",
    "revision": "0d12ff5f076339d1927983a7e1e06fd3"
  },
  {
    "url": "assets/js/27.e6e5ee4b.js",
    "revision": "79e61b9dadbc45e1b20ad5e5925ed0bc"
  },
  {
    "url": "assets/js/28.b824f728.js",
    "revision": "38356a1ee5f2f7fc2049f58488442311"
  },
  {
    "url": "assets/js/29.798907f0.js",
    "revision": "af87fa9d6889b907d5f2a4d314908f0a"
  },
  {
    "url": "assets/js/3.7226836c.js",
    "revision": "7d27bcd34d0fa6214a36e4f98008eca3"
  },
  {
    "url": "assets/js/30.2bd39e19.js",
    "revision": "91d28e8199c8a29bf05740f8e4df24f7"
  },
  {
    "url": "assets/js/31.3554f0b5.js",
    "revision": "2efda79ed52716b0e1b5b24574f8de8c"
  },
  {
    "url": "assets/js/32.6fe244b2.js",
    "revision": "0f3f0305cd751a1b6bd763141f5cb5fa"
  },
  {
    "url": "assets/js/33.5b6187a0.js",
    "revision": "e60e964ce93a3b74525bba6d98b0402d"
  },
  {
    "url": "assets/js/34.0eb74eee.js",
    "revision": "a6141c86debc31ecfb9f6343d462e8ef"
  },
  {
    "url": "assets/js/35.11d9cffe.js",
    "revision": "efc758187cd03d34d22946bcd2eea818"
  },
  {
    "url": "assets/js/36.e666e640.js",
    "revision": "788c2cf74daedf66e5d95fdf9284488c"
  },
  {
    "url": "assets/js/37.d283a7cd.js",
    "revision": "d18988a9e8c1f43ce13cbd8a2f27a965"
  },
  {
    "url": "assets/js/38.e6304b45.js",
    "revision": "5806d61f94308dfd07b2f04543e0362d"
  },
  {
    "url": "assets/js/39.2203b22c.js",
    "revision": "e19c2c305c430e05ca3c21cbd06d9670"
  },
  {
    "url": "assets/js/4.926ef1ff.js",
    "revision": "ae3d794ffb0b6a41315eb0b4adb9c27d"
  },
  {
    "url": "assets/js/41.09539921.js",
    "revision": "d3d6fe5f7629c2847b801e7473ba932b"
  },
  {
    "url": "assets/js/5.a3fb2f30.js",
    "revision": "3ed41d06f06c71ce7f93b8008dd1b614"
  },
  {
    "url": "assets/js/6.753ee380.js",
    "revision": "134c0d79e71bd5e4b81d073e6f8a3ec0"
  },
  {
    "url": "assets/js/7.80854c0b.js",
    "revision": "fed6804eb74f73b8d04f1cc3033ea8e3"
  },
  {
    "url": "assets/js/8.3de19046.js",
    "revision": "e646a314dd844e3057ae648adee0e52f"
  },
  {
    "url": "assets/js/9.a9cc34b0.js",
    "revision": "89e4cd29cfc1408879170f9255bc8f80"
  },
  {
    "url": "assets/js/app.9cdd7eb5.js",
    "revision": "ecf103b68ec47c72ea35f93292f07a35"
  },
  {
    "url": "assets/js/vendors~docsearch.a9d2045b.js",
    "revision": "ae32db6aa37ed62f9801db8cb7ba6afd"
  },
  {
    "url": "conclusion/index.html",
    "revision": "6d58a0b7bed3323a31a11e65fda268f1"
  },
  {
    "url": "design/index.html",
    "revision": "673865b7ac2be12e22fa98628c4b1b03"
  },
  {
    "url": "index.html",
    "revision": "6c3a31ee8c99d2d9bcc0a219e94d137f"
  },
  {
    "url": "intro/index.html",
    "revision": "3808ea07dc03e813f53ede57c24ffae1"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "02015ba83b5a8d76eebfcede8f2f9f4a"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "bbecee23b4feff7886140c23a37c20f8"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "57bba4aceed43c72167231ab710fad62"
  },
  {
    "url": "software/index.html",
    "revision": "b13d053ce57b4c52c255c63034d92048"
  },
  {
    "url": "test/index.html",
    "revision": "bf62d8ae5f054bdbc87c083914e0b6d7"
  },
  {
    "url": "use cases/index.html",
    "revision": "f90999e0191bcf117e5d2efe49c3de21"
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
