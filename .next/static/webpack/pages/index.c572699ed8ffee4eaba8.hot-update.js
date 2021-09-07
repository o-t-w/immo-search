"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SearchFormAndSelected.js":
/*!*********************************************!*\
  !*** ./components/SearchFormAndSelected.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SearchFormAndSelected; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Ollie\\Desktop\\immo-task\\components\\SearchFormAndSelected.js",
    _s = $RefreshSig$();



function SearchFormAndSelected(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      searchInput = _useState[0],
      setSearchInput = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "search-form-and-selected",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
      className: "mb24",
      onSubmit: function onSubmit(event) {
        event.preventDefault();
        props.submitSearch(searchInput, props.propertyType);
      },
      action: "",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
        className: "h2 mb24",
        htmlFor: "search",
        children: "Search"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "flex colgap16",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
          className: "flex1",
          placeholder: "Address",
          value: searchInput,
          onChange: function onChange(event) {
            return setSearchInput(event.target.value);
          },
          id: "search",
          type: "search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          className: "btn-search",
          children: "Search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

_s(SearchFormAndSelected, "6Eq05WFCbfVtzQf4MCSNdgDQaWk=");

_c = SearchFormAndSelected;

var _c;

$RefreshReg$(_c, "SearchFormAndSelected");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzU3MjY5OWVkOGZmZWU0ZWFiYTguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFZSxTQUFTQyxxQkFBVCxDQUErQkMsS0FBL0IsRUFBc0M7QUFBQTs7QUFFakQsa0JBQXNDRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUM7QUFBQSxNQUFPRyxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFDLDBCQUFmO0FBQUEsMkJBQ0E7QUFBTSxlQUFTLEVBQUMsTUFBaEI7QUFBdUIsY0FBUSxFQUFFLGtCQUFDQyxLQUFELEVBQVc7QUFBQ0EsUUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQXdCSixRQUFBQSxLQUFLLENBQUNLLFlBQU4sQ0FBbUJKLFdBQW5CLEVBQWdDRCxLQUFLLENBQUNNLFlBQXRDO0FBQW9ELE9BQXpIO0FBQTJILFlBQU0sRUFBQyxFQUFsSTtBQUFBLDhCQUNBO0FBQU8saUJBQVMsRUFBQyxTQUFqQjtBQUEyQixlQUFPLEVBQUMsUUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVBO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsZ0NBQ0E7QUFBTyxtQkFBUyxFQUFDLE9BQWpCO0FBQXlCLHFCQUFXLEVBQUMsU0FBckM7QUFBK0MsZUFBSyxFQUFFTCxXQUF0RDtBQUFtRSxrQkFBUSxFQUFFLGtCQUFDRSxLQUFEO0FBQUEsbUJBQVdELGNBQWMsQ0FBQ0MsS0FBSyxDQUFDSSxNQUFOLENBQWFDLEtBQWQsQ0FBekI7QUFBQSxXQUE3RTtBQUE0SCxZQUFFLEVBQUMsUUFBL0g7QUFBd0ksY0FBSSxFQUFDO0FBQTdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsZUFFQTtBQUFRLG1CQUFTLEVBQUMsWUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBWUg7O0dBaEJ1QlQ7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2VhcmNoRm9ybUFuZFNlbGVjdGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaEZvcm1BbmRTZWxlY3RlZChwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybS1hbmQtc2VsZWN0ZWRcIj5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtYjI0XCIgb25TdWJtaXQ9eyhldmVudCkgPT4ge2V2ZW50LnByZXZlbnREZWZhdWx0KCk7IHByb3BzLnN1Ym1pdFNlYXJjaChzZWFyY2hJbnB1dCwgcHJvcHMucHJvcGVydHlUeXBlKX19IGFjdGlvbj1cIlwiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJoMiBtYjI0XCIgaHRtbEZvcj1cInNlYXJjaFwiPlNlYXJjaDwvbGFiZWw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGNvbGdhcDE2XCI+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZsZXgxXCIgcGxhY2Vob2xkZXI9XCJBZGRyZXNzXCIgdmFsdWU9e3NlYXJjaElucHV0fSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTZWFyY2hJbnB1dChldmVudC50YXJnZXQudmFsdWUpfSBpZD1cInNlYXJjaFwiIHR5cGU9XCJzZWFyY2hcIi8+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tc2VhcmNoXCI+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiU2VhcmNoRm9ybUFuZFNlbGVjdGVkIiwicHJvcHMiLCJzZWFyY2hJbnB1dCIsInNldFNlYXJjaElucHV0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN1Ym1pdFNlYXJjaCIsInByb3BlcnR5VHlwZSIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==