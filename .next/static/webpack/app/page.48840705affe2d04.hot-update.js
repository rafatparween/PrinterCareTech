"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/Customer.js":
/*!************************************!*\
  !*** ./app/components/Customer.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/ArrowForwardIos */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/ArrowForwardIos.js\");\n/* harmony import */ var _mui_icons_material_ArrowBackIos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/ArrowBackIos */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/ArrowBackIos.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Customer = ()=>{\n    _s();\n    const testimonialsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const scroll = (direction)=>{\n        if (testimonialsRef.current) {\n            const { scrollLeft, clientWidth } = testimonialsRef.current;\n            const cardWidth = 436; // Width of each testimonial card\n            const gap = 16; // Space between cards\n            const cardsToScroll = 3; // Number of visible cards\n            const scrollAmount = direction === \"left\" ? scrollLeft - (cardWidth + gap) * cardsToScroll : scrollLeft + (cardWidth + gap) * cardsToScroll;\n            testimonialsRef.current.scrollTo({\n                left: scrollAmount,\n                behavior: \"smooth\"\n            });\n        }\n    };\n    const testimonials = [\n        {\n            name: \"John Davis\",\n            location: \"Los Angeles, CA\",\n            date: \"10/01/2024\",\n            review: \"John Davis did an amazing job helping us with our marketing materials. He carefully guided us through the entire process, ensuring the design perfectly matched our brand. His attention to detail was exceptional.\",\n            rating: 5,\n            verified: true\n        },\n        {\n            name: \"Emily Roberts\",\n            location: \"New York, NY\",\n            date: \"09/20/2024\",\n            review: \"Emily Roberts was fantastic in assisting us with promotional items. She made sure we chose the right products, delivered them on time, and provided useful tips for increasing visibility. Highly recommend her!\",\n            rating: 5,\n            verified: true\n        },\n        {\n            name: \"Michael Johnson\",\n            location: \"Chicago, IL\",\n            date: \"09/28/2024\",\n            review: \"Michael Johnson went above and beyond in designing our brochures. He tailored the design to our specific needs and offered creative suggestions that made a huge impact on our marketing efforts.\",\n            rating: 5,\n            verified: true\n        },\n        {\n            name: \"Sarah Wilson\",\n            location: \"Austin, TX\",\n            date: \"09/22/2024\",\n            review: \"Sarah Wilson was incredibly helpful with our flyer distribution strategy. Not only did she create eye-catching designs, but she also provided valuable insights on targeting the right audience. Her expertise made a significant difference.\",\n            rating: 5,\n            verified: true\n        },\n        {\n            name: \"David Thompson\",\n            location: \"San Francisco, CA\",\n            date: \"09/30/2024\",\n            review: \"David Thompson delivered outstanding service in designing our business cards. He explained all the available options, helping us choose the best materials to match our brand. His guidance was priceless.\",\n            rating: 5,\n            verified: true\n        },\n        {\n            name: \"Jessica Lee\",\n            location: \"Seattle, WA\",\n            date: \"09/26/2024\",\n            review: \"Jessica Lee provided excellent service with our promotional posters. She walked us through each step, ensuring we were completely satisfied with the final designs. Her expertise was invaluable.\",\n            rating: 5,\n            verified: true\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white py-10 relative 2xl:w-[1431px] 2xl:ml-[231px] xl:w-[1414px] xl:ml-[52px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-3xl font-bold mb-6 mt-[30px] text-blue-900\",\n                children: \"What Our Customers Are Saying\"\n            }, void 0, false, {\n                fileName: \"/home/rafat/print_caretech/app/components/Customer.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"absolute top-1/2 left-0 transform text-black p-2 rounded-full shadow-md focus:outline-none ml-[-55px] transition-colors duration-300 z-10\",\n                        onClick: ()=>scroll(\"left\"),\n                        style: {\n                            width: \"32px\",\n                            height: \"32px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ArrowBackIos__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            style: {\n                                fontSize: \"20px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/rafat/print_caretech/app/components/Customer.js\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/rafat/print_caretech/app/components/Customer.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"absolute top-1/2 right-0 transform text-black p-2 rounded-full shadow-md focus:outline-none transition-colors duration-300 z-10\",\n                        onClick: ()=>scroll(\"right\"),\n                        style: {\n                            width: \"32px\",\n                            height: \"32px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            style: {\n                                fontSize: \"20px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/rafat/print_caretech/app/components/Customer.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/rafat/print_caretech/app/components/Customer.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: testimonialsRef,\n                        className: \"flex overflow-x-hidden\",\n                        style: {\n                            width: \"calc(100% - 64px)\",\n                            padding: \"0 16px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex\",\n                            style: {\n                                gap: \"16px\"\n                            },\n                            children: testimonials.map((testimonial, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-gray-100 p-6 rounded-lg shadow-lg flex-shrink-0\",\n                                    style: {\n                                        width: \"436px\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center justify-between\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"text-yellow-500\",\n                                                    children: \"★\".repeat(testimonial.rating)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/rafat/print_caretech/app/components/Customer.js\",\n                                                    lineNumber: 103,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"text-gray-500 text-sm\",\n                                                    children: testimonial.date\n                                                }, void 0, false, {\n                                                    fileName: \"/home/rafat/print_caretech/app/components/Customer.js\",\n                                                    lineNumber: 106,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/rafat/print_caretech/app/components/Customer.js\",\n                                            lineNumber: 102,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"mt-4\",\n                                            children: testimonial.review\n                                        }, void 0, false, {\n                                            fileName: \"/home/rafat/print_caretech/app/components/Customer.js\",\n                                            lineNumber: 108,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"mt-4\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"font-bold\",\n                                                    children: testimonial.name\n                                                }, void 0, false, {\n                                                    fileName: \"/home/rafat/print_caretech/app/components/Customer.js\",\n                                                    lineNumber: 110,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-gray-500 text-sm\",\n                                                    children: testimonial.location\n                                                }, void 0, false, {\n                                                    fileName: \"/home/rafat/print_caretech/app/components/Customer.js\",\n                                                    lineNumber: 111,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                testimonial.verified && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-blue-500 text-sm\",\n                                                    children: \"Verified ✓\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/rafat/print_caretech/app/components/Customer.js\",\n                                                    lineNumber: 113,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/rafat/print_caretech/app/components/Customer.js\",\n                                            lineNumber: 109,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/home/rafat/print_caretech/app/components/Customer.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/home/rafat/print_caretech/app/components/Customer.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/rafat/print_caretech/app/components/Customer.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rafat/print_caretech/app/components/Customer.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rafat/print_caretech/app/components/Customer.js\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Customer, \"POROBCjAEzDGL6O9CX/ttVBnYO4=\");\n_c = Customer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Customer);\nvar _c;\n$RefreshReg$(_c, \"Customer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0N1c3RvbWVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNDO0FBQ2dDO0FBQ047QUFFaEUsTUFBTUksV0FBVzs7SUFDZixNQUFNQyxrQkFBa0JKLDZDQUFNQSxDQUFDO0lBRS9CLE1BQU1LLFNBQVMsQ0FBQ0M7UUFDZCxJQUFJRixnQkFBZ0JHLE9BQU8sRUFBRTtZQUMzQixNQUFNLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFLEdBQUdMLGdCQUFnQkcsT0FBTztZQUMzRCxNQUFNRyxZQUFZLEtBQUssaUNBQWlDO1lBQ3hELE1BQU1DLE1BQU0sSUFBSSxzQkFBc0I7WUFDdEMsTUFBTUMsZ0JBQWdCLEdBQUcsMEJBQTBCO1lBQ25ELE1BQU1DLGVBQWVQLGNBQWMsU0FDL0JFLGFBQWEsQ0FBQ0UsWUFBWUMsR0FBRSxJQUFLQyxnQkFDakNKLGFBQWEsQ0FBQ0UsWUFBWUMsR0FBRSxJQUFLQztZQUNyQ1IsZ0JBQWdCRyxPQUFPLENBQUNPLFFBQVEsQ0FBQztnQkFBRUMsTUFBTUY7Z0JBQWNHLFVBQVU7WUFBUztRQUM1RTtJQUNGO0lBRUEsTUFBTUMsZUFBZTtRQUNuQjtZQUNFQyxNQUFNO1lBQ05DLFVBQVU7WUFDVkMsTUFBTTtZQUNOQyxRQUFRO1lBQ1JDLFFBQVE7WUFDUkMsVUFBVTtRQUNaO1FBQ0E7WUFDRUwsTUFBTTtZQUNOQyxVQUFVO1lBQ1ZDLE1BQU07WUFDTkMsUUFBUTtZQUNSQyxRQUFRO1lBQ1JDLFVBQVU7UUFDWjtRQUNBO1lBQ0VMLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxNQUFNO1lBQ05DLFFBQVE7WUFDUkMsUUFBUTtZQUNSQyxVQUFVO1FBQ1o7UUFDQTtZQUNFTCxNQUFNO1lBQ05DLFVBQVU7WUFDVkMsTUFBTTtZQUNOQyxRQUFRO1lBQ1JDLFFBQVE7WUFDUkMsVUFBVTtRQUNaO1FBQ0E7WUFDRUwsTUFBTTtZQUNOQyxVQUFVO1lBQ1ZDLE1BQU07WUFDTkMsUUFBUTtZQUNSQyxRQUFRO1lBQ1JDLFVBQVU7UUFDWjtRQUNBO1lBQ0VMLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxNQUFNO1lBQ05DLFFBQVE7WUFDUkMsUUFBUTtZQUNSQyxVQUFVO1FBQ1o7S0FDRDtJQUVELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQThEOzs7Ozs7MEJBQzVFLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUNDRixXQUFVO3dCQUNWRyxTQUFTLElBQU12QixPQUFPO3dCQUN0QndCLE9BQU87NEJBQUVDLE9BQU87NEJBQVFDLFFBQVE7d0JBQU87a0NBRXZDLDRFQUFDN0Isd0VBQWdCQTs0QkFBQzJCLE9BQU87Z0NBQUVHLFVBQVU7NEJBQU87Ozs7Ozs7Ozs7O2tDQUU5Qyw4REFBQ0w7d0JBQ0NGLFdBQVU7d0JBQ1ZHLFNBQVMsSUFBTXZCLE9BQU87d0JBQ3RCd0IsT0FBTzs0QkFBRUMsT0FBTzs0QkFBUUMsUUFBUTt3QkFBTztrQ0FFdkMsNEVBQUM5QiwyRUFBbUJBOzRCQUFDNEIsT0FBTztnQ0FBRUcsVUFBVTs0QkFBTzs7Ozs7Ozs7Ozs7a0NBRWpELDhEQUFDUjt3QkFDQ1MsS0FBSzdCO3dCQUNMcUIsV0FBVTt3QkFDVkksT0FBTzs0QkFBRUMsT0FBTzs0QkFBcUJJLFNBQVM7d0JBQVM7a0NBRXZELDRFQUFDVjs0QkFBSUMsV0FBVTs0QkFBT0ksT0FBTztnQ0FBRWxCLEtBQUs7NEJBQU87c0NBQ3hDTSxhQUFha0IsR0FBRyxDQUFDLENBQUNDLGFBQWFDLHNCQUM5Qiw4REFBQ2I7b0NBRUNDLFdBQVU7b0NBQ1ZJLE9BQU87d0NBQUVDLE9BQU87b0NBQVE7O3NEQUV4Qiw4REFBQ047NENBQUlDLFdBQVU7OzhEQUNiLDhEQUFDRDtvREFBSUMsV0FBVTs4REFDWixJQUFJYSxNQUFNLENBQUNGLFlBQVlkLE1BQU07Ozs7Ozs4REFFaEMsOERBQUNFO29EQUFJQyxXQUFVOzhEQUF5QlcsWUFBWWhCLElBQUk7Ozs7Ozs7Ozs7OztzREFFMUQsOERBQUNtQjs0Q0FBRWQsV0FBVTtzREFBUVcsWUFBWWYsTUFBTTs7Ozs7O3NEQUN2Qyw4REFBQ0c7NENBQUlDLFdBQVU7OzhEQUNiLDhEQUFDYztvREFBRWQsV0FBVTs4REFBYVcsWUFBWWxCLElBQUk7Ozs7Ozs4REFDMUMsOERBQUNxQjtvREFBRWQsV0FBVTs4REFBeUJXLFlBQVlqQixRQUFROzs7Ozs7Z0RBQ3pEaUIsWUFBWWIsUUFBUSxrQkFDbkIsOERBQUNnQjtvREFBRWQsV0FBVTs4REFBd0I7Ozs7Ozs7Ozs7Ozs7bUNBZnBDWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJyQjtHQXRITWxDO0tBQUFBO0FBd0hOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0N1c3RvbWVyLmpzPzlmNGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiOyBcbmltcG9ydCBBcnJvd0ZvcndhcmRJb3NJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93Rm9yd2FyZElvc1wiO1xuaW1wb3J0IEFycm93QmFja0lvc0ljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrSW9zXCI7XG5cbmNvbnN0IEN1c3RvbWVyID0gKCkgPT4ge1xuICBjb25zdCB0ZXN0aW1vbmlhbHNSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3Qgc2Nyb2xsID0gKGRpcmVjdGlvbikgPT4ge1xuICAgIGlmICh0ZXN0aW1vbmlhbHNSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgeyBzY3JvbGxMZWZ0LCBjbGllbnRXaWR0aCB9ID0gdGVzdGltb25pYWxzUmVmLmN1cnJlbnQ7XG4gICAgICBjb25zdCBjYXJkV2lkdGggPSA0MzY7IC8vIFdpZHRoIG9mIGVhY2ggdGVzdGltb25pYWwgY2FyZFxuICAgICAgY29uc3QgZ2FwID0gMTY7IC8vIFNwYWNlIGJldHdlZW4gY2FyZHNcbiAgICAgIGNvbnN0IGNhcmRzVG9TY3JvbGwgPSAzOyAvLyBOdW1iZXIgb2YgdmlzaWJsZSBjYXJkc1xuICAgICAgY29uc3Qgc2Nyb2xsQW1vdW50ID0gZGlyZWN0aW9uID09PSBcImxlZnRcIlxuICAgICAgICA/IHNjcm9sbExlZnQgLSAoY2FyZFdpZHRoICsgZ2FwKSAqIGNhcmRzVG9TY3JvbGxcbiAgICAgICAgOiBzY3JvbGxMZWZ0ICsgKGNhcmRXaWR0aCArIGdhcCkgKiBjYXJkc1RvU2Nyb2xsO1xuICAgICAgdGVzdGltb25pYWxzUmVmLmN1cnJlbnQuc2Nyb2xsVG8oeyBsZWZ0OiBzY3JvbGxBbW91bnQsIGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB0ZXN0aW1vbmlhbHMgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJKb2huIERhdmlzXCIsXG4gICAgICBsb2NhdGlvbjogXCJMb3MgQW5nZWxlcywgQ0FcIixcbiAgICAgIGRhdGU6IFwiMTAvMDEvMjAyNFwiLFxuICAgICAgcmV2aWV3OiBcIkpvaG4gRGF2aXMgZGlkIGFuIGFtYXppbmcgam9iIGhlbHBpbmcgdXMgd2l0aCBvdXIgbWFya2V0aW5nIG1hdGVyaWFscy4gSGUgY2FyZWZ1bGx5IGd1aWRlZCB1cyB0aHJvdWdoIHRoZSBlbnRpcmUgcHJvY2VzcywgZW5zdXJpbmcgdGhlIGRlc2lnbiBwZXJmZWN0bHkgbWF0Y2hlZCBvdXIgYnJhbmQuIEhpcyBhdHRlbnRpb24gdG8gZGV0YWlsIHdhcyBleGNlcHRpb25hbC5cIixcbiAgICAgIHJhdGluZzogNSxcbiAgICAgIHZlcmlmaWVkOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJFbWlseSBSb2JlcnRzXCIsXG4gICAgICBsb2NhdGlvbjogXCJOZXcgWW9yaywgTllcIixcbiAgICAgIGRhdGU6IFwiMDkvMjAvMjAyNFwiLFxuICAgICAgcmV2aWV3OiBcIkVtaWx5IFJvYmVydHMgd2FzIGZhbnRhc3RpYyBpbiBhc3Npc3RpbmcgdXMgd2l0aCBwcm9tb3Rpb25hbCBpdGVtcy4gU2hlIG1hZGUgc3VyZSB3ZSBjaG9zZSB0aGUgcmlnaHQgcHJvZHVjdHMsIGRlbGl2ZXJlZCB0aGVtIG9uIHRpbWUsIGFuZCBwcm92aWRlZCB1c2VmdWwgdGlwcyBmb3IgaW5jcmVhc2luZyB2aXNpYmlsaXR5LiBIaWdobHkgcmVjb21tZW5kIGhlciFcIixcbiAgICAgIHJhdGluZzogNSxcbiAgICAgIHZlcmlmaWVkOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJNaWNoYWVsIEpvaG5zb25cIixcbiAgICAgIGxvY2F0aW9uOiBcIkNoaWNhZ28sIElMXCIsXG4gICAgICBkYXRlOiBcIjA5LzI4LzIwMjRcIixcbiAgICAgIHJldmlldzogXCJNaWNoYWVsIEpvaG5zb24gd2VudCBhYm92ZSBhbmQgYmV5b25kIGluIGRlc2lnbmluZyBvdXIgYnJvY2h1cmVzLiBIZSB0YWlsb3JlZCB0aGUgZGVzaWduIHRvIG91ciBzcGVjaWZpYyBuZWVkcyBhbmQgb2ZmZXJlZCBjcmVhdGl2ZSBzdWdnZXN0aW9ucyB0aGF0IG1hZGUgYSBodWdlIGltcGFjdCBvbiBvdXIgbWFya2V0aW5nIGVmZm9ydHMuXCIsXG4gICAgICByYXRpbmc6IDUsXG4gICAgICB2ZXJpZmllZDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiU2FyYWggV2lsc29uXCIsXG4gICAgICBsb2NhdGlvbjogXCJBdXN0aW4sIFRYXCIsXG4gICAgICBkYXRlOiBcIjA5LzIyLzIwMjRcIixcbiAgICAgIHJldmlldzogXCJTYXJhaCBXaWxzb24gd2FzIGluY3JlZGlibHkgaGVscGZ1bCB3aXRoIG91ciBmbHllciBkaXN0cmlidXRpb24gc3RyYXRlZ3kuIE5vdCBvbmx5IGRpZCBzaGUgY3JlYXRlIGV5ZS1jYXRjaGluZyBkZXNpZ25zLCBidXQgc2hlIGFsc28gcHJvdmlkZWQgdmFsdWFibGUgaW5zaWdodHMgb24gdGFyZ2V0aW5nIHRoZSByaWdodCBhdWRpZW5jZS4gSGVyIGV4cGVydGlzZSBtYWRlIGEgc2lnbmlmaWNhbnQgZGlmZmVyZW5jZS5cIixcbiAgICAgIHJhdGluZzogNSxcbiAgICAgIHZlcmlmaWVkOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJEYXZpZCBUaG9tcHNvblwiLFxuICAgICAgbG9jYXRpb246IFwiU2FuIEZyYW5jaXNjbywgQ0FcIixcbiAgICAgIGRhdGU6IFwiMDkvMzAvMjAyNFwiLFxuICAgICAgcmV2aWV3OiBcIkRhdmlkIFRob21wc29uIGRlbGl2ZXJlZCBvdXRzdGFuZGluZyBzZXJ2aWNlIGluIGRlc2lnbmluZyBvdXIgYnVzaW5lc3MgY2FyZHMuIEhlIGV4cGxhaW5lZCBhbGwgdGhlIGF2YWlsYWJsZSBvcHRpb25zLCBoZWxwaW5nIHVzIGNob29zZSB0aGUgYmVzdCBtYXRlcmlhbHMgdG8gbWF0Y2ggb3VyIGJyYW5kLiBIaXMgZ3VpZGFuY2Ugd2FzIHByaWNlbGVzcy5cIixcbiAgICAgIHJhdGluZzogNSxcbiAgICAgIHZlcmlmaWVkOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJKZXNzaWNhIExlZVwiLFxuICAgICAgbG9jYXRpb246IFwiU2VhdHRsZSwgV0FcIixcbiAgICAgIGRhdGU6IFwiMDkvMjYvMjAyNFwiLFxuICAgICAgcmV2aWV3OiBcIkplc3NpY2EgTGVlIHByb3ZpZGVkIGV4Y2VsbGVudCBzZXJ2aWNlIHdpdGggb3VyIHByb21vdGlvbmFsIHBvc3RlcnMuIFNoZSB3YWxrZWQgdXMgdGhyb3VnaCBlYWNoIHN0ZXAsIGVuc3VyaW5nIHdlIHdlcmUgY29tcGxldGVseSBzYXRpc2ZpZWQgd2l0aCB0aGUgZmluYWwgZGVzaWducy4gSGVyIGV4cGVydGlzZSB3YXMgaW52YWx1YWJsZS5cIixcbiAgICAgIHJhdGluZzogNSxcbiAgICAgIHZlcmlmaWVkOiB0cnVlLFxuICAgIH0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHB5LTEwIHJlbGF0aXZlIDJ4bDp3LVsxNDMxcHhdIDJ4bDptbC1bMjMxcHhdIHhsOnctWzE0MTRweF0geGw6bWwtWzUycHhdXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC0zeGwgZm9udC1ib2xkIG1iLTYgbXQtWzMwcHhdIHRleHQtYmx1ZS05MDBcIj5XaGF0IE91ciBDdXN0b21lcnMgQXJlIFNheWluZzwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS8yIGxlZnQtMCB0cmFuc2Zvcm0gdGV4dC1ibGFjayBwLTIgcm91bmRlZC1mdWxsIHNoYWRvdy1tZCBmb2N1czpvdXRsaW5lLW5vbmUgbWwtWy01NXB4XSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgei0xMFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2Nyb2xsKFwibGVmdFwiKX1cbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzMycHgnLCBoZWlnaHQ6ICczMnB4JyB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEFycm93QmFja0lvc0ljb24gc3R5bGU9e3sgZm9udFNpemU6ICcyMHB4JyB9fSAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzIgcmlnaHQtMCB0cmFuc2Zvcm0gdGV4dC1ibGFjayBwLTIgcm91bmRlZC1mdWxsIHNoYWRvdy1tZCBmb2N1czpvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIHotMTBcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNjcm9sbChcInJpZ2h0XCIpfVxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMzJweCcsIGhlaWdodDogJzMycHgnIH19XG4gICAgICAgID5cbiAgICAgICAgICA8QXJyb3dGb3J3YXJkSW9zSWNvbiBzdHlsZT17eyBmb250U2l6ZTogJzIwcHgnIH19IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcmVmPXt0ZXN0aW1vbmlhbHNSZWZ9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBvdmVyZmxvdy14LWhpZGRlblwiXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICdjYWxjKDEwMCUgLSA2NHB4KScsIHBhZGRpbmc6ICcwIDE2cHgnIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIiBzdHlsZT17eyBnYXA6ICcxNnB4JyB9fT5cbiAgICAgICAgICAgIHt0ZXN0aW1vbmlhbHMubWFwKCh0ZXN0aW1vbmlhbCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS0xMDAgcC02IHJvdW5kZWQtbGcgc2hhZG93LWxnIGZsZXgtc2hyaW5rLTBcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnNDM2cHgnIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAge1wi4piFXCIucmVwZWF0KHRlc3RpbW9uaWFsLnJhdGluZyl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LXNtXCI+e3Rlc3RpbW9uaWFsLmRhdGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNFwiPnt0ZXN0aW1vbmlhbC5yZXZpZXd9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e3Rlc3RpbW9uaWFsLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LXNtXCI+e3Rlc3RpbW9uaWFsLmxvY2F0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgIHt0ZXN0aW1vbmlhbC52ZXJpZmllZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgdGV4dC1zbVwiPlZlcmlmaWVkIOKckzwvcD5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21lcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsIkFycm93Rm9yd2FyZElvc0ljb24iLCJBcnJvd0JhY2tJb3NJY29uIiwiQ3VzdG9tZXIiLCJ0ZXN0aW1vbmlhbHNSZWYiLCJzY3JvbGwiLCJkaXJlY3Rpb24iLCJjdXJyZW50Iiwic2Nyb2xsTGVmdCIsImNsaWVudFdpZHRoIiwiY2FyZFdpZHRoIiwiZ2FwIiwiY2FyZHNUb1Njcm9sbCIsInNjcm9sbEFtb3VudCIsInNjcm9sbFRvIiwibGVmdCIsImJlaGF2aW9yIiwidGVzdGltb25pYWxzIiwibmFtZSIsImxvY2F0aW9uIiwiZGF0ZSIsInJldmlldyIsInJhdGluZyIsInZlcmlmaWVkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJidXR0b24iLCJvbkNsaWNrIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImZvbnRTaXplIiwicmVmIiwicGFkZGluZyIsIm1hcCIsInRlc3RpbW9uaWFsIiwiaW5kZXgiLCJyZXBlYXQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Customer.js\n"));

/***/ })

});