"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SearchResults.js":
/*!*************************************!*\
  !*** ./components/SearchResults.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SearchResults; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Ollie\\Desktop\\immo-task\\components\\SearchResults.js";


function SearchResults(_ref) {
  var _this = this;

  var properties = _ref.properties,
      handleCheckbox = _ref.handleCheckbox;

  if (properties.length > 0) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "h2 mb16",
        children: "Search results"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 10
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mb24 table-container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "tick"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Address"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Postcode"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Property type"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Number of rooms"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Floor area"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 17
            }, this), properties.map(function (property) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    onChange: function onChange(event) {
                      return handleCheckbox(property, event.target.checked);
                    },
                    type: "checkbox"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 22,
                    columnNumber: 29
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                  columnNumber: 25
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  children: property.address
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                  columnNumber: 25
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  children: property.postcode
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 25
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  children: property.propertyType
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 25,
                  columnNumber: 25
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  children: property.numberOfRooms
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 25
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  children: property.floorArea
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                  columnNumber: 25
                }, _this)]
              }, property.id, true, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 21
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 9
      }, this)]
    }, void 0, true);
  } else if (properties === null) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "h2 mb16",
        children: "Search results"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Search for an address in the input above"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, this)]
    }, void 0, true);
  } else {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "h2 mb16",
        children: "Search results"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "No results found"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }, this)]
    }, void 0, true);
  }
}
_c = SearchResults;

var _c;

$RefreshReg$(_c, "SearchResults");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjIyZjE4YTM2YWJkMjcwNDg2ZGQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0EsYUFBVCxPQUFxRDtBQUFBOztBQUFBLE1BQTdCQyxVQUE2QixRQUE3QkEsVUFBNkI7QUFBQSxNQUFqQkMsY0FBaUIsUUFBakJBLGNBQWlCOztBQUNoRSxNQUFJRCxVQUFVLENBQUNFLE1BQVgsR0FBb0IsQ0FBeEIsRUFBMkI7QUFDM0Isd0JBQ0k7QUFBQSw4QkFDQztBQUFJLGlCQUFTLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBRUE7QUFBSyxpQkFBUyxFQUFDLHNCQUFmO0FBQUEsK0JBRUE7QUFBQSxpQ0FDSTtBQUFBLG9DQUNJO0FBQUEsc0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkosZUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFMSixlQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixFQVNLRixVQUFVLENBQUNHLEdBQVgsQ0FBZSxVQUFDQyxRQUFELEVBQWM7QUFDMUIsa0NBQ0E7QUFBQSx3Q0FFSTtBQUFBLHlDQUFJO0FBQU8sNEJBQVEsRUFBRSxrQkFBQ0MsS0FBRDtBQUFBLDZCQUFXSixjQUFjLENBQUNHLFFBQUQsRUFBV0MsS0FBSyxDQUFDQyxNQUFOLENBQWFDLE9BQXhCLENBQXpCO0FBQUEscUJBQWpCO0FBQTRFLHdCQUFJLEVBQUM7QUFBakY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkosZUFHSTtBQUFBLDRCQUFLSCxRQUFRLENBQUNJO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFISixlQUlJO0FBQUEsNEJBQUtKLFFBQVEsQ0FBQ0s7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpKLGVBS0k7QUFBQSw0QkFBS0wsUUFBUSxDQUFDTTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEosZUFNSTtBQUFBLDRCQUFLTixRQUFRLENBQUNPO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFOSixlQU9JO0FBQUEsNEJBQUtQLFFBQVEsQ0FBQ1E7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVBKO0FBQUEsaUJBQVNSLFFBQVEsQ0FBQ1MsRUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEQTtBQVdILGFBWkEsQ0FUTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZBO0FBQUEsb0JBREo7QUFnQ0csR0FqQ0gsTUFpQ1MsSUFBSWIsVUFBVSxLQUFLLElBQW5CLEVBQXlCO0FBQzlCLHdCQUNJO0FBQUEsOEJBQ0E7QUFBSSxpQkFBUyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkE7QUFBQSxvQkFESjtBQU1ILEdBUFEsTUFPRjtBQUNILHdCQUNJO0FBQUEsOEJBQ0E7QUFBSSxpQkFBUyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkE7QUFBQSxvQkFESjtBQU1IO0FBQ0o7S0FqRHVCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoUmVzdWx0cyh7cHJvcGVydGllcywgaGFuZGxlQ2hlY2tib3h9KSB7XHJcbiAgICBpZiAocHJvcGVydGllcy5sZW5ndGggPiAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoMiBtYjE2XCI+U2VhcmNoIHJlc3VsdHM8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWIyNCB0YWJsZS1jb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPnRpY2s8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5BZGRyZXNzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+UG9zdGNvZGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Qcm9wZXJ0eSB0eXBlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+TnVtYmVyIG9mIHJvb21zPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+Rmxvb3IgYXJlYTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICB7IHByb3BlcnRpZXMubWFwKChwcm9wZXJ0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17cHJvcGVydHkuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPHRkPjxpbnB1dCBjaGVja2VkPXtwcm9wZXJ0eS5jaGVja2VkfSBvbkNoYW5nZT17KCkgPT4gc2V0Q2hlY2tlZChwcm9wZXJ0eS5pZCl9IHR5cGU9XCJjaGVja2JveFwiIC8+PC90ZD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hlY2tib3gocHJvcGVydHksIGV2ZW50LnRhcmdldC5jaGVja2VkKX0gdHlwZT1cImNoZWNrYm94XCIgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BlcnR5LmFkZHJlc3N9PC90ZD4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BlcnR5LnBvc3Rjb2RlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcGVydHkucHJvcGVydHlUeXBlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcGVydHkubnVtYmVyT2ZSb29tc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BlcnR5LmZsb29yQXJlYX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICkgfSBlbHNlIGlmIChwcm9wZXJ0aWVzID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImgyIG1iMTZcIj5TZWFyY2ggcmVzdWx0czwvaDI+XHJcbiAgICAgICAgICAgIDxwPlNlYXJjaCBmb3IgYW4gYWRkcmVzcyBpbiB0aGUgaW5wdXQgYWJvdmU8L3A+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImgyIG1iMTZcIj5TZWFyY2ggcmVzdWx0czwvaDI+XHJcbiAgICAgICAgICAgIDxwPk5vIHJlc3VsdHMgZm91bmQ8L3A+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJTZWFyY2hSZXN1bHRzIiwicHJvcGVydGllcyIsImhhbmRsZUNoZWNrYm94IiwibGVuZ3RoIiwibWFwIiwicHJvcGVydHkiLCJldmVudCIsInRhcmdldCIsImNoZWNrZWQiLCJhZGRyZXNzIiwicG9zdGNvZGUiLCJwcm9wZXJ0eVR5cGUiLCJudW1iZXJPZlJvb21zIiwiZmxvb3JBcmVhIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9