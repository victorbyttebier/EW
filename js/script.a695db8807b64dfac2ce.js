!function(t){function r(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}var o={};r.m=t,r.c=o,r.d=function(t,o,n){r.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(o,"a",o),o},r.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},r.p="",r(r.s=0)}([function(t,r,o){o(1),t.exports=o(2)},function(t,r){},function(t,r,o){"use strict";var n=document.querySelectorAll("a-marker"),e=new Array(9),a=[].concat(function(t){if(Array.isArray(t)){for(var r=0,o=Array(t.length);r<t.length;r++)o[r]=t[r];return o}return Array.from(t)}(Array(9).keys())).map(String),i=[],s=new Array(6),c=8,u=function(t){var r=new Image;return r.setAttribute("crossOrigin","anonymous"),r.src=t,r},f=function(t){for(var r=document.createElement("canvas"),o=r.getContext("2d"),i=t.width/3,s=t.height/3,u=0;u<3;++u)for(var f=0;f<3;++f)o.drawImage(t,u*i,f*s,i,s,0,0,r.width,r.height),localStorage.setItem("savedImageData",r.toDataURL("image/png")),e[8-c]=r.toDataURL("image/png").replace("image/png","image/octet-stream"),(c-=3)<0&&(c=8+c);n.forEach(function(t,r){var o=document.createElement("a-image");o.setAttribute("rotation","-90 0 0"),o.setAttribute("src",e[a[r]]),t.appendChild(o)})},p=function(){for(var t=0;t<n.length;++t)i[t]=n[t].object3D;if(i[a[0]].position.x-i[a[8]].position.x!=0){for(var r=0;r<3;++r)Math.abs(i[a[0+3*r]].position.x-i[a[1+3*r]].position.x)<1.9&&Math.abs(i[a[1+3*r]].position.x-i[a[2+3*r]].position.x)<1.9&&Math.abs(i[a[0+3*r]].rotation.x-i[a[1+3*r]].rotation.x)<1.9&&Math.abs(i[a[1+3*r]].rotation.x-i[a[2+3*r]].rotation.x)<1.9?s[r]=!0:s[r]=!1;for(var o=0;o<3;++o)Math.abs(i[a[o]].position.y-i[a[3+o]].position.y)<1.9&&Math.abs(i[a[3+o]].position.y-i[a[6+o]].position.y)<1.9&&Math.abs(i[a[o]].rotation.y-i[a[3+o]].rotation.y)<1.9&&Math.abs(i[a[3+o]].rotation.y-i[a[6+o]].rotation.y)<1.9?s[3+o]=!0:s[3+o]=!1;s.every(l)&&console.log("SOLVED!!!!!!!")}},l=function(t){return!0===t},g=function(t){for(var r=t.length-1;r>0;r--){var o=Math.floor(Math.random()*(r+1)),n=[t[o],t[r]];t[r]=n[0],t[o]=n[1]}return t};!function(){g(a);var t=u("assets/dog.jpg");t.addEventListener("load",f(t)),setInterval(function(){return p()},1e3)}()}]);