"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/register";
exports.ids = ["pages/register"];
exports.modules = {

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Register = ()=>{\n    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.table({\n            name,\n            email,\n            password\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"jumbotronn text-center bg-primary spuare\",\n                children: \"Register\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\S\\xe9kouSONOMOU\\\\Desktop\\\\MERN LMS eLearning\\\\LMS\\\\client\\\\pages\\\\register.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container col-md-4 offset-md-4 pb-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control mb-4 p-4\",\n                            value: name,\n                            onChange: (e)=>setName(e.target.value),\n                            placeholder: \"Enter your username\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\S\\xe9kouSONOMOU\\\\Desktop\\\\MERN LMS eLearning\\\\LMS\\\\client\\\\pages\\\\register.js\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            className: \"form-control mb-4 p-4\",\n                            value: email,\n                            onChange: (e)=>setEmail(e.target.value),\n                            placeholder: \"Enter your email\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\S\\xe9kouSONOMOU\\\\Desktop\\\\MERN LMS eLearning\\\\LMS\\\\client\\\\pages\\\\register.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            className: \"form-control mb-4 p-4\",\n                            value: password,\n                            onChange: (e)=>setPassword(e.target.value),\n                            placeholder: \"Enter your password\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\S\\xe9kouSONOMOU\\\\Desktop\\\\MERN LMS eLearning\\\\LMS\\\\client\\\\pages\\\\register.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\S\\xe9kouSONOMOU\\\\Desktop\\\\MERN LMS eLearning\\\\LMS\\\\client\\\\pages\\\\register.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            className: \"btn btn-block btn-primary p-2\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\S\\xe9kouSONOMOU\\\\Desktop\\\\MERN LMS eLearning\\\\LMS\\\\client\\\\pages\\\\register.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\S\\xe9kouSONOMOU\\\\Desktop\\\\MERN LMS eLearning\\\\LMS\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\S\\xe9kouSONOMOU\\\\Desktop\\\\MERN LMS eLearning\\\\LMS\\\\client\\\\pages\\\\register.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQWlDO0FBRWpDLE1BQU1DLFFBQVEsR0FBRyxJQUFNO0lBQ3JCLE1BQU0sS0FBQ0MsSUFBSSxNQUFFQyxPQUFPLE1BQUlILCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3BDLE1BQU0sS0FBQ0ksS0FBSyxNQUFFQyxRQUFRLE1BQUlMLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3RDLE1BQU0sS0FBQ00sUUFBUSxNQUFFQyxXQUFXLE1BQUlQLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBRTVDLE1BQU1RLFlBQVksR0FBRyxDQUFDQyxDQUFDLEdBQUs7UUFDMUJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFDbkJDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDO1lBQUNWLElBQUk7WUFBQ0UsS0FBSztZQUFDRSxRQUFRO1NBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQscUJBQ0U7OzBCQUNFLDhEQUFDTyxJQUFFO2dCQUFDQyxTQUFTLEVBQUMsMENBQTBDOzBCQUFDLFVBQVE7Ozs7O3lCQUFLOzBCQUN0RSw4REFBQ0MsS0FBRztnQkFBQ0QsU0FBUyxFQUFDLHFDQUFxQzswQkFDbEQsNEVBQUNFLE1BQUk7b0JBQUNDLFFBQVEsRUFBRVQsWUFBWTs7c0NBQzFCLDhEQUFDVSxPQUFLOzRCQUNKQyxJQUFJLEVBQUMsTUFBTTs0QkFDWEwsU0FBUyxFQUFDLHVCQUF1Qjs0QkFDakNNLEtBQUssRUFBRWxCLElBQUk7NEJBQ1htQixRQUFRLEVBQUUsQ0FBQ1osQ0FBQyxHQUFLTixPQUFPLENBQUNNLENBQUMsQ0FBQ2EsTUFBTSxDQUFDRixLQUFLLENBQUM7NEJBQ3hDRyxXQUFXLEVBQUMscUJBQXFCOzRCQUNqQ0MsUUFBUTs7Ozs7cUNBQ1I7c0NBQ0YsOERBQUNOLE9BQUs7NEJBQ0pDLElBQUksRUFBQyxPQUFPOzRCQUNaTCxTQUFTLEVBQUMsdUJBQXVCOzRCQUNqQ00sS0FBSyxFQUFFaEIsS0FBSzs0QkFDWmlCLFFBQVEsRUFBRSxDQUFDWixDQUFDLEdBQUtKLFFBQVEsQ0FBQ0ksQ0FBQyxDQUFDYSxNQUFNLENBQUNGLEtBQUssQ0FBQzs0QkFDekNHLFdBQVcsRUFBQyxrQkFBa0I7NEJBQzlCQyxRQUFROzs7OztxQ0FDUjtzQ0FDRiw4REFBQ04sT0FBSzs0QkFDSkMsSUFBSSxFQUFDLFVBQVU7NEJBQ2ZMLFNBQVMsRUFBQyx1QkFBdUI7NEJBQ2pDTSxLQUFLLEVBQUVkLFFBQVE7NEJBQ2ZlLFFBQVEsRUFBRSxDQUFDWixDQUFDLEdBQUtGLFdBQVcsQ0FBQ0UsQ0FBQyxDQUFDYSxNQUFNLENBQUNGLEtBQUssQ0FBQzs0QkFDNUNHLFdBQVcsRUFBQyxxQkFBcUI7NEJBQ2pDQyxRQUFROzs7OztxQ0FDUjtzQ0FDRiw4REFBQ0MsSUFBRTs7OztxQ0FBRTtzQ0FDTCw4REFBQ0MsUUFBTTs0QkFBQ1AsSUFBSSxFQUFDLFFBQVE7NEJBQUNMLFNBQVMsRUFBQywrQkFBK0I7c0NBQUMsUUFBTTs7Ozs7cUNBQVM7Ozs7Ozs2QkFDMUU7Ozs7O3lCQUNIOztvQkFDTCxDQUNIO0FBQ0osQ0FBQztBQUVELGlFQUFlYixRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9yZWdpc3Rlci5qcz9hMDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLnRhYmxlKHtuYW1lLGVtYWlsLHBhc3N3b3JkfSlcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cImp1bWJvdHJvbm4gdGV4dC1jZW50ZXIgYmctcHJpbWFyeSBzcHVhcmVcIj5SZWdpc3RlcjwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbC1tZC00IG9mZnNldC1tZC00IHBiLTVcIj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi00IHAtNFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgdXNlcm5hbWVcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItNCBwLTRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItNCBwLTRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWJsb2NrIGJ0bi1wcmltYXJ5IHAtMlwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlJlZ2lzdGVyIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJ0YWJsZSIsImgxIiwiY2xhc3NOYW1lIiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJiciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/register.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/register.js"));
module.exports = __webpack_exports__;

})();