/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");

const text = document.getElementsByClassName("about_text")[0];
const btn = document.getElementsByClassName("about_read-more-btn")[0];
btn.addEventListener("click", () => {
  text.classList.toggle("expanded");
  btn.textContent = text.classList.contains("expanded") ? "Скрыть" : "Читать далее";
});
if (window.matchMedia("(min-width: 320px) and (max-width: 767px)").matches) {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination'
    }
  });
}
if (window.matchMedia("(min-width: 768px)").matches) {
  const brandsSwiper = document.getElementsByClassName("brands_swiper")[0];
  const btn = document.getElementsByClassName("show_all-btn")[0];
  btn.addEventListener("click", () => {
    brandsSwiper.classList.toggle("expanded");
    btn.textContent = brandsSwiper.classList.contains("expanded") ? "Скрыть" : "Показать все";
  });
}
if (window.matchMedia("(min-width: 768px)").matches) {
  const devicesSwiper = document.getElementsByClassName("devices_swiper")[0];
  const btn = document.getElementsByClassName("devices_show-btn")[0];
  btn.addEventListener("click", () => {
    devicesSwiper.classList.toggle("expanded");
    btn.textContent = devicesSwiper.classList.contains("expanded") ? "Скрыть" : "Показать все";
  });
}
document.querySelector('.about_menu').addEventListener('click', function () {
  document.querySelector('.aside').classList.toggle('open');
});
const aside = document.querySelector('.aside');
const asideBurger = document.querySelector('.aside_burger');
document.querySelector('.aside_burger').addEventListener('click', function () {
  aside.classList.remove('open');
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map