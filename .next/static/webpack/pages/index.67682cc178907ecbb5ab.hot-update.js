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
                children: "\u2713"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjc2ODJjYzE3ODkwN2VjYmI1YWIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0EsYUFBVCxPQUFxRDtBQUFBOztBQUFBLE1BQTdCQyxVQUE2QixRQUE3QkEsVUFBNkI7QUFBQSxNQUFqQkMsY0FBaUIsUUFBakJBLGNBQWlCOztBQUNoRSxNQUFJRCxVQUFVLENBQUNFLE1BQVgsR0FBb0IsQ0FBeEIsRUFBMkI7QUFDM0Isd0JBQ0k7QUFBQSw4QkFDQztBQUFJLGlCQUFTLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBRUE7QUFBSyxpQkFBUyxFQUFDLHNCQUFmO0FBQUEsK0JBRUE7QUFBQSxpQ0FDSTtBQUFBLG9DQUNJO0FBQUEsc0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkosZUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFMSixlQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixFQVNLRixVQUFVLENBQUNHLEdBQVgsQ0FBZSxVQUFDQyxRQUFELEVBQWM7QUFDMUIsa0NBQ0E7QUFBQSx3Q0FFSTtBQUFBLHlDQUFJO0FBQU8sNEJBQVEsRUFBRSxrQkFBQ0MsS0FBRDtBQUFBLDZCQUFXSixjQUFjLENBQUNHLFFBQUQsRUFBV0MsS0FBSyxDQUFDQyxNQUFOLENBQWFDLE9BQXhCLENBQXpCO0FBQUEscUJBQWpCO0FBQTRFLHdCQUFJLEVBQUM7QUFBakY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkosZUFHSTtBQUFBLDRCQUFLSCxRQUFRLENBQUNJO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFISixlQUlJO0FBQUEsNEJBQUtKLFFBQVEsQ0FBQ0s7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpKLGVBS0k7QUFBQSw0QkFBS0wsUUFBUSxDQUFDTTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEosZUFNSTtBQUFBLDRCQUFLTixRQUFRLENBQUNPO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFOSixlQU9JO0FBQUEsNEJBQUtQLFFBQVEsQ0FBQ1E7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVBKO0FBQUEsaUJBQVNSLFFBQVEsQ0FBQ1MsRUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEQTtBQVdILGFBWkEsQ0FUTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZBO0FBQUEsb0JBREo7QUFnQ0csR0FqQ0gsTUFpQ1MsSUFBSWIsVUFBVSxLQUFLLElBQW5CLEVBQXlCO0FBQzlCLHdCQUNJO0FBQUEsOEJBQ0E7QUFBSSxpQkFBUyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkE7QUFBQSxvQkFESjtBQU1ILEdBUFEsTUFPRjtBQUNILHdCQUNJO0FBQUEsOEJBQ0E7QUFBSSxpQkFBUyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkE7QUFBQSxvQkFESjtBQU1IO0FBQ0o7S0FqRHVCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoUmVzdWx0cyh7cHJvcGVydGllcywgaGFuZGxlQ2hlY2tib3h9KSB7XHJcbiAgICBpZiAocHJvcGVydGllcy5sZW5ndGggPiAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoMiBtYjE2XCI+U2VhcmNoIHJlc3VsdHM8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWIyNCB0YWJsZS1jb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPuKckzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkFkZHJlc3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Qb3N0Y29kZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlByb3BlcnR5IHR5cGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5OdW1iZXIgb2Ygcm9vbXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5GbG9vciBhcmVhPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgIHsgcHJvcGVydGllcy5tYXAoKHByb3BlcnR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtwcm9wZXJ0eS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8dGQ+PGlucHV0IGNoZWNrZWQ9e3Byb3BlcnR5LmNoZWNrZWR9IG9uQ2hhbmdlPXsoKSA9PiBzZXRDaGVja2VkKHByb3BlcnR5LmlkKX0gdHlwZT1cImNoZWNrYm94XCIgLz48L3RkPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGVja2JveChwcm9wZXJ0eSwgZXZlbnQudGFyZ2V0LmNoZWNrZWQpfSB0eXBlPVwiY2hlY2tib3hcIiAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcGVydHkuYWRkcmVzc308L3RkPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcGVydHkucG9zdGNvZGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wZXJ0eS5wcm9wZXJ0eVR5cGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wZXJ0eS5udW1iZXJPZlJvb21zfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcGVydHkuZmxvb3JBcmVhfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKSB9IGVsc2UgaWYgKHByb3BlcnRpZXMgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDIgbWIxNlwiPlNlYXJjaCByZXN1bHRzPC9oMj5cclxuICAgICAgICAgICAgPHA+U2VhcmNoIGZvciBhbiBhZGRyZXNzIGluIHRoZSBpbnB1dCBhYm92ZTwvcD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDIgbWIxNlwiPlNlYXJjaCByZXN1bHRzPC9oMj5cclxuICAgICAgICAgICAgPHA+Tm8gcmVzdWx0cyBmb3VuZDwvcD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIlNlYXJjaFJlc3VsdHMiLCJwcm9wZXJ0aWVzIiwiaGFuZGxlQ2hlY2tib3giLCJsZW5ndGgiLCJtYXAiLCJwcm9wZXJ0eSIsImV2ZW50IiwidGFyZ2V0IiwiY2hlY2tlZCIsImFkZHJlc3MiLCJwb3N0Y29kZSIsInByb3BlcnR5VHlwZSIsIm51bWJlck9mUm9vbXMiLCJmbG9vckFyZWEiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=