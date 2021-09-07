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

              if (!(propertyType === "all")) {
                _context2.next = 7;
                break;
              }

              _context2.next = 4;
              return (0,_api_js__WEBPACK_IMPORTED_MODULE_7__.fetchProperties)({
                address: address
              });

            case 4:
              _response = _context2.sent;
              _context2.next = 10;
              break;

            case 7:
              _context2.next = 9;
              return (0,_api_js__WEBPACK_IMPORTED_MODULE_7__.fetchProperties)({
                address: address,
                propertyType: propertyType
              });

            case 9:
              _response = _context2.sent;

            case 10:
              _context2.next = 14;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);

            case 14:
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

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 12]]);
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
          lineNumber: 58,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h1", {
          className: "h1 align-center",
          children: "Property search tool"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_6__.default, {
      handleSearchInput: handleSearchInput,
      searchInput: searchInput,
      submitSearch: submitSearch,
      propertyType: propertyType
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_SelectedProperties__WEBPACK_IMPORTED_MODULE_5__.default, {
      selectedProperties: selectedProperties
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      className: "search-results",
      children: properties ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_SearchResults__WEBPACK_IMPORTED_MODULE_4__.default, {
        handleCheckbox: handleCheckbox,
        properties: properties
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 23
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
        children: "Please enter a search query"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 99
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_PropertyTypesFilter__WEBPACK_IMPORTED_MODULE_3__.default, {
      searchInput: searchInput,
      submitSearch: submitSearch,
      propertyType: propertyType,
      setPropertyType: setPropertyType,
      propertyTypes: propertyTypes
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTM2ZDRjMTFmMGVjYTRiZjJiNjcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdlLFNBQVNTLE1BQVQsR0FBa0I7QUFBQTs7QUFDN0Isa0JBQXNDRiwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUM7QUFBQSxNQUFPRyxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQUNBLG1CQUF3Q0osK0NBQVEsQ0FBQyxLQUFELENBQWhEO0FBQUEsTUFBT0ssWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFDQSxtQkFBb0NOLCtDQUFRLENBQUMsRUFBRCxDQUE1QztBQUFBLE1BQU9PLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0EsbUJBQTBDUiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEQ7QUFBQSxNQUFPUyxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxtQkFBb0RWLCtDQUFRLENBQUMsRUFBRCxDQUE1RDtBQUFBLE1BQU9XLGtCQUFQO0FBQUEsTUFBMkJDLHFCQUEzQjs7QUFDQSxtQkFBMEJaLCtDQUFRLENBQUMsS0FBRCxDQUFsQztBQUFBLE1BQU9hLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUVBYixFQUFBQSxnREFBUyxpUkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNlSCxrRUFBeUIsRUFEeEM7O0FBQUE7QUFDQWlCLFlBQUFBLE1BREE7QUFFTkwsWUFBQUEsZ0JBQWdCLENBQUNLLE1BQU0sQ0FBQ04sYUFBUixDQUFoQjs7QUFGTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELEdBQVQ7O0FBS0EsV0FBU08saUJBQVQsQ0FBMkJDLEtBQTNCLEVBQWtDO0FBQzlCYixJQUFBQSxjQUFjLENBQUNhLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQWQ7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QVdBLDhEQUFDLG1FQUFEO0FBQW9CLHdCQUFrQixFQUFFTTtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEEsZUFhQTtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBLGdCQUVDSixVQUFVLGdCQUFHLDhEQUFDLDhEQUFEO0FBQWUsc0JBQWMsRUFBRWEsY0FBL0I7QUFBK0Msa0JBQVUsRUFBRWI7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFILGdCQUErRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUYxRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkEsZUFrQkEsOERBQUMsb0VBQUQ7QUFBcUIsaUJBQVcsRUFBRUosV0FBbEM7QUFBK0Msa0JBQVksRUFBRXVCLFlBQTdEO0FBQTJFLGtCQUFZLEVBQUVyQixZQUF6RjtBQUF1RyxxQkFBZSxFQUFFQyxlQUF4SDtBQUF5SSxtQkFBYSxFQUFFRztBQUF4SjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBdUJIOztHQXBFdUJQOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcGVydHlUeXBlc0ZpbHRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9wZXJ0eVR5cGVzRmlsdGVyXCI7XHJcbmltcG9ydCBTZWFyY2hSZXN1bHRzIGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHNcIjtcclxuaW1wb3J0IFNlbGVjdGVkUHJvcGVydGllcyBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWxlY3RlZFByb3BlcnRpZXNcIjtcclxuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoRm9ybVwiO1xyXG5pbXBvcnQge2ZldGNoUHJvcGVydGllcywgZ2V0QXZhaWxhYmxlUHJvcGVydHlUeXBlcywgZmV0Y2hQcm9wZXJ0eURldGFpbHN9IGZyb20gJy4uL2FwaS5qcyc7XHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuICAgIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Byb3BlcnR5VHlwZSwgc2V0UHJvcGVydHlUeXBlXSA9IHVzZVN0YXRlKFwiYWxsXCIpO1xyXG4gICAgY29uc3QgW3Byb3BlcnRpZXMsIHNldFByb3BlcnRpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3Byb3BlcnR5VHlwZXMsIHNldFByb3BlcnR5VHlwZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkUHJvcGVydGllcywgc2V0U2VsZWN0ZWRQcm9wZXJ0aWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0QXZhaWxhYmxlUHJvcGVydHlUeXBlcygpO1xyXG4gICAgICAgIHNldFByb3BlcnR5VHlwZXMocmVzdWx0LnByb3BlcnR5VHlwZXMpO1xyXG4gICAgfSlcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTZWFyY2hJbnB1dChldmVudCkge1xyXG4gICAgICAgIHNldFNlYXJjaElucHV0KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hlY2tib3gocHJvcGVydHksIGNoZWNrZWQpIHtcclxuICAgICAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFByb3BlcnRpZXMoWy4uLnNlbGVjdGVkUHJvcGVydGllcywgcHJvcGVydHldKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRBcnJheSA9IHNlbGVjdGVkUHJvcGVydGllcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IHByb3BlcnR5KTtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRQcm9wZXJ0aWVzKHVwZGF0ZWRBcnJheSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdFNlYXJjaChhZGRyZXNzLCBwcm9wZXJ0eVR5cGUpIHtcclxuICAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlO1xyXG4gICAgICAgIGlmIChwcm9wZXJ0eVR5cGUgPT09IFwiYWxsXCIpIHtcclxuICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hQcm9wZXJ0aWVzKHthZGRyZXNzOiBhZGRyZXNzfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hQcm9wZXJ0aWVzKHthZGRyZXNzOiBhZGRyZXNzLCBwcm9wZXJ0eVR5cGU6cHJvcGVydHlUeXBlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgfSBjYXRjaChlcnJvcikge1xyXG5cclxuICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBhbGxQcm9wZXJ0aWVzID0gcmVzcG9uc2UucHJvcGVydGllcy5tYXAocHJvcGVydHkgPT4gZmV0Y2hQcm9wZXJ0eURldGFpbHMocHJvcGVydHkuaWQpKTtcclxuICAgICAgICBQcm9taXNlLmFsbChhbGxQcm9wZXJ0aWVzKVxyXG4gICAgICAgIC50aGVuKHZhbHVlcyA9PiB2YWx1ZXMubWFwKGl0ZW0gPT4ge3JldHVybiBpdGVtLnByb3BlcnR5fSkpXHJcbiAgICAgICAgLnRoZW4odGhpbmcgPT4gdGhpbmcubWFwKGl0ZW0gPT4geyBpdGVtLmNoZWNrZWQgPSBmYWxzZTsgcmV0dXJuIGl0ZW07fSkpXHJcbiAgICAgICAgLnRoZW4odXBkYXRlZFZhbHVlcyA9PiBzZXRQcm9wZXJ0aWVzKHVwZGF0ZWRWYWx1ZXMpKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIkFwcC1oZWFkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3RyYWluLXdpZHRoXCI+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltbW8tbG9nb1wiIHdpZHRoPVwiMTAwXCIgc3JjPScvaW1tby1sb2dvLnN2ZycgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImgxIGFsaWduLWNlbnRlclwiPlByb3BlcnR5IHNlYXJjaCB0b29sPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICAgIDxTZWFyY2hGb3JtIGhhbmRsZVNlYXJjaElucHV0PXtoYW5kbGVTZWFyY2hJbnB1dH0gc2VhcmNoSW5wdXQ9e3NlYXJjaElucHV0fSBzdWJtaXRTZWFyY2g9e3N1Ym1pdFNlYXJjaH0gcHJvcGVydHlUeXBlPXtwcm9wZXJ0eVR5cGV9Lz5cclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxTZWxlY3RlZFByb3BlcnRpZXMgc2VsZWN0ZWRQcm9wZXJ0aWVzPXtzZWxlY3RlZFByb3BlcnRpZXN9Lz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0c1wiPlxyXG4gICAgICAgXHJcbiAgICAgICAge3Byb3BlcnRpZXMgPyA8U2VhcmNoUmVzdWx0cyBoYW5kbGVDaGVja2JveD17aGFuZGxlQ2hlY2tib3h9IHByb3BlcnRpZXM9e3Byb3BlcnRpZXN9IC8+IDogPHA+UGxlYXNlIGVudGVyIGEgc2VhcmNoIHF1ZXJ5PC9wPiB9ICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICAgIDxQcm9wZXJ0eVR5cGVzRmlsdGVyIHNlYXJjaElucHV0PXtzZWFyY2hJbnB1dH0gc3VibWl0U2VhcmNoPXtzdWJtaXRTZWFyY2h9IHByb3BlcnR5VHlwZT17cHJvcGVydHlUeXBlfSBzZXRQcm9wZXJ0eVR5cGU9e3NldFByb3BlcnR5VHlwZX0gcHJvcGVydHlUeXBlcz17cHJvcGVydHlUeXBlc30gLz5cclxuICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJQcm9wZXJ0eVR5cGVzRmlsdGVyIiwiU2VhcmNoUmVzdWx0cyIsIlNlbGVjdGVkUHJvcGVydGllcyIsIlNlYXJjaEZvcm0iLCJmZXRjaFByb3BlcnRpZXMiLCJnZXRBdmFpbGFibGVQcm9wZXJ0eVR5cGVzIiwiZmV0Y2hQcm9wZXJ0eURldGFpbHMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNlYXJjaCIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJwcm9wZXJ0eVR5cGUiLCJzZXRQcm9wZXJ0eVR5cGUiLCJwcm9wZXJ0aWVzIiwic2V0UHJvcGVydGllcyIsInByb3BlcnR5VHlwZXMiLCJzZXRQcm9wZXJ0eVR5cGVzIiwic2VsZWN0ZWRQcm9wZXJ0aWVzIiwic2V0U2VsZWN0ZWRQcm9wZXJ0aWVzIiwiZXJyb3IiLCJzZXRFcnJvciIsInJlc3VsdCIsImhhbmRsZVNlYXJjaElucHV0IiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNoZWNrYm94IiwicHJvcGVydHkiLCJjaGVja2VkIiwidXBkYXRlZEFycmF5IiwiZmlsdGVyIiwiaXRlbSIsInN1Ym1pdFNlYXJjaCIsImFkZHJlc3MiLCJyZXNwb25zZSIsImFsbFByb3BlcnRpZXMiLCJtYXAiLCJpZCIsIlByb21pc2UiLCJhbGwiLCJ0aGVuIiwidmFsdWVzIiwidGhpbmciLCJ1cGRhdGVkVmFsdWVzIl0sInNvdXJjZVJvb3QiOiIifQ==