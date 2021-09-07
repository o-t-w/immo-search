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
      setChecked = _ref.setChecked;
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
                  checked: property.checked,
                  onChange: function onChange() {
                    return setChecked(property);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjkyZjhkNGRhMDRjYjlmMDAxOGEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0EsYUFBVCxPQUFpRDtBQUFBOztBQUFBLE1BQXpCQyxVQUF5QixRQUF6QkEsVUFBeUI7QUFBQSxNQUFiQyxVQUFhLFFBQWJBLFVBQWE7QUFFNUQsc0JBQ0k7QUFBQSw0QkFDQztBQUFJLGVBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQTtBQUFLLGVBQVMsRUFBQyxzQkFBZjtBQUFBLDZCQUVBO0FBQUEsK0JBQ0k7QUFBQSxrQ0FDSTtBQUFBLG9DQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFISixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpKLGVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTEosZUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosRUFTS0QsVUFBVSxDQUFDRSxHQUFYLENBQWUsVUFBQ0MsUUFBRCxFQUFjO0FBQzFCLGdDQUNBO0FBQUEsc0NBRUk7QUFBQSx1Q0FBSTtBQUFPLHlCQUFPLEVBQUVBLFFBQVEsQ0FBQ0MsT0FBekI7QUFBa0MsMEJBQVEsRUFBRTtBQUFBLDJCQUFNSCxVQUFVLENBQUNFLFFBQUQsQ0FBaEI7QUFBQSxtQkFBNUM7QUFBd0Usc0JBQUksRUFBQztBQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSixlQUdJO0FBQUEsMEJBQUtBLFFBQVEsQ0FBQ0U7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhKLGVBSUk7QUFBQSwwQkFBS0YsUUFBUSxDQUFDRztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkosZUFLSTtBQUFBLDBCQUFLSCxRQUFRLENBQUNJO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMSixlQU1JO0FBQUEsMEJBQUtKLFFBQVEsQ0FBQ0s7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU5KLGVBT0k7QUFBQSwwQkFBS0wsUUFBUSxDQUFDTTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEo7QUFBQSxlQUFTTixRQUFRLENBQUNPLEVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREE7QUFXSCxXQVpBLENBVEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGQTtBQUFBLGtCQURKO0FBaUNIO0tBbkN1QlgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaFJlc3VsdHMoe3Byb3BlcnRpZXMsIHNldENoZWNrZWR9KSB7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImgyIG1iMTZcIj5TZWFyY2ggcmVzdWx0czwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYjI0IHRhYmxlLWNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+dGljazwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkFkZHJlc3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Qb3N0Y29kZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlByb3BlcnR5IHR5cGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5OdW1iZXIgb2Ygcm9vbXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5GbG9vciBhcmVhPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgIHsgcHJvcGVydGllcy5tYXAoKHByb3BlcnR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtwcm9wZXJ0eS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8dGQ+PGlucHV0IGNoZWNrZWQ9e3Byb3BlcnR5LmNoZWNrZWR9IG9uQ2hhbmdlPXsoKSA9PiBzZXRDaGVja2VkKHByb3BlcnR5LmlkKX0gdHlwZT1cImNoZWNrYm94XCIgLz48L3RkPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCBjaGVja2VkPXtwcm9wZXJ0eS5jaGVja2VkfSBvbkNoYW5nZT17KCkgPT4gc2V0Q2hlY2tlZChwcm9wZXJ0eSl9IHR5cGU9XCJjaGVja2JveFwiIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wZXJ0eS5hZGRyZXNzfTwvdGQ+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wZXJ0eS5wb3N0Y29kZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BlcnR5LnByb3BlcnR5VHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BlcnR5Lm51bWJlck9mUm9vbXN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wZXJ0eS5mbG9vckFyZWF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApICAgIFxyXG59Il0sIm5hbWVzIjpbIlNlYXJjaFJlc3VsdHMiLCJwcm9wZXJ0aWVzIiwic2V0Q2hlY2tlZCIsIm1hcCIsInByb3BlcnR5IiwiY2hlY2tlZCIsImFkZHJlc3MiLCJwb3N0Y29kZSIsInByb3BlcnR5VHlwZSIsIm51bWJlck9mUm9vbXMiLCJmbG9vckFyZWEiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=