"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SelectedProperties.js":
/*!******************************************!*\
  !*** ./components/SelectedProperties.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SearchResults; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Ollie\\Desktop\\immo-task\\components\\SelectedProperties.js";


function SearchResults(_ref) {
  var _this = this;

  var selectedProperties = _ref.selectedProperties;

  if (SearchForm > 0) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "h2 mb16",
        children: "Selected Properties"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mb24 table-container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Address"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Postcode"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Number of rooms"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Floor area"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 21
            }, this), selectedProperties.map(function (property) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  children: property.address
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 29
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  children: property.postcode
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 21,
                  columnNumber: 29
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  children: property.numberOfRooms
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                  columnNumber: 29
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  children: property.floorArea
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                  columnNumber: 29
                }, _this)]
              }, property.id, true, {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 25
              }, _this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 13
      }, this)]
    }, void 0, true);
  } else {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "h2 mb16",
        children: "Selected Properties"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 14
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "No properties Selected"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 14
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGZkNWQzMTBlNGYwMzgyOTNjN2MuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0EsYUFBVCxPQUE2QztBQUFBOztBQUFBLE1BQXJCQyxrQkFBcUIsUUFBckJBLGtCQUFxQjs7QUFDeEQsTUFBSUMsVUFBVSxHQUFHLENBQWpCLEVBQW9CO0FBQ2hCLHdCQUNJO0FBQUEsOEJBQ0E7QUFBSSxpQkFBUyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVBO0FBQUssaUJBQVMsRUFBQyxzQkFBZjtBQUFBLCtCQUVBO0FBQUEsaUNBQ0k7QUFBQSxvQ0FDSTtBQUFBLHNDQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEosZUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKSixlQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixFQVFLRCxrQkFBa0IsQ0FBQ0UsR0FBbkIsQ0FBdUIsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xDLGtDQUNBO0FBQUEsd0NBQ0k7QUFBQSw0QkFBS0EsUUFBUSxDQUFDQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFFSTtBQUFBLDRCQUFLRCxRQUFRLENBQUNFO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGSixlQUdJO0FBQUEsNEJBQUtGLFFBQVEsQ0FBQ0c7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhKLGVBSUk7QUFBQSw0QkFBS0gsUUFBUSxDQUFDSTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSko7QUFBQSxpQkFBU0osUUFBUSxDQUFDSyxFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURBO0FBUUgsYUFUQSxDQVJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkE7QUFBQSxvQkFESjtBQTZCSCxHQTlCRCxNQThCTztBQUNILHdCQUNJO0FBQUEsOEJBQ0M7QUFBSSxpQkFBUyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQ7QUFBQSxvQkFESjtBQU1IO0FBRUo7S0F4Q3VCVCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlbGVjdGVkUHJvcGVydGllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hSZXN1bHRzKHtzZWxlY3RlZFByb3BlcnRpZXN9KSB7ICAgXHJcbiAgICBpZiAoU2VhcmNoRm9ybSA+IDApIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDIgbWIxNlwiPlNlbGVjdGVkIFByb3BlcnRpZXM8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iMjQgdGFibGUtY29udGFpbmVyXCI+XHJcbiAgICBcclxuICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFkZHJlc3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+UG9zdGNvZGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+TnVtYmVyIG9mIHJvb21zPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkZsb29yIGFyZWE8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICB7IHNlbGVjdGVkUHJvcGVydGllcy5tYXAoKHByb3BlcnR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3Byb3BlcnR5LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcGVydHkuYWRkcmVzc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wZXJ0eS5wb3N0Y29kZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wZXJ0eS5udW1iZXJPZlJvb21zfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BlcnR5LmZsb29yQXJlYX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKSAgICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoMiBtYjE2XCI+U2VsZWN0ZWQgUHJvcGVydGllczwvaDI+XHJcbiAgICAgICAgICAgICA8cD5ObyBwcm9wZXJ0aWVzIFNlbGVjdGVkPC9wPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcbiAgIFxyXG59Il0sIm5hbWVzIjpbIlNlYXJjaFJlc3VsdHMiLCJzZWxlY3RlZFByb3BlcnRpZXMiLCJTZWFyY2hGb3JtIiwibWFwIiwicHJvcGVydHkiLCJhZGRyZXNzIiwicG9zdGNvZGUiLCJudW1iZXJPZlJvb21zIiwiZmxvb3JBcmVhIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9