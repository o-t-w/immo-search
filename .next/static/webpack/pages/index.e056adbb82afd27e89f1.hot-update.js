"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SearchForm.js":
/*!**********************************!*\
  !*** ./components/SearchForm.js ***!
  \**********************************/
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
var _jsxFileName = "C:\\Users\\Ollie\\Desktop\\immo-task\\components\\SearchForm.js",
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


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Search; }
/* harmony export */ });
/* harmony import */ var C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_PropertyTypesFilter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PropertyTypesFilter */ "./components/PropertyTypesFilter.js");
/* harmony import */ var _components_SearchResults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SearchResults */ "./components/SearchResults.js");
/* harmony import */ var _components_SelectedProperties__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SelectedProperties */ "./components/SelectedProperties.js");
/* harmony import */ var _components_SearchForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SearchForm */ "./components/SearchForm.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api.js */ "./api.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Ollie\\Desktop\\immo-task\\pages\\index.js",
    _s = $RefreshSig$();









function Search() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)("all"),
      propertyType = _useState[0],
      setPropertyType = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]),
      properties = _useState2[0],
      setProperties = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]),
      propertyTypes = _useState3[0],
      setPropertyTypes = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]),
      selectedProperties = _useState4[0],
      setSelectedProperties = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)( /*#__PURE__*/(0,C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
    var result;
    return C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_api_js__WEBPACK_IMPORTED_MODULE_7__.getAvailablePropertyTypes)();

          case 2:
            result = _context.sent;
            setPropertyTypes(result.propertyTypes);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));

  function handleCheckbox(property, checked) {
    if (checked) {
      setSelectedProperties([].concat((0,C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(selectedProperties), [property]));
    } else {
      var updatedArray = selectedProperties.filter(function (item) {
        return item !== property;
      });
      setSelectedProperties(updatedArray);
    }
  }

  function submitSearch(_x, _x2) {
    return _submitSearch.apply(this, arguments);
  }

  function _submitSearch() {
    _submitSearch = (0,C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(address, propertyType) {
      var response, allProperties;
      return C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(propertyType === "all")) {
                _context2.next = 6;
                break;
              }

              _context2.next = 3;
              return (0,_api_js__WEBPACK_IMPORTED_MODULE_7__.fetchProperties)({
                address: address
              });

            case 3:
              response = _context2.sent;
              _context2.next = 9;
              break;

            case 6:
              _context2.next = 8;
              return (0,_api_js__WEBPACK_IMPORTED_MODULE_7__.fetchProperties)({
                address: address,
                propertyType: propertyType
              });

            case 8:
              response = _context2.sent;

            case 9:
              allProperties = response.properties.map(function (property) {
                return (0,_api_js__WEBPACK_IMPORTED_MODULE_7__.fetchPropertyDetails)(property.id);
              });
              Promise.all(allProperties).then(function (values) {
                return values.map(function (item) {
                  return item.property;
                });
              }).then(function (thing) {
                return thing.map(function (item) {
                  item.checked = false;
                  return item;
                });
              }).then(function (updatedValues) {
                return setProperties(updatedValues);
              });

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _submitSearch.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    className: "App",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("header", {
      className: "App-header",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: "constrain-width",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("img", {
          className: "immo-logo",
          width: "100",
          src: "/immo-logo.svg",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h1", {
          className: "h1 align-center",
          children: "Property search tool"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(SearchForm, {
      submitSearch: submitSearch,
      propertyType: propertyType
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_SelectedProperties__WEBPACK_IMPORTED_MODULE_5__.default, {
      selectedProperties: selectedProperties
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      className: "search-results",
      children: properties ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_SearchResults__WEBPACK_IMPORTED_MODULE_4__.default, {
        handleCheckbox: handleCheckbox,
        properties: properties
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 23
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
        children: "Please enter a search query"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 99
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_PropertyTypesFilter__WEBPACK_IMPORTED_MODULE_3__.default, {
      propertyType: propertyType,
      setPropertyType: setPropertyType,
      propertyTypes: propertyTypes
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }, this);
}

_s(Search, "Xk0ml4cTnXw5hWF8/4bzCf1vHaA=");

_c = Search;

var _c;

$RefreshReg$(_c, "Search");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTA1NmFkYmI4MmFmZDI3ZTg5ZjEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFZSxTQUFTQyxxQkFBVCxDQUErQkMsS0FBL0IsRUFBc0M7QUFBQTs7QUFFakQsa0JBQXNDRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUM7QUFBQSxNQUFPRyxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFDLDBCQUFmO0FBQUEsMkJBQ0E7QUFBTSxlQUFTLEVBQUMsTUFBaEI7QUFBdUIsY0FBUSxFQUFFLGtCQUFDQyxLQUFELEVBQVc7QUFBQ0EsUUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQXdCSixRQUFBQSxLQUFLLENBQUNLLFlBQU4sQ0FBbUJKLFdBQW5CLEVBQWdDRCxLQUFLLENBQUNNLFlBQXRDO0FBQW9ELE9BQXpIO0FBQTJILFlBQU0sRUFBQyxFQUFsSTtBQUFBLDhCQUNBO0FBQU8saUJBQVMsRUFBQyxTQUFqQjtBQUEyQixlQUFPLEVBQUMsUUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVBO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsZ0NBQ0E7QUFBTyxtQkFBUyxFQUFDLE9BQWpCO0FBQXlCLHFCQUFXLEVBQUMsU0FBckM7QUFBK0MsZUFBSyxFQUFFTCxXQUF0RDtBQUFtRSxrQkFBUSxFQUFFLGtCQUFDRSxLQUFEO0FBQUEsbUJBQVdELGNBQWMsQ0FBQ0MsS0FBSyxDQUFDSSxNQUFOLENBQWFDLEtBQWQsQ0FBekI7QUFBQSxXQUE3RTtBQUE0SCxZQUFFLEVBQUMsUUFBL0g7QUFBd0ksY0FBSSxFQUFDO0FBQTdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsZUFFQTtBQUFRLG1CQUFTLEVBQUMsWUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkE7QUFBQTtBQUFBO0FBQUE7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QSxlQWtCQSw4REFBQyxvRUFBRDtBQUFxQixrQkFBWSxFQUFFWixZQUFuQztBQUFpRCxxQkFBZSxFQUFFVyxlQUFsRTtBQUFtRixtQkFBYSxFQUFFRztBQUFsRztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBdUJIOztHQTFEdUJKOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlYXJjaEZvcm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaEZvcm1BbmRTZWxlY3RlZChwcm9wcykge1xyXG5cclxuICAgIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZm9ybS1hbmQtc2VsZWN0ZWRcIj5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtYjI0XCIgb25TdWJtaXQ9eyhldmVudCkgPT4ge2V2ZW50LnByZXZlbnREZWZhdWx0KCk7IHByb3BzLnN1Ym1pdFNlYXJjaChzZWFyY2hJbnB1dCwgcHJvcHMucHJvcGVydHlUeXBlKX19IGFjdGlvbj1cIlwiPlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJoMiBtYjI0XCIgaHRtbEZvcj1cInNlYXJjaFwiPlNlYXJjaDwvbGFiZWw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGNvbGdhcDE2XCI+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZsZXgxXCIgcGxhY2Vob2xkZXI9XCJBZGRyZXNzXCIgdmFsdWU9e3NlYXJjaElucHV0fSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRTZWFyY2hJbnB1dChldmVudC50YXJnZXQudmFsdWUpfSBpZD1cInNlYXJjaFwiIHR5cGU9XCJzZWFyY2hcIi8+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tc2VhcmNoXCI+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFByb3BlcnR5VHlwZXNGaWx0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvcGVydHlUeXBlc0ZpbHRlclwiO1xyXG5pbXBvcnQgU2VhcmNoUmVzdWx0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzXCI7XHJcbmltcG9ydCBTZWxlY3RlZFByb3BlcnRpZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VsZWN0ZWRQcm9wZXJ0aWVzXCI7XHJcbmltcG9ydCBTZWFyY2hGb3JtQW5kU2VsZWN0ZWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoRm9ybVwiO1xyXG5pbXBvcnQge2ZldGNoUHJvcGVydGllcywgZ2V0QXZhaWxhYmxlUHJvcGVydHlUeXBlcywgZmV0Y2hQcm9wZXJ0eURldGFpbHN9IGZyb20gJy4uL2FwaS5qcyc7XHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuICAgIGNvbnN0IFtwcm9wZXJ0eVR5cGUsIHNldFByb3BlcnR5VHlwZV0gPSB1c2VTdGF0ZShcImFsbFwiKTtcclxuICAgIGNvbnN0IFtwcm9wZXJ0aWVzLCBzZXRQcm9wZXJ0aWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtwcm9wZXJ0eVR5cGVzLCBzZXRQcm9wZXJ0eVR5cGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZFByb3BlcnRpZXMsIHNldFNlbGVjdGVkUHJvcGVydGllc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRBdmFpbGFibGVQcm9wZXJ0eVR5cGVzKCk7XHJcbiAgICAgICAgc2V0UHJvcGVydHlUeXBlcyhyZXN1bHQucHJvcGVydHlUeXBlcyk7XHJcbiAgICB9KVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoZWNrYm94KHByb3BlcnR5LCBjaGVja2VkKSB7XHJcbiAgICAgICAgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRQcm9wZXJ0aWVzKFsuLi5zZWxlY3RlZFByb3BlcnRpZXMsIHByb3BlcnR5XSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkQXJyYXkgPSBzZWxlY3RlZFByb3BlcnRpZXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkUHJvcGVydGllcyh1cGRhdGVkQXJyYXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBzdWJtaXRTZWFyY2goYWRkcmVzcywgcHJvcGVydHlUeXBlKSB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlO1xyXG4gICAgICAgIGlmIChwcm9wZXJ0eVR5cGUgPT09IFwiYWxsXCIpIHtcclxuICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hQcm9wZXJ0aWVzKHthZGRyZXNzOiBhZGRyZXNzfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hQcm9wZXJ0aWVzKHthZGRyZXNzOiBhZGRyZXNzLCBwcm9wZXJ0eVR5cGU6cHJvcGVydHlUeXBlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGFsbFByb3BlcnRpZXMgPSByZXNwb25zZS5wcm9wZXJ0aWVzLm1hcChwcm9wZXJ0eSA9PiBmZXRjaFByb3BlcnR5RGV0YWlscyhwcm9wZXJ0eS5pZCkpO1xyXG4gICAgICAgIFByb21pc2UuYWxsKGFsbFByb3BlcnRpZXMpXHJcbiAgICAgICAgLnRoZW4odmFsdWVzID0+IHZhbHVlcy5tYXAoaXRlbSA9PiB7cmV0dXJuIGl0ZW0ucHJvcGVydHl9KSlcclxuICAgICAgICAudGhlbih0aGluZyA9PiB0aGluZy5tYXAoaXRlbSA9PiB7IGl0ZW0uY2hlY2tlZCA9IGZhbHNlOyByZXR1cm4gaXRlbTt9KSlcclxuICAgICAgICAudGhlbih1cGRhdGVkVmFsdWVzID0+IHNldFByb3BlcnRpZXModXBkYXRlZFZhbHVlcykpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiQXBwLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdHJhaW4td2lkdGhcIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1tby1sb2dvXCIgd2lkdGg9XCIxMDBcIiBzcmM9Jy9pbW1vLWxvZ28uc3ZnJyBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaDEgYWxpZ24tY2VudGVyXCI+UHJvcGVydHkgc2VhcmNoIHRvb2w8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgPFNlYXJjaEZvcm0gc3VibWl0U2VhcmNoPXtzdWJtaXRTZWFyY2h9IHByb3BlcnR5VHlwZT17cHJvcGVydHlUeXBlfS8+XHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICA8U2VsZWN0ZWRQcm9wZXJ0aWVzIHNlbGVjdGVkUHJvcGVydGllcz17c2VsZWN0ZWRQcm9wZXJ0aWVzfS8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdHNcIj5cclxuICAgICAgIFxyXG4gICAgICAgIHtwcm9wZXJ0aWVzID8gPFNlYXJjaFJlc3VsdHMgaGFuZGxlQ2hlY2tib3g9e2hhbmRsZUNoZWNrYm94fSBwcm9wZXJ0aWVzPXtwcm9wZXJ0aWVzfSAvPiA6IDxwPlBsZWFzZSBlbnRlciBhIHNlYXJjaCBxdWVyeTwvcD4gfSAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgICA8UHJvcGVydHlUeXBlc0ZpbHRlciBwcm9wZXJ0eVR5cGU9e3Byb3BlcnR5VHlwZX0gc2V0UHJvcGVydHlUeXBlPXtzZXRQcm9wZXJ0eVR5cGV9IHByb3BlcnR5VHlwZXM9e3Byb3BlcnR5VHlwZXN9IC8+XHJcbiAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJTZWFyY2hGb3JtQW5kU2VsZWN0ZWQiLCJwcm9wcyIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3VibWl0U2VhcmNoIiwicHJvcGVydHlUeXBlIiwidGFyZ2V0IiwidmFsdWUiLCJQcm9wZXJ0eVR5cGVzRmlsdGVyIiwiU2VhcmNoUmVzdWx0cyIsIlNlbGVjdGVkUHJvcGVydGllcyIsImZldGNoUHJvcGVydGllcyIsImdldEF2YWlsYWJsZVByb3BlcnR5VHlwZXMiLCJmZXRjaFByb3BlcnR5RGV0YWlscyIsInVzZUVmZmVjdCIsIlNlYXJjaCIsInNldFByb3BlcnR5VHlwZSIsInByb3BlcnRpZXMiLCJzZXRQcm9wZXJ0aWVzIiwicHJvcGVydHlUeXBlcyIsInNldFByb3BlcnR5VHlwZXMiLCJzZWxlY3RlZFByb3BlcnRpZXMiLCJzZXRTZWxlY3RlZFByb3BlcnRpZXMiLCJyZXN1bHQiLCJoYW5kbGVDaGVja2JveCIsInByb3BlcnR5IiwiY2hlY2tlZCIsInVwZGF0ZWRBcnJheSIsImZpbHRlciIsIml0ZW0iLCJhZGRyZXNzIiwicmVzcG9uc2UiLCJhbGxQcm9wZXJ0aWVzIiwibWFwIiwiaWQiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsInZhbHVlcyIsInRoaW5nIiwidXBkYXRlZFZhbHVlcyJdLCJzb3VyY2VSb290IjoiIn0=