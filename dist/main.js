!function(A){var n={};function e(z){if(n[z])return n[z].exports;var r=n[z]={i:z,l:!1,exports:{}};return A[z].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=A,e.c=n,e.d=function(A,n,z){e.o(A,n)||Object.defineProperty(A,n,{enumerable:!0,get:z})},e.r=function(A){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},e.t=function(A,n){if(1&n&&(A=e(A)),8&n)return A;if(4&n&&"object"==typeof A&&A&&A.__esModule)return A;var z=Object.create(null);if(e.r(z),Object.defineProperty(z,"default",{enumerable:!0,value:A}),2&n&&"string"!=typeof A)for(var r in A)e.d(z,r,function(n){return A[n]}.bind(null,r));return z},e.n=function(A){var n=A&&A.__esModule?function(){return A.default}:function(){return A};return e.d(n,"a",n),n},e.o=function(A,n){return Object.prototype.hasOwnProperty.call(A,n)},e.p="",e(e.s=0)}([function(A,n,e){"use strict";e.r(n);const z="https://www.amiiboapi.com/api/amiibo/";var r=async A=>{const n=A?`${z}?name=${A}`:z;try{const A=await fetch(n);return await A.json()}catch(A){console.error("Fetch Error",A)}};var w=()=>' \n    <div class="Header__main">\n        <div class="Header-logo">\n            <h1>\n            <a href="/">\n            Amiibos.io\n            </a>\n            </h1>\n        </div>\n        <div>\n            <img class="Main__logo" src="data:image/png;base64,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" alt="Amiibo Logo">\n        </div>\n        <div class="Header-nav">\n            <a href="#/about/">\n                About\n            </a>\n        </div>\n    </div>\n    ';var t=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";var c=A=>{if(A.length<=A.length){return"/"===A?A:"/name"}return"/"+A};var s=()=>'\n      <div class="Error404">\n          <h2>Error 404</h2>\n      </div>\n  \n  ';const a={"/":async()=>`\n    <div class="Home__Characters">\n      ${(await r()).amiibo.map(A=>`\n        <article class="Home__Character-item">\n          <img class="Home__Character-image"src="${A.image}" alt ="${A.name}">\n          <a class="Home__Character-Anchor" href="#/${A.name}">\n            <span class="Home__Character-name">\n              <h2>${A.name}</h2> \n            </span>\n          </a> \n        </article>\n      `).join("")}\n    </div>\n  `,"/name":async()=>{const A=t(),n=await r(A);return`\n  <section class="Characters__container">\n    <div class="Characters__inner">\n      <article class="Characters__card">\n        <img Character__image src="${n.amiibo[0].image}" alt="${n.amiibo[0].name}">\n      </article>\n      <article class="Characters__amiibo-stats">\n        <h1 class="Character__name">${n.amiibo[0].name}</h1>\n        <h3>Character: <span>${n.amiibo[0].name}</span></h3>\n        <h3>Game: <span>${n.amiibo[0].gameSeries}</span></h3>\n        <h3>Amiibo Series: <span>${n.amiibo[0].amiiboSeries}</span></h3>\n      </article>\n    </div>\n  </section>\n\n  `}};var g=async()=>{const A=document.getElementById("header"),n=document.getElementById("content");A.innerHTML=await w();let e=t(),z=await c(e),r=a[z]?a[z]:s;n.innerHTML=await r()};class m{addAmiibo(A){const n=document.getElementById("amiiboList");return n.innerHTML=`\n      <ul class="Search__container">\n        <li class="Search__item">\n          <a href="#/${A}">\n            <h2 class="Search__character">Character: ${A}</h2>\n          </a>\n        </li>\n      </ul>\n    \n    `,n}}const O=document.getElementById("form");O.addEventListener("keyup",async A=>{const n=document.getElementById("search").value.toLowerCase(),e=await r(),z=n.charAt(0).toUpperCase()+n.slice(1,n.length),w=(await e.amiibo.filter(A=>A.name==z))[0].character;console.log("Some Data: ",n);(new m).addAmiibo(w),A.preventDefault()});window.addEventListener("load",r),window.addEventListener("load",g),window.addEventListener("hashchange",g)}]);