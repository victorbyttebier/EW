!function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,o){o(1),t.exports=o(2)},function(t,e){},function(t,e,o){"use strict";var n=new Image,r=document.querySelector(".takePhoto"),i=void 0,a=void 0,c=void 0,u=void 0,s=document.querySelectorAll("a-marker"),f=new Array(9),d=[].concat(function(t){if(Array.isArray(t)){for(var e=0,o=Array(t.length);e<t.length;e++)o[e]=t[e];return o}return Array.from(t)}(Array(9).keys())).map(String),l=8,h=[],v=new Array(6),g=function(){u=document.querySelector("video"),navigator.mediaDevices.enumerateDevices().catch(function(t){return console.log("enumerateDevices() error: ",t)}).then(p),r.addEventListener("click",y)},p=function(){c&&c.getTracks().forEach(function(t){return t.stop()}),i={video:{width:720,height:720}},navigator.mediaDevices.getUserMedia(i).then(m).catch(function(t){console.log("getUserMedia error: ",t)})},m=function(t){c=t,u.srcObject=t,a=new ImageCapture(t.getVideoTracks()[0])},y=function(){a.takePhoto().then(function(t){n.src=URL.createObjectURL(t),n.setAttribute("crossOrigin","anonymous"),n.addEventListener("load",function(){return b(n)}),w(d),setInterval(function(){return x()},1e3)}).catch(function(t){console.log("takePhoto() error: ",t)})},b=function(t){for(var e=document.createElement("canvas"),o=e.getContext("2d"),n=t.width/3,r=t.height/3,i=0;i<3;++i)for(var a=0;a<3;++a)o.drawImage(t,i*n,a*r,n,r,0,0,e.width,e.height),f[8-l]=e.toDataURL("image/png").replace("image/png","image/octet-stream"),(l-=3)<0&&(l=8+l);s.forEach(function(t,e){var o=document.createElement("a-image");o.setAttribute("rotation","-90 0 0"),o.setAttribute("src",f[d[e]]),t.appendChild(o)})},x=function(){for(var t=0;t<s.length;++t)h[t]=s[t].object3D;if(h[d[0]].position.x-h[d[8]].position.x!=0){for(var e=0;e<3;++e)Math.abs(h[d[0+3*e]].position.x-h[d[1+3*e]].position.x)<1.9&&Math.abs(h[d[1+3*e]].position.x-h[d[2+3*e]].position.x)<1.9&&Math.abs(h[d[0+3*e]].rotation.x-h[d[1+3*e]].rotation.x)<1.9&&Math.abs(h[d[1+3*e]].rotation.x-h[d[2+3*e]].rotation.x)<1.9?v[e]=!0:v[e]=!1;for(var o=0;o<3;++o)Math.abs(h[d[o]].position.y-h[d[3+o]].position.y)<1.9&&Math.abs(h[d[3+o]].position.y-h[d[6+o]].position.y)<1.9&&Math.abs(h[d[o]].rotation.y-h[d[3+o]].rotation.y)<1.9&&Math.abs(h[d[3+o]].rotation.y-h[d[6+o]].rotation.y)<1.9?v[3+o]=!0:v[3+o]=!1;if(v.every(M)){console.log("SOLVED!!!!!!!");document.querySelector(".solved").style.display="flex"}}},M=function(t){return!0===t},w=function(t){for(var e=t.length-1;e>0;e--){var o=Math.floor(Math.random()*(e+1)),n=[t[o],t[e]];t[e]=n[0],t[o]=n[1]}return t};window.addEventListener("load",function(){return setTimeout(function(){return g()},1e3)})}]);