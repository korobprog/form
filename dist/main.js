/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/app.js
// TODO: write code here

// comment this to pass build
const unusedVariable = 'variable';
console.log(unusedVariable);

// for demonstration purpose only
function demo(value) {
  return `Demo: ${value}`;
}
console.log('app.js included');
;// CONCATENATED MODULE: ./src/index.js


const tooltip = document.querySelector('.tooltip');
tooltip.addEventListener('click', function () {
  if (this.classList.contains('active')) {
    this.classList.remove('active');
  } else {
    this.classList.add('active');
  }
});
/******/ })()
;