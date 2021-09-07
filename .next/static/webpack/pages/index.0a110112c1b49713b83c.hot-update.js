"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(''),
      searchInput = _useState[0],
      setSearchInput = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)("all"),
      propertyType = _useState2[0],
      setPropertyType = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]),
      properties = _useState3[0],
      setProperties = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]),
      propertyTypes = _useState4[0],
      setPropertyTypes = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]),
      selectedProperties = _useState5[0],
      setSelectedProperties = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      error = _useState6[0],
      setError = _useState6[1];

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

  function handleSearchInput(event) {
    setSearchInput(event.target.value);
  }

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
      var _response, allProperties;

      return C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setError(false);

              if (!(propertyType === "all")) {
                _context2.next = 8;
                break;
              }

              _context2.next = 5;
              return (0,_api_js__WEBPACK_IMPORTED_MODULE_7__.fetchProperties)({
                address: address
              });

            case 5:
              _response = _context2.sent;
              _context2.next = 11;
              break;

            case 8:
              _context2.next = 10;
              return (0,_api_js__WEBPACK_IMPORTED_MODULE_7__.fetchProperties)({
                address: address,
                propertyType: propertyType
              });

            case 10:
              _response = _context2.sent;

            case 11:
              _context2.next = 16;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](0);
              setError(_context2.t0.message);

            case 16:
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

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 13]]);
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
          lineNumber: 59,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h1", {
          className: "h1 align-center",
          children: "Property search tool"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_6__.default, {
      handleSearchInput: handleSearchInput,
      searchInput: searchInput,
      submitSearch: submitSearch,
      propertyType: propertyType
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, this), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
      children: "error"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 19
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_SelectedProperties__WEBPACK_IMPORTED_MODULE_5__.default, {
      selectedProperties: selectedProperties
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      className: "search-results",
      children: properties ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_SearchResults__WEBPACK_IMPORTED_MODULE_4__.default, {
        handleCheckbox: handleCheckbox,
        properties: properties
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 23
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
        children: "Please enter a search query"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 99
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_PropertyTypesFilter__WEBPACK_IMPORTED_MODULE_3__.default, {
      searchInput: searchInput,
      submitSearch: submitSearch,
      propertyType: propertyType,
      setPropertyType: setPropertyType,
      propertyTypes: propertyTypes
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 9
  }, this);
}

_s(Search, "/cn49oYBJ2sfX7U2NTi+naKijJU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGExMTAxMTJjMWI0OTcxM2I4M2MuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdlLFNBQVNTLE1BQVQsR0FBa0I7QUFBQTs7QUFDN0Isa0JBQXNDRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUM7QUFBQSxNQUFPRyxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG1CQUF3Q0osK0NBQVEsQ0FBQyxLQUFELENBQWhEO0FBQUEsTUFBT0ssWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFDQSxtQkFBb0NOLCtDQUFRLENBQUMsRUFBRCxDQUE1QztBQUFBLE1BQU9PLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0EsbUJBQTBDUiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEQ7QUFBQSxNQUFPUyxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxtQkFBb0RWLCtDQUFRLENBQUMsRUFBRCxDQUE1RDtBQUFBLE1BQU9XLGtCQUFQO0FBQUEsTUFBMkJDLHFCQUEzQjs7QUFDQSxtQkFBMEJaLCtDQUFRLENBQUMsS0FBRCxDQUFsQztBQUFBLE1BQU9hLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUVBYixFQUFBQSxnREFBUyxpUkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNlSCxrRUFBeUIsRUFEeEM7O0FBQUE7QUFDQWlCLFlBQUFBLE1BREE7QUFFTkwsWUFBQUEsZ0JBQWdCLENBQUNLLE1BQU0sQ0FBQ04sYUFBUixDQUFoQjs7QUFGTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELEdBQVQ7O0FBS0EsV0FBU08saUJBQVQsQ0FBMkJDLEtBQTNCLEVBQWtDO0FBQzlCYixJQUFBQSxjQUFjLENBQUNhLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQWQ7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a0JBQVksRUFBRXVCLFlBQTFGO0FBQXdHLGtCQUFZLEVBQUVyQjtBQUF0SDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkEsRUFVQ1EsS0FBSyxpQkFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZWLGVBWUEsOERBQUMsbUVBQUQ7QUFBb0Isd0JBQWtCLEVBQUVGO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaQSxlQWNBO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUEsZ0JBRUNKLFVBQVUsZ0JBQUcsOERBQUMsOERBQUQ7QUFBZSxzQkFBYyxFQUFFYSxjQUEvQjtBQUErQyxrQkFBVSxFQUFFYjtBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQUgsZ0JBQStFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRjFGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkQSxlQW1CQSw4REFBQyxvRUFBRDtBQUFxQixpQkFBVyxFQUFFSixXQUFsQztBQUErQyxrQkFBWSxFQUFFdUIsWUFBN0Q7QUFBMkUsa0JBQVksRUFBRXJCLFlBQXpGO0FBQXVHLHFCQUFlLEVBQUVDLGVBQXhIO0FBQXlJLG1CQUFhLEVBQUVHO0FBQXhKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF3Qkg7O0dBdEV1QlA7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wZXJ0eVR5cGVzRmlsdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb3BlcnR5VHlwZXNGaWx0ZXJcIjtcclxuaW1wb3J0IFNlYXJjaFJlc3VsdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0c1wiO1xyXG5pbXBvcnQgU2VsZWN0ZWRQcm9wZXJ0aWVzIGZyb20gXCIuLi9jb21wb25lbnRzL1NlbGVjdGVkUHJvcGVydGllc1wiO1xyXG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hGb3JtXCI7XHJcbmltcG9ydCB7ZmV0Y2hQcm9wZXJ0aWVzLCBnZXRBdmFpbGFibGVQcm9wZXJ0eVR5cGVzLCBmZXRjaFByb3BlcnR5RGV0YWlsc30gZnJvbSAnLi4vYXBpLmpzJztcclxuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKCkge1xyXG4gICAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcHJvcGVydHlUeXBlLCBzZXRQcm9wZXJ0eVR5cGVdID0gdXNlU3RhdGUoXCJhbGxcIik7XHJcbiAgICBjb25zdCBbcHJvcGVydGllcywgc2V0UHJvcGVydGllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcHJvcGVydHlUeXBlcywgc2V0UHJvcGVydHlUeXBlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRQcm9wZXJ0aWVzLCBzZXRTZWxlY3RlZFByb3BlcnRpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRBdmFpbGFibGVQcm9wZXJ0eVR5cGVzKCk7XHJcbiAgICAgICAgc2V0UHJvcGVydHlUeXBlcyhyZXN1bHQucHJvcGVydHlUeXBlcyk7XHJcbiAgICB9KVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNlYXJjaElucHV0KGV2ZW50KSB7XHJcbiAgICAgICAgc2V0U2VhcmNoSW5wdXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGVja2JveChwcm9wZXJ0eSwgY2hlY2tlZCkge1xyXG4gICAgICAgIGlmIChjaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkUHJvcGVydGllcyhbLi4uc2VsZWN0ZWRQcm9wZXJ0aWVzLCBwcm9wZXJ0eV0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEFycmF5ID0gc2VsZWN0ZWRQcm9wZXJ0aWVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gcHJvcGVydHkpO1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFByb3BlcnRpZXModXBkYXRlZEFycmF5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc3VibWl0U2VhcmNoKGFkZHJlc3MsIHByb3BlcnR5VHlwZSkge1xyXG4gICAgICAgdHJ5IHtcclxuICAgICAgICAgICBzZXRFcnJvcihmYWxzZSk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlO1xyXG4gICAgICAgIGlmIChwcm9wZXJ0eVR5cGUgPT09IFwiYWxsXCIpIHtcclxuICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hQcm9wZXJ0aWVzKHthZGRyZXNzOiBhZGRyZXNzfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hQcm9wZXJ0aWVzKHthZGRyZXNzOiBhZGRyZXNzLCBwcm9wZXJ0eVR5cGU6cHJvcGVydHlUeXBlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgfSBjYXRjaChlcnJvcikge1xyXG4gICAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGFsbFByb3BlcnRpZXMgPSByZXNwb25zZS5wcm9wZXJ0aWVzLm1hcChwcm9wZXJ0eSA9PiBmZXRjaFByb3BlcnR5RGV0YWlscyhwcm9wZXJ0eS5pZCkpO1xyXG4gICAgICAgIFByb21pc2UuYWxsKGFsbFByb3BlcnRpZXMpXHJcbiAgICAgICAgLnRoZW4odmFsdWVzID0+IHZhbHVlcy5tYXAoaXRlbSA9PiB7cmV0dXJuIGl0ZW0ucHJvcGVydHl9KSlcclxuICAgICAgICAudGhlbih0aGluZyA9PiB0aGluZy5tYXAoaXRlbSA9PiB7IGl0ZW0uY2hlY2tlZCA9IGZhbHNlOyByZXR1cm4gaXRlbTt9KSlcclxuICAgICAgICAudGhlbih1cGRhdGVkVmFsdWVzID0+IHNldFByb3BlcnRpZXModXBkYXRlZFZhbHVlcykpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiQXBwLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdHJhaW4td2lkdGhcIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1tby1sb2dvXCIgd2lkdGg9XCIxMDBcIiBzcmM9Jy9pbW1vLWxvZ28uc3ZnJyBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaDEgYWxpZ24tY2VudGVyXCI+UHJvcGVydHkgc2VhcmNoIHRvb2w8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgPFNlYXJjaEZvcm0gaGFuZGxlU2VhcmNoSW5wdXQ9e2hhbmRsZVNlYXJjaElucHV0fSBzZWFyY2hJbnB1dD17c2VhcmNoSW5wdXR9IHN1Ym1pdFNlYXJjaD17c3VibWl0U2VhcmNofSBwcm9wZXJ0eVR5cGU9e3Byb3BlcnR5VHlwZX0vPlxyXG4gICAgICAgXHJcbiAgICAgICAge2Vycm9yICYmIDxwPmVycm9yPC9wPn1cclxuICAgICAgICBcclxuICAgICAgICA8U2VsZWN0ZWRQcm9wZXJ0aWVzIHNlbGVjdGVkUHJvcGVydGllcz17c2VsZWN0ZWRQcm9wZXJ0aWVzfS8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdHNcIj5cclxuICAgICAgIFxyXG4gICAgICAgIHtwcm9wZXJ0aWVzID8gPFNlYXJjaFJlc3VsdHMgaGFuZGxlQ2hlY2tib3g9e2hhbmRsZUNoZWNrYm94fSBwcm9wZXJ0aWVzPXtwcm9wZXJ0aWVzfSAvPiA6IDxwPlBsZWFzZSBlbnRlciBhIHNlYXJjaCBxdWVyeTwvcD4gfSAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgICA8UHJvcGVydHlUeXBlc0ZpbHRlciBzZWFyY2hJbnB1dD17c2VhcmNoSW5wdXR9IHN1Ym1pdFNlYXJjaD17c3VibWl0U2VhcmNofSBwcm9wZXJ0eVR5cGU9e3Byb3BlcnR5VHlwZX0gc2V0UHJvcGVydHlUeXBlPXtzZXRQcm9wZXJ0eVR5cGV9IHByb3BlcnR5VHlwZXM9e3Byb3BlcnR5VHlwZXN9IC8+XHJcbiAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUHJvcGVydHlUeXBlc0ZpbHRlciIsIlNlYXJjaFJlc3VsdHMiLCJTZWxlY3RlZFByb3BlcnRpZXMiLCJTZWFyY2hGb3JtIiwiZmV0Y2hQcm9wZXJ0aWVzIiwiZ2V0QXZhaWxhYmxlUHJvcGVydHlUeXBlcyIsImZldGNoUHJvcGVydHlEZXRhaWxzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTZWFyY2giLCJzZWFyY2hJbnB1dCIsInNldFNlYXJjaElucHV0IiwicHJvcGVydHlUeXBlIiwic2V0UHJvcGVydHlUeXBlIiwicHJvcGVydGllcyIsInNldFByb3BlcnRpZXMiLCJwcm9wZXJ0eVR5cGVzIiwic2V0UHJvcGVydHlUeXBlcyIsInNlbGVjdGVkUHJvcGVydGllcyIsInNldFNlbGVjdGVkUHJvcGVydGllcyIsImVycm9yIiwic2V0RXJyb3IiLCJyZXN1bHQiLCJoYW5kbGVTZWFyY2hJbnB1dCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDaGVja2JveCIsInByb3BlcnR5IiwiY2hlY2tlZCIsInVwZGF0ZWRBcnJheSIsImZpbHRlciIsIml0ZW0iLCJzdWJtaXRTZWFyY2giLCJhZGRyZXNzIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwiYWxsUHJvcGVydGllcyIsIm1hcCIsImlkIiwiUHJvbWlzZSIsImFsbCIsInRoZW4iLCJ2YWx1ZXMiLCJ0aGluZyIsInVwZGF0ZWRWYWx1ZXMiXSwic291cmNlUm9vdCI6IiJ9