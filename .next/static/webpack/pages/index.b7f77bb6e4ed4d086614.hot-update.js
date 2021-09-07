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
      var response, allProperties;
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
              response = _context2.sent;
              _context2.next = 11;
              break;

            case 8:
              _context2.next = 10;
              return (0,_api_js__WEBPACK_IMPORTED_MODULE_7__.fetchProperties)({
                address: address,
                propertyType: propertyType
              });

            case 10:
              response = _context2.sent;

            case 11:
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
              _context2.next = 18;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](0);
              setError(_context2.t0.message);

            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 15]]);
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
          lineNumber: 61,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h1", {
          className: "h1 align-center",
          children: "Property search tool"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_6__.default, {
      handleSearchInput: handleSearchInput,
      searchInput: searchInput,
      submitSearch: submitSearch,
      propertyType: propertyType
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }, this), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
      children: "error"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 19
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_SelectedProperties__WEBPACK_IMPORTED_MODULE_5__.default, {
      selectedProperties: selectedProperties
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      className: "search-results",
      children: properties ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_SearchResults__WEBPACK_IMPORTED_MODULE_4__.default, {
        handleCheckbox: handleCheckbox,
        properties: properties
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 23
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
        children: "Please enter a search query"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 99
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_PropertyTypesFilter__WEBPACK_IMPORTED_MODULE_3__.default, {
      searchInput: searchInput,
      submitSearch: submitSearch,
      propertyType: propertyType,
      setPropertyType: setPropertyType,
      propertyTypes: propertyTypes
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjdmNzdiYjZlNGVkNGQwODY2MTQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdlLFNBQVNTLE1BQVQsR0FBa0I7QUFBQTs7QUFDN0Isa0JBQXNDRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUM7QUFBQSxNQUFPRyxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG1CQUF3Q0osK0NBQVEsQ0FBQyxLQUFELENBQWhEO0FBQUEsTUFBT0ssWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFDQSxtQkFBb0NOLCtDQUFRLENBQUMsRUFBRCxDQUE1QztBQUFBLE1BQU9PLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0EsbUJBQTBDUiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEQ7QUFBQSxNQUFPUyxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxtQkFBb0RWLCtDQUFRLENBQUMsRUFBRCxDQUE1RDtBQUFBLE1BQU9XLGtCQUFQO0FBQUEsTUFBMkJDLHFCQUEzQjs7QUFDQSxtQkFBMEJaLCtDQUFRLENBQUMsS0FBRCxDQUFsQztBQUFBLE1BQU9hLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUVBYixFQUFBQSxnREFBUyxpUkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNlSCxrRUFBeUIsRUFEeEM7O0FBQUE7QUFDQWlCLFlBQUFBLE1BREE7QUFFTkwsWUFBQUEsZ0JBQWdCLENBQUNLLE1BQU0sQ0FBQ04sYUFBUixDQUFoQjs7QUFGTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELEdBQVQ7O0FBS0EsV0FBU08saUJBQVQsQ0FBMkJDLEtBQTNCLEVBQWtDO0FBQzlCYixJQUFBQSxjQUFjLENBQUNhLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQWQ7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QVksRUFBRXVCLFlBQTFGO0FBQXdHLGtCQUFZLEVBQUVyQjtBQUF0SDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkEsRUFVQ1EsS0FBSyxpQkFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZWLGVBWUEsOERBQUMsbUVBQUQ7QUFBb0Isd0JBQWtCLEVBQUVGO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaQSxlQWNBO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUEsZ0JBRUNKLFVBQVUsZ0JBQUcsOERBQUMsOERBQUQ7QUFBZSxzQkFBYyxFQUFFYSxjQUEvQjtBQUErQyxrQkFBVSxFQUFFYjtBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQUgsZ0JBQStFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRjFGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkQSxlQW1CQSw4REFBQyxvRUFBRDtBQUFxQixpQkFBVyxFQUFFSixXQUFsQztBQUErQyxrQkFBWSxFQUFFdUIsWUFBN0Q7QUFBMkUsa0JBQVksRUFBRXJCLFlBQXpGO0FBQXVHLHFCQUFlLEVBQUVDLGVBQXhIO0FBQXlJLG1CQUFhLEVBQUVHO0FBQXhKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF3Qkg7O0dBeEV1QlA7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wZXJ0eVR5cGVzRmlsdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb3BlcnR5VHlwZXNGaWx0ZXJcIjtcclxuaW1wb3J0IFNlYXJjaFJlc3VsdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0c1wiO1xyXG5pbXBvcnQgU2VsZWN0ZWRQcm9wZXJ0aWVzIGZyb20gXCIuLi9jb21wb25lbnRzL1NlbGVjdGVkUHJvcGVydGllc1wiO1xyXG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hGb3JtXCI7XHJcbmltcG9ydCB7ZmV0Y2hQcm9wZXJ0aWVzLCBnZXRBdmFpbGFibGVQcm9wZXJ0eVR5cGVzLCBmZXRjaFByb3BlcnR5RGV0YWlsc30gZnJvbSAnLi4vYXBpLmpzJztcclxuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKCkge1xyXG4gICAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbcHJvcGVydHlUeXBlLCBzZXRQcm9wZXJ0eVR5cGVdID0gdXNlU3RhdGUoXCJhbGxcIik7XHJcbiAgICBjb25zdCBbcHJvcGVydGllcywgc2V0UHJvcGVydGllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcHJvcGVydHlUeXBlcywgc2V0UHJvcGVydHlUeXBlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRQcm9wZXJ0aWVzLCBzZXRTZWxlY3RlZFByb3BlcnRpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRBdmFpbGFibGVQcm9wZXJ0eVR5cGVzKCk7XHJcbiAgICAgICAgc2V0UHJvcGVydHlUeXBlcyhyZXN1bHQucHJvcGVydHlUeXBlcyk7XHJcbiAgICB9KVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNlYXJjaElucHV0KGV2ZW50KSB7XHJcbiAgICAgICAgc2V0U2VhcmNoSW5wdXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGVja2JveChwcm9wZXJ0eSwgY2hlY2tlZCkge1xyXG4gICAgICAgIGlmIChjaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkUHJvcGVydGllcyhbLi4uc2VsZWN0ZWRQcm9wZXJ0aWVzLCBwcm9wZXJ0eV0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEFycmF5ID0gc2VsZWN0ZWRQcm9wZXJ0aWVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gcHJvcGVydHkpO1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFByb3BlcnRpZXModXBkYXRlZEFycmF5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc3VibWl0U2VhcmNoKGFkZHJlc3MsIHByb3BlcnR5VHlwZSkge1xyXG4gICAgICAgdHJ5IHtcclxuICAgICAgICAgICBzZXRFcnJvcihmYWxzZSk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlO1xyXG4gICAgICAgIGlmIChwcm9wZXJ0eVR5cGUgPT09IFwiYWxsXCIpIHtcclxuICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hQcm9wZXJ0aWVzKHthZGRyZXNzOiBhZGRyZXNzfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hQcm9wZXJ0aWVzKHthZGRyZXNzOiBhZGRyZXNzLCBwcm9wZXJ0eVR5cGU6cHJvcGVydHlUeXBlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFsbFByb3BlcnRpZXMgPSByZXNwb25zZS5wcm9wZXJ0aWVzLm1hcChwcm9wZXJ0eSA9PiBmZXRjaFByb3BlcnR5RGV0YWlscyhwcm9wZXJ0eS5pZCkpO1xyXG4gICAgICAgIFByb21pc2UuYWxsKGFsbFByb3BlcnRpZXMpXHJcbiAgICAgICAgLnRoZW4odmFsdWVzID0+IHZhbHVlcy5tYXAoaXRlbSA9PiB7cmV0dXJuIGl0ZW0ucHJvcGVydHl9KSlcclxuICAgICAgICAudGhlbih0aGluZyA9PiB0aGluZy5tYXAoaXRlbSA9PiB7IGl0ZW0uY2hlY2tlZCA9IGZhbHNlOyByZXR1cm4gaXRlbTt9KSlcclxuICAgICAgICAudGhlbih1cGRhdGVkVmFsdWVzID0+IHNldFByb3BlcnRpZXModXBkYXRlZFZhbHVlcykpXHJcbiAgICAgICAgXHJcbiAgICAgICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIkFwcC1oZWFkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3RyYWluLXdpZHRoXCI+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltbW8tbG9nb1wiIHdpZHRoPVwiMTAwXCIgc3JjPScvaW1tby1sb2dvLnN2ZycgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImgxIGFsaWduLWNlbnRlclwiPlByb3BlcnR5IHNlYXJjaCB0b29sPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICAgIDxTZWFyY2hGb3JtIGhhbmRsZVNlYXJjaElucHV0PXtoYW5kbGVTZWFyY2hJbnB1dH0gc2VhcmNoSW5wdXQ9e3NlYXJjaElucHV0fSBzdWJtaXRTZWFyY2g9e3N1Ym1pdFNlYXJjaH0gcHJvcGVydHlUeXBlPXtwcm9wZXJ0eVR5cGV9Lz5cclxuICAgICAgIFxyXG4gICAgICAgIHtlcnJvciAmJiA8cD5lcnJvcjwvcD59XHJcbiAgICAgICAgXHJcbiAgICAgICAgPFNlbGVjdGVkUHJvcGVydGllcyBzZWxlY3RlZFByb3BlcnRpZXM9e3NlbGVjdGVkUHJvcGVydGllc30vPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHRzXCI+XHJcbiAgICAgICBcclxuICAgICAgICB7cHJvcGVydGllcyA/IDxTZWFyY2hSZXN1bHRzIGhhbmRsZUNoZWNrYm94PXtoYW5kbGVDaGVja2JveH0gcHJvcGVydGllcz17cHJvcGVydGllc30gLz4gOiA8cD5QbGVhc2UgZW50ZXIgYSBzZWFyY2ggcXVlcnk8L3A+IH0gIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgPFByb3BlcnR5VHlwZXNGaWx0ZXIgc2VhcmNoSW5wdXQ9e3NlYXJjaElucHV0fSBzdWJtaXRTZWFyY2g9e3N1Ym1pdFNlYXJjaH0gcHJvcGVydHlUeXBlPXtwcm9wZXJ0eVR5cGV9IHNldFByb3BlcnR5VHlwZT17c2V0UHJvcGVydHlUeXBlfSBwcm9wZXJ0eVR5cGVzPXtwcm9wZXJ0eVR5cGVzfSAvPlxyXG4gICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlByb3BlcnR5VHlwZXNGaWx0ZXIiLCJTZWFyY2hSZXN1bHRzIiwiU2VsZWN0ZWRQcm9wZXJ0aWVzIiwiU2VhcmNoRm9ybSIsImZldGNoUHJvcGVydGllcyIsImdldEF2YWlsYWJsZVByb3BlcnR5VHlwZXMiLCJmZXRjaFByb3BlcnR5RGV0YWlscyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2VhcmNoIiwic2VhcmNoSW5wdXQiLCJzZXRTZWFyY2hJbnB1dCIsInByb3BlcnR5VHlwZSIsInNldFByb3BlcnR5VHlwZSIsInByb3BlcnRpZXMiLCJzZXRQcm9wZXJ0aWVzIiwicHJvcGVydHlUeXBlcyIsInNldFByb3BlcnR5VHlwZXMiLCJzZWxlY3RlZFByb3BlcnRpZXMiLCJzZXRTZWxlY3RlZFByb3BlcnRpZXMiLCJlcnJvciIsInNldEVycm9yIiwicmVzdWx0IiwiaGFuZGxlU2VhcmNoSW5wdXQiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2hlY2tib3giLCJwcm9wZXJ0eSIsImNoZWNrZWQiLCJ1cGRhdGVkQXJyYXkiLCJmaWx0ZXIiLCJpdGVtIiwic3VibWl0U2VhcmNoIiwiYWRkcmVzcyIsInJlc3BvbnNlIiwiYWxsUHJvcGVydGllcyIsIm1hcCIsImlkIiwiUHJvbWlzZSIsImFsbCIsInRoZW4iLCJ2YWx1ZXMiLCJ0aGluZyIsInVwZGF0ZWRWYWx1ZXMiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==