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
    "revision": "624f6532bc1978f4c43da7c4d3e0180d"
  },
  {
    "url": "api/application-api.html",
    "revision": "1da85ad804eee4acb4396735b0f8472d"
  },
  {
    "url": "api/application-config.html",
    "revision": "60b5038e8f444271450a39ee64c7ca8c"
  },
  {
    "url": "api/basic-reactivity.html",
    "revision": "7c27188c644eecf979384f09e9521cf7"
  },
  {
    "url": "api/built-in-components.html",
    "revision": "e46efe0d9d5e0bcbfe7f9b2ffe9275c5"
  },
  {
    "url": "api/composition-api.html",
    "revision": "70a0862dab80d40d133a6f9cc3110201"
  },
  {
    "url": "api/computed-watch-api.html",
    "revision": "0c527cbff0c6ead375552a7e99bc57f0"
  },
  {
    "url": "api/directives.html",
    "revision": "2ceb62f62eafda01ac3fc2df90cd9ac3"
  },
  {
    "url": "api/global-api.html",
    "revision": "1ef17b8999f028417e386c1af898e64e"
  },
  {
    "url": "api/instance-methods.html",
    "revision": "f4c33306a734e3b1d2e82034702263e7"
  },
  {
    "url": "api/instance-properties.html",
    "revision": "26ea6b898c5826d1c7003dbe7b15a16d"
  },
  {
    "url": "api/options-assets.html",
    "revision": "82296d02cfbd367fcbdbc7caf6b5c85c"
  },
  {
    "url": "api/options-composition.html",
    "revision": "68c9e0d17709b4af844aca279cdc609b"
  },
  {
    "url": "api/options-data.html",
    "revision": "76fe2ad360eae8baee8e1e6c47b4110d"
  },
  {
    "url": "api/options-dom.html",
    "revision": "f5b4fbb2b9998c220307b414227732b6"
  },
  {
    "url": "api/options-lifecycle-hooks.html",
    "revision": "ebfde72efa99960cb23d03a0a6ecef5b"
  },
  {
    "url": "api/options-misc.html",
    "revision": "7747fb7d0bdb35950a9783dc079a646c"
  },
  {
    "url": "api/refs-api.html",
    "revision": "b14c1568566f902267340bf45f2b795b"
  },
  {
    "url": "api/special-attributes.html",
    "revision": "93eeb47c37548074121f0826312737ac"
  },
  {
    "url": "assets/css/0.styles.82f06290.css",
    "revision": "94435bee4661826059acf42ed0aaf327"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.39d38537.js",
    "revision": "7f599a0d47b4ac910e52b12d8d78a81a"
  },
  {
    "url": "assets/js/10.2d3226ba.js",
    "revision": "1e8c39acb466650ba535092719ca7c49"
  },
  {
    "url": "assets/js/100.cf95fa60.js",
    "revision": "a8ef42a05f488cd64ffda5b5442f2117"
  },
  {
    "url": "assets/js/101.f062b927.js",
    "revision": "04b38fb664335604bfba8082b7298946"
  },
  {
    "url": "assets/js/102.1091f733.js",
    "revision": "16a546c73d029a4d443fdd13cefe290c"
  },
  {
    "url": "assets/js/103.16e53a07.js",
    "revision": "ca4704a4ef596cbfd26f5eb690611483"
  },
  {
    "url": "assets/js/104.101e23b5.js",
    "revision": "54456e5d92b5a618d450eeebd95710a0"
  },
  {
    "url": "assets/js/105.9c803cb4.js",
    "revision": "f5098e0bcb069feae6a41c0a674a59bb"
  },
  {
    "url": "assets/js/106.b935242e.js",
    "revision": "435f6afa279d04222044534a67d3cfcb"
  },
  {
    "url": "assets/js/107.669bd802.js",
    "revision": "8ad60b93bd708c56ccd03ab0bc1674ab"
  },
  {
    "url": "assets/js/108.df635a03.js",
    "revision": "61a7bdff621b1faa161ac5b3bba30055"
  },
  {
    "url": "assets/js/109.9f440e06.js",
    "revision": "4fc2b78319260a96f4cb94d0430d75cd"
  },
  {
    "url": "assets/js/11.c82e8994.js",
    "revision": "48967c0354df19b9846f7f96e8d8e008"
  },
  {
    "url": "assets/js/110.b37ff180.js",
    "revision": "8ab3d6675fa2a38beb2a106a1940d752"
  },
  {
    "url": "assets/js/111.8a17d886.js",
    "revision": "483dc6e0c49fb62c191ea6af14255a2d"
  },
  {
    "url": "assets/js/112.31e718c7.js",
    "revision": "5a664bcdd9c3f2406fdf956cb58f4705"
  },
  {
    "url": "assets/js/113.095e2c24.js",
    "revision": "a238991c12f3d9cdf308a452196a020c"
  },
  {
    "url": "assets/js/114.4f5e8420.js",
    "revision": "f99ba88f534a913d47b642610aeec9f2"
  },
  {
    "url": "assets/js/115.334c9eb0.js",
    "revision": "c5af6c5c3d4501c9e2ca7e9d52426193"
  },
  {
    "url": "assets/js/116.d7012ed6.js",
    "revision": "7541f299cd8ac8659bd9d5b1a8eda8f0"
  },
  {
    "url": "assets/js/117.699383af.js",
    "revision": "9bad52c1a84cdb07f82e3f80ba2c6f41"
  },
  {
    "url": "assets/js/118.74ce11fe.js",
    "revision": "6d98cf85767bd7acb03fd1aa5994bbc7"
  },
  {
    "url": "assets/js/119.c2aa89cb.js",
    "revision": "e9eae5b4a563aba0e93637572cc46e4f"
  },
  {
    "url": "assets/js/12.2f90a747.js",
    "revision": "a346fc97dacd8073a8a9d3d16e3b4890"
  },
  {
    "url": "assets/js/120.fbbb5019.js",
    "revision": "7346dae8487aaef7253a42c6d7ddc3af"
  },
  {
    "url": "assets/js/121.8ef6870d.js",
    "revision": "532d015258b792e442ffab0cf6d9c24e"
  },
  {
    "url": "assets/js/122.f41bfde7.js",
    "revision": "2fa48ba3bf5c27eee38dcc6dc68f208a"
  },
  {
    "url": "assets/js/123.88bff705.js",
    "revision": "9b32d6656d94c5ae55c46e97dd59ad56"
  },
  {
    "url": "assets/js/124.01d19045.js",
    "revision": "edf9e57c460849869c89858535b3bb4a"
  },
  {
    "url": "assets/js/125.092234fe.js",
    "revision": "a88d1e2fadc96ea34d347a002622f9ef"
  },
  {
    "url": "assets/js/126.3c6cabda.js",
    "revision": "fea74bf78dded9fd7ab9d86cc8bac8d3"
  },
  {
    "url": "assets/js/127.af883718.js",
    "revision": "09ae2de5b5ffa187c98dcf888af9f3c7"
  },
  {
    "url": "assets/js/128.8ba6b703.js",
    "revision": "2397879cf63ac624b9f6f6817841fb60"
  },
  {
    "url": "assets/js/129.0821f111.js",
    "revision": "6795cd08764fd4fcf7baac9b783c535f"
  },
  {
    "url": "assets/js/13.1059a009.js",
    "revision": "816cd3efb012022fc669a6f6953f9d64"
  },
  {
    "url": "assets/js/130.2b767541.js",
    "revision": "3fb52d3436f43dc7d15e6cafb8bda2c8"
  },
  {
    "url": "assets/js/131.612e3f2d.js",
    "revision": "191d2f80452ed0934158b85a1ba2ee7b"
  },
  {
    "url": "assets/js/132.4555491c.js",
    "revision": "f5990cc227c692a0844fd534e7779e03"
  },
  {
    "url": "assets/js/133.60706bb7.js",
    "revision": "fe265f5f675223ea9dcee2df382e264b"
  },
  {
    "url": "assets/js/134.088e483e.js",
    "revision": "8830eb9174c6212a18ccfdcdccea039d"
  },
  {
    "url": "assets/js/135.51f7a610.js",
    "revision": "b906e50b130a6020fe0162d9151c56f4"
  },
  {
    "url": "assets/js/136.867a1fa6.js",
    "revision": "d7567dc99e37ef209e9000230a604680"
  },
  {
    "url": "assets/js/137.20fe6234.js",
    "revision": "520a52157580a4d55f223aed2c6bc1b5"
  },
  {
    "url": "assets/js/138.f0451f78.js",
    "revision": "183c603b628d0724b8dd9fb16d8697bc"
  },
  {
    "url": "assets/js/139.9ded1576.js",
    "revision": "6bdc5e0d71b2fdabc2c674db1aac96b9"
  },
  {
    "url": "assets/js/14.d2e07453.js",
    "revision": "511292a785cb3e988f998f13f4c16510"
  },
  {
    "url": "assets/js/140.617a227c.js",
    "revision": "871cdfe32df2c6401e21c786cefeae8c"
  },
  {
    "url": "assets/js/141.d1eccebd.js",
    "revision": "03771a670622c84a6fdb8a624cfcc7c3"
  },
  {
    "url": "assets/js/142.20876470.js",
    "revision": "179c73719eb7d0725dff7dedfa7d7745"
  },
  {
    "url": "assets/js/143.0b1c4366.js",
    "revision": "3bf74cae5a9206fcd895a9b011eb3696"
  },
  {
    "url": "assets/js/144.b1b8fde9.js",
    "revision": "2d3852566226b3e353b2dbc043271fd1"
  },
  {
    "url": "assets/js/145.5e4e278e.js",
    "revision": "c32a393e469132e5da115b61cce769cf"
  },
  {
    "url": "assets/js/146.22c2f627.js",
    "revision": "e4a6ee0e33d3b5e2ec7ea8ddbe0325a0"
  },
  {
    "url": "assets/js/147.e12c8a6b.js",
    "revision": "832f204723138099c6a7ef2f591f9c0f"
  },
  {
    "url": "assets/js/148.1d522a1a.js",
    "revision": "46cad20da94a258028e6e759427704ef"
  },
  {
    "url": "assets/js/149.ffc61b72.js",
    "revision": "e10006160ecd3a72c13c49ec147c6f07"
  },
  {
    "url": "assets/js/15.58abb84a.js",
    "revision": "b211672d796eb306ecad36e004603edb"
  },
  {
    "url": "assets/js/16.4bb9a753.js",
    "revision": "fcb3199488d0db15f904819166e0aa6c"
  },
  {
    "url": "assets/js/17.f9218930.js",
    "revision": "2ecb29c83870245f06b1c186b7334da8"
  },
  {
    "url": "assets/js/18.277e446f.js",
    "revision": "614beac56edf8ec17ed2dd94387615b2"
  },
  {
    "url": "assets/js/19.01793c28.js",
    "revision": "d8f69fd26ceb32e8bb7d0e4f3064f5c2"
  },
  {
    "url": "assets/js/2.6fcdc472.js",
    "revision": "f667a69e90467e45e3ab8f87f2fab9b1"
  },
  {
    "url": "assets/js/20.0c907833.js",
    "revision": "41ce6618ed900afef9be04dc26b5d917"
  },
  {
    "url": "assets/js/21.19a8ee66.js",
    "revision": "769b40ce03f1988d51627b5c9069f285"
  },
  {
    "url": "assets/js/22.53c0efda.js",
    "revision": "19422d3ea4f220ac810dc98a308933ac"
  },
  {
    "url": "assets/js/23.0eddc2be.js",
    "revision": "0a3b91791849d3eed6863842e7920889"
  },
  {
    "url": "assets/js/24.51f3293e.js",
    "revision": "4f9bf61e13de62ef190fe2dca2206ca2"
  },
  {
    "url": "assets/js/25.08df349d.js",
    "revision": "f8b04e9bc131a10031fb0a8e6d0a5f74"
  },
  {
    "url": "assets/js/26.bfdd6482.js",
    "revision": "0a43fc205b7a1afcebe9021cd92e8dbf"
  },
  {
    "url": "assets/js/27.186df596.js",
    "revision": "3b810efffa707d01aa712a8b4f409010"
  },
  {
    "url": "assets/js/28.722e6430.js",
    "revision": "c8303087127b93be573e9a7d8bdb46ae"
  },
  {
    "url": "assets/js/29.ca2d8a66.js",
    "revision": "1a4349876c7cf67adeee955a044da2cc"
  },
  {
    "url": "assets/js/3.48b5dd9e.js",
    "revision": "f86e78252f11050fc7a93a9315b693e7"
  },
  {
    "url": "assets/js/30.45408cab.js",
    "revision": "72c41bda74f8193d3bb038cb602e1faa"
  },
  {
    "url": "assets/js/31.dfcc3c11.js",
    "revision": "0749a6b00497bb4ef495670e837e30f4"
  },
  {
    "url": "assets/js/32.943149f7.js",
    "revision": "bb90809621d27f5635bedf2fd1abb7e1"
  },
  {
    "url": "assets/js/33.ead21770.js",
    "revision": "0411a5b8c78ddf57f08a5dc54aa13e62"
  },
  {
    "url": "assets/js/34.13a1fd2d.js",
    "revision": "2a85f48e59a568e2504dd3b493936db7"
  },
  {
    "url": "assets/js/35.071a7c03.js",
    "revision": "771f1222dd40695cbd814e1766656232"
  },
  {
    "url": "assets/js/36.7ab40bbd.js",
    "revision": "9e5457f4811afe1667c300dd1eb88f86"
  },
  {
    "url": "assets/js/37.b624d8ab.js",
    "revision": "1236d75749222b4b9a2e59bb43d901cb"
  },
  {
    "url": "assets/js/38.6fecb34e.js",
    "revision": "a4922a265caa220625f4f9d376f1844e"
  },
  {
    "url": "assets/js/39.c7d55f1c.js",
    "revision": "73cfde33ecddb3aaf60bc64673b5557d"
  },
  {
    "url": "assets/js/4.0146c316.js",
    "revision": "2a7d73812e06abbccd73b88132c6fb6a"
  },
  {
    "url": "assets/js/40.87ac46f6.js",
    "revision": "1f584208cb11b251bef5e33f9a650e59"
  },
  {
    "url": "assets/js/41.c16e28aa.js",
    "revision": "6c08f035427fe970b105b04cbd9bd963"
  },
  {
    "url": "assets/js/42.69160af1.js",
    "revision": "6b3a2f50008e06dc7423785925817b10"
  },
  {
    "url": "assets/js/43.51c65b33.js",
    "revision": "97cc719459bd0466e53c008da07fdf95"
  },
  {
    "url": "assets/js/44.48e95097.js",
    "revision": "308a7ae3423497a82e7e358c8c64a981"
  },
  {
    "url": "assets/js/45.13c36fc4.js",
    "revision": "07de736b54a41276b3a36cdef6db8b46"
  },
  {
    "url": "assets/js/46.b2bae880.js",
    "revision": "d0b5f44b47d3e6e09ea124c3563a0316"
  },
  {
    "url": "assets/js/47.a8783c03.js",
    "revision": "93e3851b5ddd99ad8e90fda8cf25d866"
  },
  {
    "url": "assets/js/48.b2bf3554.js",
    "revision": "ed0a43d2a96ef709eedfab1aa084f596"
  },
  {
    "url": "assets/js/49.2b6d98b0.js",
    "revision": "c58d052eacde74f6b26c2c3d7a63ceca"
  },
  {
    "url": "assets/js/5.e993ccba.js",
    "revision": "0ace3397afbd0240e9a2954c7a225c89"
  },
  {
    "url": "assets/js/50.92922a10.js",
    "revision": "9fa9525a7a870fc4e117c5f8d045bfad"
  },
  {
    "url": "assets/js/51.3c4a41f3.js",
    "revision": "f79e28f64c5c4b9c9282c4114df6d0f6"
  },
  {
    "url": "assets/js/52.204236dc.js",
    "revision": "7f0a72dbbbbcf60cdb8178a024ff2fb9"
  },
  {
    "url": "assets/js/53.2febe021.js",
    "revision": "0155639a6ebb438aed7c2c346543938c"
  },
  {
    "url": "assets/js/54.2fe25592.js",
    "revision": "06131c301c59649d1f6e723dc95cc72d"
  },
  {
    "url": "assets/js/55.bb6eee5e.js",
    "revision": "2bfa0f3bb75f1bcdd722dc3d59356419"
  },
  {
    "url": "assets/js/56.aba5d13c.js",
    "revision": "e9c77764fb1c18a5ec751deb36d4978e"
  },
  {
    "url": "assets/js/57.714946d3.js",
    "revision": "3b436dce87fc1052ba25445b557622d7"
  },
  {
    "url": "assets/js/58.78a4763f.js",
    "revision": "67eba12546b7e8ec5f3280d76833ca71"
  },
  {
    "url": "assets/js/59.20304dfa.js",
    "revision": "72883e6431abd9048eee7459d50569e5"
  },
  {
    "url": "assets/js/6.0188eec3.js",
    "revision": "0eb5a66ce2c07ee2b5ebb0f2bd8f2294"
  },
  {
    "url": "assets/js/60.b8d4d7a8.js",
    "revision": "6643ffbcaa2d7e5cacb94929ea3d5eff"
  },
  {
    "url": "assets/js/61.7cf95a61.js",
    "revision": "c5a3b680efe335758394eec6c1de8d62"
  },
  {
    "url": "assets/js/62.ef9df678.js",
    "revision": "288de4d3b6a754c799b6ce9dbd569d22"
  },
  {
    "url": "assets/js/63.3b35291a.js",
    "revision": "b3b3087db168e97211338eb8f747a5c6"
  },
  {
    "url": "assets/js/64.a83d8799.js",
    "revision": "ca95783e5f8f77328117c33fc8393c6f"
  },
  {
    "url": "assets/js/65.c6af3d91.js",
    "revision": "89c68bb12308ae0cbd9077cbf5f4b306"
  },
  {
    "url": "assets/js/66.f1d153f6.js",
    "revision": "e272e6fcc99bab040641e5155b5be932"
  },
  {
    "url": "assets/js/67.5624f85c.js",
    "revision": "c549c87be1d85be670cc9e0beac30896"
  },
  {
    "url": "assets/js/68.a17323da.js",
    "revision": "630392d74b21142b93fdabcdeb396646"
  },
  {
    "url": "assets/js/69.c7689c10.js",
    "revision": "2c978d4d54e395d166c79f9e0f17c279"
  },
  {
    "url": "assets/js/70.3fdab112.js",
    "revision": "9af8e452decca044b765d6c20aa752e1"
  },
  {
    "url": "assets/js/71.2d391b8b.js",
    "revision": "d70e513188a9fb8ad5b8f3390120e135"
  },
  {
    "url": "assets/js/72.5916e7bb.js",
    "revision": "6882c1442175a9745e6fdb626bce6ba7"
  },
  {
    "url": "assets/js/73.23040d9d.js",
    "revision": "a872ca5c01c60183eb6903a647cc35be"
  },
  {
    "url": "assets/js/74.0c474c1b.js",
    "revision": "1c938d31be4d4c8c2432a7132d56e36e"
  },
  {
    "url": "assets/js/75.9fb01ef8.js",
    "revision": "9c4af89dc7ccc6b723ac73003fc9ab56"
  },
  {
    "url": "assets/js/76.452cd437.js",
    "revision": "46f86737df42ec8a84e35d9d476a4ee6"
  },
  {
    "url": "assets/js/77.1ab6ed3e.js",
    "revision": "83e6770e0e586f48fe94b34c5f983baf"
  },
  {
    "url": "assets/js/78.3dfbf0c1.js",
    "revision": "da2f3dc92e6b79a059b0bab3400aaae6"
  },
  {
    "url": "assets/js/79.b02d9cd2.js",
    "revision": "b59a3e5592de7240db8b15c451d04eea"
  },
  {
    "url": "assets/js/80.861c8c48.js",
    "revision": "dc8b17cc9bc7fee82ca8eb43c9bdce6c"
  },
  {
    "url": "assets/js/81.529bdcc5.js",
    "revision": "dfd643817f28d47b9e9ba6a1be9bed1a"
  },
  {
    "url": "assets/js/82.14f67fc0.js",
    "revision": "8ff05e6a9d746227f15e553cdbcbe6b1"
  },
  {
    "url": "assets/js/83.9e256c9d.js",
    "revision": "4bd1b13c0f6f65f2a058b90cd45058bc"
  },
  {
    "url": "assets/js/84.9bb0ec45.js",
    "revision": "0aa598d4ca929908e05d86b32a42cf30"
  },
  {
    "url": "assets/js/85.2a34c1bc.js",
    "revision": "7d2cc9c72fd0e06fce383784195c924e"
  },
  {
    "url": "assets/js/86.57ad42a2.js",
    "revision": "53569692e7653a57947987893ff6a61e"
  },
  {
    "url": "assets/js/87.dc629f8a.js",
    "revision": "3d5eecb152784ad4bab02333f09b1c8d"
  },
  {
    "url": "assets/js/88.5c6d0d78.js",
    "revision": "bca4bf077a300dc46991e9f4247383fb"
  },
  {
    "url": "assets/js/89.2f34d253.js",
    "revision": "c090e874410beca481c32b274c8426ad"
  },
  {
    "url": "assets/js/9.cc64508c.js",
    "revision": "b3df2f07e73d55efd947b73e36fa7b76"
  },
  {
    "url": "assets/js/90.616b3290.js",
    "revision": "2c73fdc2f7aef275c46e94f60297cc9e"
  },
  {
    "url": "assets/js/91.06b9fc5c.js",
    "revision": "8d9257913115289b30f6f46e6c396c18"
  },
  {
    "url": "assets/js/92.e3e3c890.js",
    "revision": "5173c94fd99456cda0b0b13727ca5ae6"
  },
  {
    "url": "assets/js/93.f713ea34.js",
    "revision": "0b7dc0250b15f60cdf94fbd648c23e5d"
  },
  {
    "url": "assets/js/94.bc87bc11.js",
    "revision": "7a0f74489c8d894f8cfa40422ccc01e1"
  },
  {
    "url": "assets/js/95.dcecd210.js",
    "revision": "74daba866c654d0a138ebb96b3e30a1f"
  },
  {
    "url": "assets/js/96.7c6f47c4.js",
    "revision": "6d1656887df7de769aa8ff953c259e4a"
  },
  {
    "url": "assets/js/97.6e54d308.js",
    "revision": "23b9c178495ccaeb04e9dfe955b8b1bb"
  },
  {
    "url": "assets/js/98.a9207b5a.js",
    "revision": "deb19f62799f6c43741580a2c0a8d728"
  },
  {
    "url": "assets/js/99.eb37cc9b.js",
    "revision": "8548017a8250a81bf80c5282d652c6cf"
  },
  {
    "url": "assets/js/app.88b9bbe0.js",
    "revision": "ea7111d5be9350dc352807a5eaf47f12"
  },
  {
    "url": "assets/js/vendors~docsearch.141c283c.js",
    "revision": "f7a46e0d271336e198c5b7f75ebc1dbe"
  },
  {
    "url": "coc/index.html",
    "revision": "fc3a254fb0444e626845d71a07e7fb1a"
  },
  {
    "url": "community/join.html",
    "revision": "d3a68dd2eb83f8f3aa427d1f405830b3"
  },
  {
    "url": "community/partners.html",
    "revision": "0a99245a5a83a4755c33ca38bb9e0038"
  },
  {
    "url": "community/team.html",
    "revision": "305a88331b1cfa9dcecbdeab61f89069"
  },
  {
    "url": "community/themes.html",
    "revision": "1486602d63267023c2f3cfc676bca2ca"
  },
  {
    "url": "cookbook/editable-svg-icons.html",
    "revision": "5d5213c55da0ebaa133cfdd9d4b5b90f"
  },
  {
    "url": "cookbook/index.html",
    "revision": "b5a127a4c3e2e98f837813f8d35ed9f3"
  },
  {
    "url": "examples/commits.html",
    "revision": "13fe7071ff969eadbed2d02c77222f35"
  },
  {
    "url": "examples/elastic-header.html",
    "revision": "5b22b9c9a1a3b5af7579dc7fc235e5d6"
  },
  {
    "url": "examples/grid-component.html",
    "revision": "2b8c386f67c7081a93205e6ac22250e1"
  },
  {
    "url": "examples/markdown.html",
    "revision": "f1b8c09e40e4ed21828459112b43d306"
  },
  {
    "url": "examples/modal.html",
    "revision": "671c6162c23fb3195f76d8616340e2b4"
  },
  {
    "url": "examples/select2.html",
    "revision": "c4ba3cfc29a9620a171319435864fbce"
  },
  {
    "url": "examples/svg.html",
    "revision": "1b839a0664cff37befc121e5b28493d5"
  },
  {
    "url": "examples/todomvc.html",
    "revision": "7059f3ea1a379045aa3768f70e89cf3d"
  },
  {
    "url": "examples/tree-view.html",
    "revision": "e9f181add966cc042762d629014b4fe7"
  },
  {
    "url": "guide/a11y-basics.html",
    "revision": "370ee71dc780793e2ff408bb5a0c6a9f"
  },
  {
    "url": "guide/a11y-resources.html",
    "revision": "738d7b9e3650d966f6968e0889d9dcec"
  },
  {
    "url": "guide/a11y-semantics.html",
    "revision": "583f642d9e0a3eaef84ea7b5f248fde5"
  },
  {
    "url": "guide/a11y-standards.html",
    "revision": "ef9f7ebb4676c72a08ea7a8c891a9006"
  },
  {
    "url": "guide/change-detection.html",
    "revision": "7afe528cb72697fd655ed3ff7277e391"
  },
  {
    "url": "guide/class-and-style.html",
    "revision": "6529ba2774d55642d74d1aa340284df1"
  },
  {
    "url": "guide/component-attrs.html",
    "revision": "32cfa35b0ac55966aa92c5e45ea2b89e"
  },
  {
    "url": "guide/component-basics.html",
    "revision": "aa11036d3debd0d71aa98d09dd7c4ffa"
  },
  {
    "url": "guide/component-custom-events.html",
    "revision": "d6ee44d329f6ed541ca0e52100cf567e"
  },
  {
    "url": "guide/component-dynamic-async.html",
    "revision": "a0417f600832bcf0d409b679ebdbff6f"
  },
  {
    "url": "guide/component-edge-cases.html",
    "revision": "2cdb45360e3e76b04b6515f8d3347e8a"
  },
  {
    "url": "guide/component-props.html",
    "revision": "11474c02d08420be746f70070f6d3f4f"
  },
  {
    "url": "guide/component-provide-inject.html",
    "revision": "d32e01359aaf312dce500838343946b9"
  },
  {
    "url": "guide/component-registration.html",
    "revision": "07801a59ad96fb9ca271db63790951f8"
  },
  {
    "url": "guide/component-slots.html",
    "revision": "c081d1fccceac81243715dacc265f65b"
  },
  {
    "url": "guide/component-template-refs.html",
    "revision": "5bbff31c821f708320aa43b98e81ee44"
  },
  {
    "url": "guide/composition-api-introduction.html",
    "revision": "f9e9fccfdfbfd082732d056767794ba0"
  },
  {
    "url": "guide/composition-api-lifecycle-hooks.html",
    "revision": "97ee9632488c4c64dbf165e60085510e"
  },
  {
    "url": "guide/composition-api-provide-inject.html",
    "revision": "2fc629daf9417fc8768ccbee268dff0f"
  },
  {
    "url": "guide/composition-api-setup.html",
    "revision": "52371d3a3d722a597fe8d5ba0d19c54e"
  },
  {
    "url": "guide/composition-api-template-refs.html",
    "revision": "f9ea767d42834f6987c0206213e056c9"
  },
  {
    "url": "guide/computed.html",
    "revision": "1cb7e2f9247db1fd757862e06d161bb1"
  },
  {
    "url": "guide/conditional.html",
    "revision": "1164d0d386c33772ce71c9e6b9012054"
  },
  {
    "url": "guide/contributing/doc-style-guide.html",
    "revision": "c2e7b06633d69223e38dac16abe6d8e4"
  },
  {
    "url": "guide/contributing/translations.html",
    "revision": "2327cb2cc9ec4f43257da035c33b0c51"
  },
  {
    "url": "guide/contributing/writing-guide.html",
    "revision": "159f615ad1ef1fba9294862179024fef"
  },
  {
    "url": "guide/custom-directive.html",
    "revision": "b5c4e8d8827b2c499447aa3e8e26dfa1"
  },
  {
    "url": "guide/events.html",
    "revision": "d721d9b8832ef18da260ea7bf17222e4"
  },
  {
    "url": "guide/forms.html",
    "revision": "93a6ad3910f75278ea1b7ab0e4268e9a"
  },
  {
    "url": "guide/installation.html",
    "revision": "ae8d382b36ea364016947db9103a39c9"
  },
  {
    "url": "guide/instance.html",
    "revision": "12630cc258bc90b1d07a755c886042cd"
  },
  {
    "url": "guide/introduction.html",
    "revision": "74263f8c358b9dfaa3df893f21805472"
  },
  {
    "url": "guide/list.html",
    "revision": "e084820bbece1d1efc66ae66357f2c9f"
  },
  {
    "url": "guide/migration/array-refs.html",
    "revision": "849b76581a01a0923fe283747f4bbdc4"
  },
  {
    "url": "guide/migration/async-components.html",
    "revision": "c9bc7539967bf9ff6efa9e6878562851"
  },
  {
    "url": "guide/migration/attribute-coercion.html",
    "revision": "c6f587e65d64a39fcf53980578c30153"
  },
  {
    "url": "guide/migration/custom-directives.html",
    "revision": "f7ff0c86f84179bbc8d59b197a2f87d6"
  },
  {
    "url": "guide/migration/custom-elements-interop.html",
    "revision": "b703eac381a1d7228cdb5d362752e761"
  },
  {
    "url": "guide/migration/data-option.html",
    "revision": "f3727059d8057b57e36a7e69ebfd48e3"
  },
  {
    "url": "guide/migration/events-api.html",
    "revision": "316937a62cf35597d58ba0a7971c5948"
  },
  {
    "url": "guide/migration/filters.html",
    "revision": "deb0ed9c468438a72df4ddd9fa48faba"
  },
  {
    "url": "guide/migration/fragments.html",
    "revision": "8b0500492086bf8478a404f8f68e5722"
  },
  {
    "url": "guide/migration/functional-components.html",
    "revision": "af8a1f4d93db27b23e64b886a6900122"
  },
  {
    "url": "guide/migration/global-api-treeshaking.html",
    "revision": "4adfd93ba009d6abf30e33374a049fb8"
  },
  {
    "url": "guide/migration/global-api.html",
    "revision": "7446a5fefe76eac8582e5c34a08b112f"
  },
  {
    "url": "guide/migration/inline-template-attribute.html",
    "revision": "d7f33d97017473e07fca5ca4a682150f"
  },
  {
    "url": "guide/migration/introduction.html",
    "revision": "8e508b6ef015945e98d659404b55f39c"
  },
  {
    "url": "guide/migration/key-attribute.html",
    "revision": "8f1ff2fe85cf446979d3ace8242922d0"
  },
  {
    "url": "guide/migration/keycode-modifiers.html",
    "revision": "4bf76f202f9a8699bd84037a9b722e47"
  },
  {
    "url": "guide/migration/props-default-this.html",
    "revision": "af0147a045abed2d3cda82730ba21d9c"
  },
  {
    "url": "guide/migration/render-function-api.html",
    "revision": "3930b61c34f251cf486947655e9cf2a7"
  },
  {
    "url": "guide/migration/slots-unification.html",
    "revision": "e078eaf563c13f0320e055b7eaeea1d6"
  },
  {
    "url": "guide/migration/transition.html",
    "revision": "8c0b1c0d12e9bd0d6bb39d3e3bd1d4c3"
  },
  {
    "url": "guide/migration/v-bind.html",
    "revision": "7cb02686e0e86977c2918c59161559d0"
  },
  {
    "url": "guide/migration/v-if-v-for.html",
    "revision": "826f07acb15bec4a32c9e6b17c8dfef8"
  },
  {
    "url": "guide/migration/v-model.html",
    "revision": "f64dc3bac5063795f450cf9edd1dbe17"
  },
  {
    "url": "guide/migration/watch.html",
    "revision": "6e6aa4c9905d0cef6ab61ae703b69329"
  },
  {
    "url": "guide/mixins.html",
    "revision": "2a0072b941dd3404a57909f03bf935cb"
  },
  {
    "url": "guide/mobile.html",
    "revision": "71b293f709bc8da41e43d78f1ec3717f"
  },
  {
    "url": "guide/optimizations.html",
    "revision": "8946bfd1b3f21b7172ccae4b1e01b9dd"
  },
  {
    "url": "guide/plugins.html",
    "revision": "6a5abd0d1cb2367d07a7323151c40d1d"
  },
  {
    "url": "guide/reactivity-computed-watchers.html",
    "revision": "ffe1287b94994aa8a4921b2b84f1cc4a"
  },
  {
    "url": "guide/reactivity-fundamentals.html",
    "revision": "ca3396dc70de426e6d903a48ea6a75ea"
  },
  {
    "url": "guide/reactivity.html",
    "revision": "67c66416962df7edb1594ca3e261f316"
  },
  {
    "url": "guide/render-function.html",
    "revision": "2f5bfe76cf1b2e4142c848065864f910"
  },
  {
    "url": "guide/routing.html",
    "revision": "c82e2f87135da5ff49561686e0053987"
  },
  {
    "url": "guide/single-file-component.html",
    "revision": "e00c05a02024473485aa0ac489e381d5"
  },
  {
    "url": "guide/ssr.html",
    "revision": "946ead84e74eda62111eae90fa7eb698"
  },
  {
    "url": "guide/state-management.html",
    "revision": "e53c729d8678231127007550bc66bb56"
  },
  {
    "url": "guide/teleport.html",
    "revision": "99f33f2f4ee2109253cdb6a9d9c610a1"
  },
  {
    "url": "guide/template-syntax.html",
    "revision": "7804fa0c5c2c5387f41a0cf14ff2b4bd"
  },
  {
    "url": "guide/testing.html",
    "revision": "6346d611dec7d34826361ad322cb97d6"
  },
  {
    "url": "guide/transitions-enterleave.html",
    "revision": "2db9046038689191f82a17a40702048b"
  },
  {
    "url": "guide/transitions-list.html",
    "revision": "cdf0921a95c66e387b358c0bef99082a"
  },
  {
    "url": "guide/transitions-overview.html",
    "revision": "d4a50631808bfdaed0181dfd4ec9a305"
  },
  {
    "url": "guide/transitions-state.html",
    "revision": "b6f81fdbb0b077b8d66db3d298796d02"
  },
  {
    "url": "guide/typescript-support.html",
    "revision": "68c1d127c1bf93e88c7488dd30d75ac1"
  },
  {
    "url": "images/AccessibilityChromeDeveloperTools.png",
    "revision": "25c2a61b52ea8753aa4693a16abaa43f"
  },
  {
    "url": "images/AccessibleARIAdescribedby.png",
    "revision": "d2b26eb9ae0006509801691c289a86d3"
  },
  {
    "url": "images/AccessibleARIAlabelDevTools.png",
    "revision": "05cb34b380cef9627d5c9a3c0ba64dca"
  },
  {
    "url": "images/AccessibleARIAlabelledbyDevTools.png",
    "revision": "1554e00985256ca1042caffbf59709cc"
  },
  {
    "url": "images/AccessibleLabelChromeDevTools.png",
    "revision": "5b9d491c368093887624f4dfacdb6431"
  },
  {
    "url": "images/components_provide.png",
    "revision": "f7110a1bae2d0744997012ca656d8fa1"
  },
  {
    "url": "images/components.png",
    "revision": "b5c08269dfc26ae6d7db3801e9efd296"
  },
  {
    "url": "images/css-vs-js-ease.svg",
    "revision": "86fdaaa3196eddb5974ef5b4a593b41f"
  },
  {
    "url": "images/dom-tree.png",
    "revision": "f70b86bfbbfe1962dc5d6125105f1122"
  },
  {
    "url": "images/icons/android-icon-144x144.png",
    "revision": "e67b8d54852c2fbf40be2a8eb0590f5b"
  },
  {
    "url": "images/icons/android-icon-192x192.png",
    "revision": "5d10eaab941eb596ee59ffc53652d035"
  },
  {
    "url": "images/icons/android-icon-36x36.png",
    "revision": "bb757d234def1a6b53d793dbf4879578"
  },
  {
    "url": "images/icons/android-icon-48x48.png",
    "revision": "0d33c4fc51e2bb020bf8dd7cd05db875"
  },
  {
    "url": "images/icons/android-icon-72x72.png",
    "revision": "702c4fafca31d670f9bd8b2d185ced39"
  },
  {
    "url": "images/icons/android-icon-96x96.png",
    "revision": "0ebff702851985ea6ba891cf6e6e7ddd"
  },
  {
    "url": "images/icons/apple-icon-114x114.png",
    "revision": "f4fd30f3a26b932843b8c5cef9f2186e"
  },
  {
    "url": "images/icons/apple-icon-120x120.png",
    "revision": "b6a574d63d52ef9c89189b67bcac5cbd"
  },
  {
    "url": "images/icons/apple-icon-144x144.png",
    "revision": "e67b8d54852c2fbf40be2a8eb0590f5b"
  },
  {
    "url": "images/icons/apple-icon-152x152.png",
    "revision": "f53787bf41febf2b044931a305ccaf2a"
  },
  {
    "url": "images/icons/apple-icon-180x180.png",
    "revision": "9f6b1e3b92b2c5bd5b7d79501bb6e612"
  },
  {
    "url": "images/icons/apple-icon-57x57.png",
    "revision": "83f622ba0994866abc56ace068b6551c"
  },
  {
    "url": "images/icons/apple-icon-60x60.png",
    "revision": "643f761bc39f86c70f17cd1fed3b8e08"
  },
  {
    "url": "images/icons/apple-icon-72x72.png",
    "revision": "702c4fafca31d670f9bd8b2d185ced39"
  },
  {
    "url": "images/icons/apple-icon-76x76.png",
    "revision": "94d9af047b86d99657b5efb88a0d1c7b"
  },
  {
    "url": "images/icons/apple-icon-precomposed.png",
    "revision": "707758f591323153a4f1cb3a8d9641fa"
  },
  {
    "url": "images/icons/apple-icon.png",
    "revision": "707758f591323153a4f1cb3a8d9641fa"
  },
  {
    "url": "images/icons/bacancy_technology.png",
    "revision": "5810bb8253b1e35ba437373ff83f82d3"
  },
  {
    "url": "images/icons/bulb.svg",
    "revision": "570fe3dff7ac341af799819240c4c735"
  },
  {
    "url": "images/icons/danger.svg",
    "revision": "65fd301d5e1cdff7fa2f3911622bb504"
  },
  {
    "url": "images/icons/favicon-16x16.png",
    "revision": "a5a9da66870189b0539223c38c8a7749"
  },
  {
    "url": "images/icons/favicon-32x32.png",
    "revision": "3d60db0d77303b2414ddd50cf2472bf7"
  },
  {
    "url": "images/icons/favicon-96x96.png",
    "revision": "0ebff702851985ea6ba891cf6e6e7ddd"
  },
  {
    "url": "images/icons/info.svg",
    "revision": "a1e5ee15c1a7cf19a66663a168a52ca4"
  },
  {
    "url": "images/icons/ms-icon-144x144.png",
    "revision": "e67b8d54852c2fbf40be2a8eb0590f5b"
  },
  {
    "url": "images/icons/ms-icon-150x150.png",
    "revision": "e8cdf492981122a2548bc247c7b4067d"
  },
  {
    "url": "images/icons/ms-icon-310x310.png",
    "revision": "1721f8303ec2349002b5980a01f27cef"
  },
  {
    "url": "images/icons/ms-icon-70x70.png",
    "revision": "a110cf0132b00b23a8605ca72a8874ba"
  },
  {
    "url": "images/icons/stop.svg",
    "revision": "6f57b84257162dde4203c0439c0ad90e"
  },
  {
    "url": "images/imooc-ad3.png",
    "revision": "a8b8084e0bb616cef5637f589d0c3a49"
  },
  {
    "url": "images/lifecycle.png",
    "revision": "55ca3bcd54e2ee9bd7e3575eb02a1e13"
  },
  {
    "url": "images/partners/monterail.png",
    "revision": "db165491374f80cc4f3190a0ebd918ad"
  },
  {
    "url": "images/partners/vehikl.png",
    "revision": "65f4ae56972001f689053fba43129433"
  },
  {
    "url": "images/paypal.png",
    "revision": "067bd556ce9e4c76538a8057adb6d596"
  },
  {
    "url": "images/scoped-slot.png",
    "revision": "c6ef14ba02eac288245c5c5009d966cc"
  },
  {
    "url": "images/sfc-with-preprocessors.png",
    "revision": "2e57ecfafeac2237d5a003ad9a0ef7bc"
  },
  {
    "url": "images/sfc.png",
    "revision": "e333ce3bf8119bef381ac7c7b2bbd4ba"
  },
  {
    "url": "images/slot.png",
    "revision": "00cf6bd787014eb22b2821d72b80212a"
  },
  {
    "url": "images/sponsors/autocode.svg",
    "revision": "4319bc58220eb3ffaa993488c171c0dc"
  },
  {
    "url": "images/sponsors/bacancy_technology.png",
    "revision": "9a0590eb4ce29289b454240415611162"
  },
  {
    "url": "images/sponsors/bestvpn_co.png",
    "revision": "afbe252b6b59bc3cdac2e7dec69eac39"
  },
  {
    "url": "images/sponsors/bit.png",
    "revision": "9638a3f44bf471876effb80ea0659f73"
  },
  {
    "url": "images/sponsors/chaitin.png",
    "revision": "549e43997790dc624c477424acbfe228"
  },
  {
    "url": "images/sponsors/cloudstudio.png",
    "revision": "fc480cf4c2b06591f58e7e91666226af"
  },
  {
    "url": "images/sponsors/dcloud.gif",
    "revision": "ade7c64e66506b6cff10292efea16ee8"
  },
  {
    "url": "images/sponsors/devexpress.png",
    "revision": "a6d9c786a373088c8d238ca643293c17"
  },
  {
    "url": "images/sponsors/devsquad.png",
    "revision": "e639ea4fd0d7053fc0928d4ff9fefb2a"
  },
  {
    "url": "images/sponsors/fastcoding_inc.png",
    "revision": "08a0a7652db79fa3395c0ef28d49f0cd"
  },
  {
    "url": "images/sponsors/fastcoding_inc.svg",
    "revision": "ff35e14cb519fe5d76e6e8d9444e4fa6"
  },
  {
    "url": "images/sponsors/firestick_tricks.png",
    "revision": "1ee05223a5b12fe910cb8428d57223d8"
  },
  {
    "url": "images/sponsors/flatlogic_templates.svg",
    "revision": "925f0c4421cc6d86ebc9d6788b519220"
  },
  {
    "url": "images/sponsors/foo.png",
    "revision": "1c9cde53bb9c98a316edc93d57684e4d"
  },
  {
    "url": "images/sponsors/frontend_love.png",
    "revision": "b514babc53a0f3ddc854b0b14a54a489"
  },
  {
    "url": "images/sponsors/frontendlove.png",
    "revision": "b514babc53a0f3ddc854b0b14a54a489"
  },
  {
    "url": "images/sponsors/gridsome.png",
    "revision": "e82a2f872ec319bbb5d0a804288cd9b7"
  },
  {
    "url": "images/sponsors/happy_programmer_llc.png",
    "revision": "3f3303d42a57ff9edf36373f59d376af"
  },
  {
    "url": "images/sponsors/html_burger.png",
    "revision": "c7ce1344d001e7a236a89694ed59d988"
  },
  {
    "url": "images/sponsors/icons_8.png",
    "revision": "ffcdd01817ecdb32b92bd2f1e4d75e84"
  },
  {
    "url": "images/sponsors/icons.png",
    "revision": "ad6ee8c400066e15712cdef4342023da"
  },
  {
    "url": "images/sponsors/imooc-sponsor.png",
    "revision": "7ddc7f938fbbc08f816a888225786a4c"
  },
  {
    "url": "images/sponsors/imooc-sponsor2.png",
    "revision": "ce9575f62520e0ac8b7d93ada2c6b274"
  },
  {
    "url": "images/sponsors/inkoop.png",
    "revision": "1cff77d2c927657d3aceeba2c12db892"
  },
  {
    "url": "images/sponsors/intygrate.png",
    "revision": "fdd390b44a4aeed763f53f4e8f6529e4"
  },
  {
    "url": "images/sponsors/isolutions_uk_limited.png",
    "revision": "0f76512940c38b72fcf48337b4d64692"
  },
  {
    "url": "images/sponsors/laravel.png",
    "revision": "9a2fba3eca41e26743dc731e3a4469b6"
  },
  {
    "url": "images/sponsors/modus.png",
    "revision": "6498c04fee5b8542449b350e77180379"
  },
  {
    "url": "images/sponsors/Monterail.png",
    "revision": "bf1ec94a0ca48f0e6be0c97fa60a42c0"
  },
  {
    "url": "images/sponsors/moovweb.png",
    "revision": "8183954731fdeb0f136fac1485198184"
  },
  {
    "url": "images/sponsors/neds.png",
    "revision": "1f1a2a46c2575019ae07a90205f60b65"
  },
  {
    "url": "images/sponsors/onsen_ui.png",
    "revision": "e41569bcb10fbca3f361d818b29ed7fd"
  },
  {
    "url": "images/sponsors/passionate_people.png",
    "revision": "03e59e28347e1dcd165e4e1525afb545"
  },
  {
    "url": "images/sponsors/primevue copy.png",
    "revision": "60f2e8fb0dce3e9045fc3a2a8039fa82"
  },
  {
    "url": "images/sponsors/primevue.png",
    "revision": "60f2e8fb0dce3e9045fc3a2a8039fa82"
  },
  {
    "url": "images/sponsors/programmers_io.png",
    "revision": "02cb415eb9a8e9ce6579c7aff03759dd"
  },
  {
    "url": "images/sponsors/pullrequest.svg",
    "revision": "50847513b306736d33234d50b11c5e1d"
  },
  {
    "url": "images/sponsors/retool.png",
    "revision": "aaad6a749deb625da5771750dcb51920"
  },
  {
    "url": "images/sponsors/roadster.png",
    "revision": "080fb711e736d686f182358a582d7c6b"
  },
  {
    "url": "images/sponsors/shopware_ag.png",
    "revision": "e2ded483c0660bd629938e37f388d9fb"
  },
  {
    "url": "images/sponsors/storekit.png",
    "revision": "cacf47116e5efe9fc2dcd60ebc197707"
  },
  {
    "url": "images/sponsors/storyblok.png",
    "revision": "64ec1772109b769e91138b58526484ad"
  },
  {
    "url": "images/sponsors/tidelift.png",
    "revision": "831935bd53d7d2d4eea9427c5f874816"
  },
  {
    "url": "images/sponsors/tighten_co.png",
    "revision": "003364e7044150e2979cbfe03d640cec"
  },
  {
    "url": "images/sponsors/tooltwist.png",
    "revision": "b81bfd5ae608e965d03aaa5a4164373e"
  },
  {
    "url": "images/sponsors/unicorn.png",
    "revision": "e0c072bd78f366471a393b9c366c9b74"
  },
  {
    "url": "images/sponsors/usave.png",
    "revision": "5cffd5053b1d75ae49c9b6eb176e0ccf"
  },
  {
    "url": "images/sponsors/valuecoders.png",
    "revision": "818ca42a745e018ace0c55c36a7ae3dd"
  },
  {
    "url": "images/sponsors/vehikl.png",
    "revision": "3bd1b88aa9d242d308e838f2342d7660"
  },
  {
    "url": "images/sponsors/vpnranks.png",
    "revision": "35d7392e773d487e13358d8b5f7fb646"
  },
  {
    "url": "images/sponsors/vuejobs.png",
    "revision": "77ed618e17571d1a2d77ad7bc53e8fc4"
  },
  {
    "url": "images/sponsors/vuemastery.png",
    "revision": "6f09ce143467fba22039bde3f2070c19"
  },
  {
    "url": "images/sponsors/vueschool.png",
    "revision": "3d92b4f1a8fcbe3be0d0e89950a1a705"
  },
  {
    "url": "images/sponsors/vuetify.png",
    "revision": "c7cfff77abb10162cb0b7c2ed3b6ac51"
  },
  {
    "url": "images/sponsors/watchcartoononline.png",
    "revision": "f7cf1082b14003908496f02f9eb2ae00"
  },
  {
    "url": "images/sponsors/webdock.png",
    "revision": "6b8d3d271ba4d05daf83ad75d21221d1"
  },
  {
    "url": "images/sponsors/webucator.png",
    "revision": "3c87885f4c36bc1b07f8c2b547e84b6f"
  },
  {
    "url": "images/sponsors/wilderminds.png",
    "revision": "cd98b69653b51369da2e765097f13d6f"
  },
  {
    "url": "images/sponsors/writers_per_hour.jpg",
    "revision": "2033e6d7e88969e97e78e38d8d030eb9"
  },
  {
    "url": "images/sponsors/x_team.png",
    "revision": "a6cfaebb0c0dc17d348bc9c6fd5758ef"
  },
  {
    "url": "images/sponsors/y8.png",
    "revision": "3cdd8826d3419751f40a8aa7f90cd539"
  },
  {
    "url": "images/sponsors/yakaz.png",
    "revision": "f1918919114e35d6091e67370450e8bd"
  },
  {
    "url": "images/sponsors/youku.png",
    "revision": "1cce2782971aed63d38b17e28614d512"
  },
  {
    "url": "images/state.png",
    "revision": "6a05b01942c7d2cff4ea0033ded59ebb"
  },
  {
    "url": "images/transition.png",
    "revision": "5990c1dff7dc7a8fb3b34b4462bd0105"
  },
  {
    "url": "images/transitions.svg",
    "revision": "66096c1a18d223228032d26a80737c5c"
  },
  {
    "url": "images/v-bind-instead-of-sync.png",
    "revision": "cb59705b61fd5a75b1903f6a0b497cb1"
  },
  {
    "url": "index.html",
    "revision": "9a09a2dde9382369368010548c0d6584"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "style-guide/index.html",
    "revision": "e2a2418c3974f94333737b137600c472"
  },
  {
    "url": "support-vuejs/index.html",
    "revision": "5bf010ad6e7624d5ed9a0903a8bb94aa"
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
