if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let c={};const o=e=>n(e,a),f={module:{uri:a},exports:c,require:o};i[a]=Promise.all(s.map((e=>f[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-958fa2bd"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"60a444fc08be1b3fdc5a28d5daa13e44"},{url:"assets/index.487745af.css",revision:null},{url:"assets/index.f94122d9.js",revision:null},{url:"favicon.ico",revision:"1a21a30c22f8994447fce1c89958a911"},{url:"index.html",revision:"f403097aca0207bfe6e8a0c2bab1e9ae"},{url:"mask-icon.svg",revision:"610acf6f44a7eadd36a2f41f26e79194"},{url:"pwa1.png",revision:"275749b471e7caadf9a9e84ddc0311bf"},{url:"pwa2.png",revision:"d570ff4c136b75a892834cede04e3428"},{url:"registerSW.js",revision:"cfcb9fb0248b5288f04396c05214ba51"},{url:"pwa1.png",revision:"275749b471e7caadf9a9e84ddc0311bf"},{url:"pwa2.png",revision:"d570ff4c136b75a892834cede04e3428"},{url:"manifest.webmanifest",revision:"8d27a5dd9aa416c6620da5982b507d38"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
