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
    "url": "404.html",
    "revision": "7da8b4c4c3a8840b6332d9f6d314f58d"
  },
  {
    "url": "assets/css/0.styles.f6c61694.css",
    "revision": "71f8c74baf04b5fc54db0bd965e74a91"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c6256863.js",
    "revision": "8a4059e1b10e5c6125d864bd2fea5d32"
  },
  {
    "url": "assets/js/11.5beb3909.js",
    "revision": "077fc57a1afbfae48d071c10fbdef439"
  },
  {
    "url": "assets/js/12.2ab605b2.js",
    "revision": "cf2d70d9bd8bd5a3c22c4f25e157f157"
  },
  {
    "url": "assets/js/13.f941e268.js",
    "revision": "709f882aa43594c425ed51464369c68f"
  },
  {
    "url": "assets/js/14.7396d717.js",
    "revision": "52abebb7773bb14d18d6336369a5735c"
  },
  {
    "url": "assets/js/15.66b22c02.js",
    "revision": "6bf6c062adaed8be3fc8531374b9b77c"
  },
  {
    "url": "assets/js/16.d651bd46.js",
    "revision": "c4bafaaeb74f8323ca2de15726675544"
  },
  {
    "url": "assets/js/17.d88b9bbb.js",
    "revision": "0c011daaccf97472d4d6c6e46bfdb870"
  },
  {
    "url": "assets/js/18.ff4c454d.js",
    "revision": "c2e7e78bcf9079f484f84f39ae551ab1"
  },
  {
    "url": "assets/js/19.2cd4788f.js",
    "revision": "52461d69b83af3b32507dbc36358afc3"
  },
  {
    "url": "assets/js/20.1e77e08a.js",
    "revision": "1866ccc6ec7e7c588151f017dbd5bb48"
  },
  {
    "url": "assets/js/21.e2494a74.js",
    "revision": "f4ed777fabc0292faad617aec72b7f67"
  },
  {
    "url": "assets/js/22.4db85503.js",
    "revision": "a3f4b0b1170e9acf4d82a452547005a0"
  },
  {
    "url": "assets/js/23.dee1be7f.js",
    "revision": "e91094eb804453a30785ad6c7e13fcaf"
  },
  {
    "url": "assets/js/24.a38410f1.js",
    "revision": "a0e41b2e80eb17bf9830a647bfb5c79d"
  },
  {
    "url": "assets/js/25.495ea7a4.js",
    "revision": "2c117fa6ffdd6672903e790b9e35ccc3"
  },
  {
    "url": "assets/js/26.0b84b115.js",
    "revision": "12fd8a363cc44e2532f8f987f39d028a"
  },
  {
    "url": "assets/js/27.542074ad.js",
    "revision": "23520392ba5cb033493625a3dc91a444"
  },
  {
    "url": "assets/js/28.44d83f1c.js",
    "revision": "f0d3dfad0d78405f071e532e1cfed50b"
  },
  {
    "url": "assets/js/29.152b7d20.js",
    "revision": "ca2cc7548fb7262b296d988b844d250c"
  },
  {
    "url": "assets/js/30.f94aa0fa.js",
    "revision": "ff8140c493c643bfe471e4b3f7310a3f"
  },
  {
    "url": "assets/js/31.7b44e32b.js",
    "revision": "1c5b56fd3303a6e2c54913e82096d720"
  },
  {
    "url": "assets/js/32.3619a9a7.js",
    "revision": "91afc8773380a147137f132b68d1051a"
  },
  {
    "url": "assets/js/33.b2176063.js",
    "revision": "b6b8049280fbc2ef980507aae2d60404"
  },
  {
    "url": "assets/js/34.4455627c.js",
    "revision": "0f04c870833e81537061e482b3fbaa6f"
  },
  {
    "url": "assets/js/35.8e9f5793.js",
    "revision": "48f95ab510808f2703e362d956c2a61e"
  },
  {
    "url": "assets/js/36.8b2cc489.js",
    "revision": "72d7526a55e0693241a366076292b497"
  },
  {
    "url": "assets/js/37.33b73b62.js",
    "revision": "fee5af1bdcd0ba2637d7ad0ad5227e3c"
  },
  {
    "url": "assets/js/38.7a536d63.js",
    "revision": "d1d616aa7819a7463ec579d8d75aa703"
  },
  {
    "url": "assets/js/39.4581918b.js",
    "revision": "5d6b4353965c7240d80265da4283905a"
  },
  {
    "url": "assets/js/4.fb603f56.js",
    "revision": "08613a548c66ed1199b0466608447ab9"
  },
  {
    "url": "assets/js/40.295d2c23.js",
    "revision": "19de04436b4b18c172018f2f0c036f28"
  },
  {
    "url": "assets/js/41.189f8245.js",
    "revision": "bd0608637c0c6d5aaf6c383a9507914a"
  },
  {
    "url": "assets/js/42.157ee0b2.js",
    "revision": "d126e50267704e60a8f3db0c97d42d2e"
  },
  {
    "url": "assets/js/43.c70e5874.js",
    "revision": "879f1f4c8e5e507350302f9946706f15"
  },
  {
    "url": "assets/js/44.a1d8e202.js",
    "revision": "03c274839170c32d7aea3d1e5d15e80b"
  },
  {
    "url": "assets/js/45.a4432e57.js",
    "revision": "241a09281ea688942330a2a60a1cb70c"
  },
  {
    "url": "assets/js/46.b1fdd155.js",
    "revision": "f904b2d5beebfef18d0ea23d99b297f3"
  },
  {
    "url": "assets/js/47.3ce1bbb5.js",
    "revision": "5e77a344ea1d2e2774188b6ce8c461d2"
  },
  {
    "url": "assets/js/48.353035d2.js",
    "revision": "bd53e9cc5b4457e3daef9959413b0980"
  },
  {
    "url": "assets/js/49.16820ca9.js",
    "revision": "e99d00385a01552084d28aa394d4bdff"
  },
  {
    "url": "assets/js/5.97e60065.js",
    "revision": "977df4254a571ea54595bc5067f5ad49"
  },
  {
    "url": "assets/js/50.4309d816.js",
    "revision": "5fd31c9394c06752769eb03bc57c2f59"
  },
  {
    "url": "assets/js/51.31af3f82.js",
    "revision": "d8ee6a941c1fd5e47c440abfbf86f0a3"
  },
  {
    "url": "assets/js/52.6e8f4e31.js",
    "revision": "fecbf223fb706b1ea0e938f89f3d0fae"
  },
  {
    "url": "assets/js/53.e1423288.js",
    "revision": "7b75108d44377e6d61d619e341038973"
  },
  {
    "url": "assets/js/6.6f65f012.js",
    "revision": "06b8e241881e6c10f542c36c7183f2e8"
  },
  {
    "url": "assets/js/7.ac8df731.js",
    "revision": "6eaf4ff355d9d47917138cff30c028f7"
  },
  {
    "url": "assets/js/8.936928b3.js",
    "revision": "e2ce95e7744ec0b20236d34a731d40df"
  },
  {
    "url": "assets/js/9.9411023c.js",
    "revision": "46378c6c44cf894ba380399fff588a6e"
  },
  {
    "url": "assets/js/app.d20268f9.js",
    "revision": "24e07be0909597344396fe576cfacac5"
  },
  {
    "url": "assets/js/vendors~flowchart.8982e116.js",
    "revision": "bc7fea975a76ce449937af951712aec5"
  },
  {
    "url": "assets/js/vendors~notification.f509967c.js",
    "revision": "d6ac604e967948462bdb489a24fe79b5"
  },
  {
    "url": "cache/cache-framework.html",
    "revision": "eea30088c6e85cc6ed954fb0e8b90cdd"
  },
  {
    "url": "cache/cache-interview.html",
    "revision": "8e10989c68c5934e9b987a84248a3882"
  },
  {
    "url": "cache/cache-libs.html",
    "revision": "de25f10db0cb2586570f44e75539455d"
  },
  {
    "url": "cache/ehcache.html",
    "revision": "c0843bbcabee97b242db6f4c1d91363c"
  },
  {
    "url": "cache/http-cache.html",
    "revision": "3d687c611f74501280041ab53c4d21ac"
  },
  {
    "url": "cache/index.html",
    "revision": "6297deae6dc8ba3d728c122ccf2837ef"
  },
  {
    "url": "cache/memcached.html",
    "revision": "dec984e95fd8be34b76aad43fb42b915"
  },
  {
    "url": "framework/index.html",
    "revision": "237d45ea9eb77e70a35a8a9d78b2f8d3"
  },
  {
    "url": "framework/mybatis.html",
    "revision": "ae5b0fb3156ada14ab3f79c21923b48e"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "cd235506b9884e92a90fac596a12a3e3"
  },
  {
    "url": "lib/bean/dozer.html",
    "revision": "2e41f1d5a6ae4f76be9f880ac12107a5"
  },
  {
    "url": "lib/bean/lombok.html",
    "revision": "c431397cba7120ea81ecb73bdf125aa9"
  },
  {
    "url": "lib/index.html",
    "revision": "a1a787dd577edf744a01bb75ef027c6d"
  },
  {
    "url": "lib/javalib-log.html",
    "revision": "69cf017e5eb2d50b2283037d5d842d3e"
  },
  {
    "url": "lib/javalib-util.html",
    "revision": "c6151329d0d69e4e0d5af34b4a7a656b"
  },
  {
    "url": "lib/javamail.html",
    "revision": "4ba1b03ea38fb345efc60699c1173a66"
  },
  {
    "url": "lib/jsoup.html",
    "revision": "401e84f072e4517554f9ca9f35726cda"
  },
  {
    "url": "lib/reflections.html",
    "revision": "0f009087549dcaed287a327271bb8de0"
  },
  {
    "url": "lib/serialized/index.html",
    "revision": "a9c9ed1f55663cfec258747ea70d40e0"
  },
  {
    "url": "lib/serialized/javalib-binary.html",
    "revision": "31b33356cce9131c199ef59b35e2826b"
  },
  {
    "url": "lib/serialized/javalib-json.html",
    "revision": "11de3178d2b273f1da18651754e59f42"
  },
  {
    "url": "lib/template/freemark.html",
    "revision": "c33c3ad14beed22096942ae04fa8a78e"
  },
  {
    "url": "lib/template/index.html",
    "revision": "6cf6ad67ddd32b789ae869711329150a"
  },
  {
    "url": "lib/template/thymeleaf.html",
    "revision": "ed09b849bb05a27e3603eae192a86de1"
  },
  {
    "url": "lib/template/velocity.html",
    "revision": "9dc0cd3594a8a41cd20c235df7eff0f8"
  },
  {
    "url": "lib/thumbnailator.html",
    "revision": "9817efe6efe4abed8b37c42afc7c0c6b"
  },
  {
    "url": "lib/zxing.html",
    "revision": "e92ad196fa2c1e789a24de73686530cf"
  },
  {
    "url": "mq/activemq.html",
    "revision": "53a6f7272228b9f6c957fecc37e07b77"
  },
  {
    "url": "mq/index.html",
    "revision": "2ed623b99949f18c825c2cda5f3719aa"
  },
  {
    "url": "mq/mq-interview.html",
    "revision": "b92c230c267dcaf719b32369b5a4a01e"
  },
  {
    "url": "mq/rocketmq.html",
    "revision": "3bb21f7ca1355367bdf11d13e5114330"
  },
  {
    "url": "security/index.html",
    "revision": "468c3a14c11b469ea92c3131d67988bc"
  },
  {
    "url": "security/shiro.html",
    "revision": "4c23347d20a0836308c969d03ea075e1"
  },
  {
    "url": "security/spring-security.html",
    "revision": "bc032cd3f8442ba06e17ef5b44715b62"
  },
  {
    "url": "server/index.html",
    "revision": "be0507a2b27b84048e1100dd9e95faee"
  },
  {
    "url": "server/jetty.html",
    "revision": "97d61e6d36ad8de94146befadada3eba"
  },
  {
    "url": "server/tomcat.html",
    "revision": "315921187241393942336a95023f26e3"
  },
  {
    "url": "soa/dubbo.html",
    "revision": "976c7c9f2ea9b1fd54e757a1395ae157"
  },
  {
    "url": "soa/index.html",
    "revision": "993a14effba05f0dfa8a9d98c2c1ab8b"
  },
  {
    "url": "soa/netty.html",
    "revision": "c5a3c63a3feeedf1c4bee1966bfb94aa"
  },
  {
    "url": "test/index.html",
    "revision": "26078d349a410999a0c79f68080f7077"
  },
  {
    "url": "test/jmeter.html",
    "revision": "b42e9e09ae123fcce65923675aa24c59"
  },
  {
    "url": "test/jmh.html",
    "revision": "376285c88db2edab13551d7a45650623"
  },
  {
    "url": "test/junit.html",
    "revision": "f17b47fcc21ba1cb5c321e7dc29fe72d"
  },
  {
    "url": "test/mockito.html",
    "revision": "98cf51c5db1442a61db79f9b5f493283"
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
