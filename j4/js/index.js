!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(2);function r(){if(document.querySelector(".js-ts-slider")){var e=document.querySelectorAll(".s-ts__slide"),t=e[0].parentElement.children.length,n=document.querySelector(".js-ts-slider"),r=document.querySelector(".js-ts-slider-prev"),o=document.querySelector(".js-ts-slider-next"),i=0,c="next",l=!1,a=!0;n.addEventListener("click",(function(n){l=!0,function(n){if(a&&n.target.classList.contains("s-ts__slide")){a=!1,"prev"==c&&(c="next",i!=t&&i++),i==t&&(i=0);var r=e[i].nextElementSibling,o=e[i].previousElementSibling,l=t-1,u=1;for(d(e[i]);r;)r.id="slide_".concat(u),r=r.nextElementSibling,u++;for(;o;)o.id="slide_".concat(l),o=o.previousElementSibling,l--;i++,setTimeout((function(){return a=!0}),500)}}(n)})),o.addEventListener("click",(function(){l=!0,f()})),r.addEventListener("click",(function(){l=!0,function(){if(a){a=!1,"next"==c&&(c="prev",0!=i&&i--),0==i&&(i=t);var n=e[i-1].nextElementSibling,r=e[i-1].previousElementSibling,o=t-1,l=1;for(d(e[i-1]);n;)n.id="slide_".concat(l),n=n.nextElementSibling,l++;for(;r;)r.id="slide_".concat(o),r=r.previousElementSibling,o--;i--,setTimeout((function(){return a=!0}),500)}}()}));var u=setInterval((function(){l?clearInterval(u):f()}),3e3)}function s(){this.style.WebkitAnimation="",this.style.animation=""}function d(e){e.style.WebkitAnimation="move ".concat(500,"ms"),e.style.animation="move ".concat(500,"ms"),e.addEventListener("webkitAnimationEnd",s),e.id="slide_".concat(t)}function f(){if(a){a=!1,"prev"==c&&(c="next",i!=t&&i++),i==t&&(i=0);var n=e[i].nextElementSibling,r=e[i].previousElementSibling,o=t-1,l=1;for(d(e[i]);n;)n.id="slide_".concat(l),n=n.nextElementSibling,l++;for(;r;)r.id="slide_".concat(o),r=r.previousElementSibling,o--;i++,setTimeout((function(){return a=!0}),500)}}}function o(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}document.addEventListener("DOMContentLoaded",(function(){var e=[].slice.call(document.querySelectorAll("video.js-video-bg"));if("IntersectionObserver"in window){var t=new IntersectionObserver((function(e,n){e.forEach((function(e){if(e.isIntersecting){for(var n in e.target.children){var r=e.target.children[n];"string"==typeof r.tagName&&"SOURCE"===r.tagName&&(r.src=r.dataset.src)}e.target.load(),e.target.classList.remove("lazy"),t.unobserve(e.target)}}))}));e.forEach((function(e){t.observe(e)}))}var n=[].slice.call(document.querySelectorAll(".js-show-more-text"));n&&n.forEach((function(e){e.addEventListener("click",(function(e){var t=e.target.parentNode.querySelector(".s-ab__item-more-text");dl.log(t),t.classList.toggle("hide"),"Show More"===e.target.innerHTML?e.target.innerHTML="Show Less":e.target.innerHTML="Show More"}))})),r();var i=document.querySelectorAll('a[href^="#c-us"]');i&&o(i).forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var t=e.currentTarget.getAttribute("href"),n=document.getElementById(t.substring(1));n&&(document.body.classList.contains("show-nav")&&document.body.classList.remove("show-nav"),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=e.offsetTop,r=n-t,o=Boolean(window.MSInputMethodContext)&&Boolean(document.documentMode);o?window.scrollTo(0,n):window.scrollTo({top:r,behavior:"smooth"})}(n,150))}))}))}))}]);