parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Tnu0":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";require("./styles.css");const t={maintainAspectRatio:!1,legend:{display:!1},tooltips:{enabled:!1},elements:{point:{radius:0}},scales:{xAxes:[{gridLines:!1,scaleLabel:!1,ticks:{display:!1}}],yAxes:[{gridLines:!1,scaleLabel:!1,ticks:{display:!1,suggestedMin:0,suggestedMax:10}}]}};var e=document.getElementById("chart1").getContext("2d"),n=new Chart(e,{type:"line",data:{labels:[1,2,1,3,5,4,7],datasets:[{backgroundColor:"rgba(101, 116, 205, 0.1)",borderColor:"rgba(101, 116, 205, 0.8)",borderWidth:2,data:[1,2,1,3,5,4,7]}]},options:t});e=document.getElementById("chart2").getContext("2d"),n=new Chart(e,{type:"line",data:{labels:[2,3,2,9,7,7,4],datasets:[{backgroundColor:"rgba(246, 109, 155, 0.1)",borderColor:"rgba(246, 109, 155, 0.8)",borderWidth:2,data:[2,3,2,9,7,7,4]}]},options:t}),e=document.getElementById("chart3").getContext("2d"),n=new Chart(e,{type:"line",data:{labels:[2,5,1,3,2,6,7],datasets:[{backgroundColor:"rgba(246, 153, 63, 0.1)",borderColor:"rgba(246, 153, 63, 0.8)",borderWidth:2,data:[2,5,1,3,2,6,7]}]},options:t});function o(){var t={};window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(e,n,o){t[n]=o});return t}const a=o().tab,r=`https://spreadsheets.google.com/feeds/cells/16sQYh3VlWS1QPMXmT6uunevztDdCtsmhFP0WpWdicgQ/${a}/public/full/`,s="https://cors-anywhere.herokuapp.com/",l=document.querySelector(".recipes");async function c(t){let e=s+r+t+"?alt=json";const n=await fetch(e);return await n.json()}async function d(){let t=`https://spreadsheets.google.com/feeds/cells/16sQYh3VlWS1QPMXmT6uunevztDdCtsmhFP0WpWdicgQ/${a}/public/full?alt=json`;const e=await fetch(t);return await e.json()}async function i(){const t=await d(),e=document.querySelector("#title");return[t.feed.title.$t,e]}async function u(t){const e=await c(t),n=document.querySelector(`#${t}`);return[e.entry.content.$t,n]}function h([t,e]){e.innerHTML=t}function g(t){console.error("Error: "+t)}let p=i();p.then(h,g);let b=u("R41C1");b.then(h,g);let C=u("R41C3");C.then(h,g);let y=u("R47C1");y.then(h,g);let m=u("R47C3");m.then(h,g);let f=u("R53C3");f.then(h,g);let w=u("R53C5");w.then(h,g);let W=u("R47C7");W.then(h,g);
},{"./styles.css":"Tnu0"}]},{},["Focm"], null)
//# sourceMappingURL=/stats-car-workshop/src.1dd6eefc.js.map