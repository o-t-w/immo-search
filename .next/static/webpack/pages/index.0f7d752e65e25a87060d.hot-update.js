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
                    return props.handleCheckbox(property);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGY3ZDc1MmU2NWUyNWE4NzA2MGQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWUsU0FBU0EsYUFBVCxPQUFxRDtBQUFBOztBQUFBLE1BQTdCQyxVQUE2QixRQUE3QkEsVUFBNkI7QUFBQSxNQUFqQkMsY0FBaUIsUUFBakJBLGNBQWlCO0FBRWhFLHNCQUNJO0FBQUEsNEJBQ0M7QUFBSSxlQUFTLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBRUE7QUFBSyxlQUFTLEVBQUMsc0JBQWY7QUFBQSw2QkFFQTtBQUFBLCtCQUNJO0FBQUEsa0NBQ0k7QUFBQSxvQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEosZUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKSixlQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxKLGVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLEVBU0tELFVBQVUsQ0FBQ0UsR0FBWCxDQUFlLFVBQUNDLFFBQUQsRUFBYztBQUMxQixnQ0FDQTtBQUFBLHNDQUVJO0FBQUEsdUNBQUk7QUFBTyx5QkFBTyxFQUFFQSxRQUFRLENBQUNDLE9BQXpCO0FBQWtDLDBCQUFRLEVBQUU7QUFBQSwyQkFBTUMsS0FBSyxDQUFDSixjQUFOLENBQXFCRSxRQUFyQixDQUFOO0FBQUEsbUJBQTVDO0FBQWtGLHNCQUFJLEVBQUM7QUFBdkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkosZUFHSTtBQUFBLDBCQUFLQSxRQUFRLENBQUNHO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFISixlQUlJO0FBQUEsMEJBQUtILFFBQVEsQ0FBQ0k7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpKLGVBS0k7QUFBQSwwQkFBS0osUUFBUSxDQUFDSztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEosZUFNSTtBQUFBLDBCQUFLTCxRQUFRLENBQUNNO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFOSixlQU9JO0FBQUEsMEJBQUtOLFFBQVEsQ0FBQ087QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBKO0FBQUEsZUFBU1AsUUFBUSxDQUFDUSxFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURBO0FBV0gsV0FaQSxDQVRMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkE7QUFBQSxrQkFESjtBQWlDSDtLQW5DdUJaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hSZXN1bHRzKHtwcm9wZXJ0aWVzLCBoYW5kbGVDaGVja2JveH0pIHtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDIgbWIxNlwiPlNlYXJjaCByZXN1bHRzPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iMjQgdGFibGUtY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD50aWNrPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+QWRkcmVzczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlBvc3Rjb2RlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+UHJvcGVydHkgdHlwZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPk51bWJlciBvZiByb29tczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkZsb29yIGFyZWE8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgeyBwcm9wZXJ0aWVzLm1hcCgocHJvcGVydHkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3Byb3BlcnR5LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDx0ZD48aW5wdXQgY2hlY2tlZD17cHJvcGVydHkuY2hlY2tlZH0gb25DaGFuZ2U9eygpID0+IHNldENoZWNrZWQocHJvcGVydHkuaWQpfSB0eXBlPVwiY2hlY2tib3hcIiAvPjwvdGQ+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IGNoZWNrZWQ9e3Byb3BlcnR5LmNoZWNrZWR9IG9uQ2hhbmdlPXsoKSA9PiBwcm9wcy5oYW5kbGVDaGVja2JveChwcm9wZXJ0eSl9IHR5cGU9XCJjaGVja2JveFwiIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wZXJ0eS5hZGRyZXNzfTwvdGQ+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wZXJ0eS5wb3N0Y29kZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BlcnR5LnByb3BlcnR5VHlwZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BlcnR5Lm51bWJlck9mUm9vbXN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wZXJ0eS5mbG9vckFyZWF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApICAgIFxyXG59Il0sIm5hbWVzIjpbIlNlYXJjaFJlc3VsdHMiLCJwcm9wZXJ0aWVzIiwiaGFuZGxlQ2hlY2tib3giLCJtYXAiLCJwcm9wZXJ0eSIsImNoZWNrZWQiLCJwcm9wcyIsImFkZHJlc3MiLCJwb3N0Y29kZSIsInByb3BlcnR5VHlwZSIsIm51bWJlck9mUm9vbXMiLCJmbG9vckFyZWEiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=