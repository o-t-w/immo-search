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
/* harmony import */ var _components_SearchFormAndSelected__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SearchFormAndSelected */ "./components/SearchFormAndSelected.js");
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

  function setChecked(property) {
    setChecked([].concat((0,C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(selectedProperties), [property]));
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
          lineNumber: 43,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h1", {
          className: "h1 align-center",
          children: "Property search tool"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_SearchFormAndSelected__WEBPACK_IMPORTED_MODULE_6__.default, {
      submitSearch: submitSearch,
      propertyType: propertyType
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      className: "search-results",
      children: properties ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_SearchResults__WEBPACK_IMPORTED_MODULE_4__.default, {
        properties: properties
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 23
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("p", {
        children: "Please enter a search query"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 67
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_PropertyTypesFilter__WEBPACK_IMPORTED_MODULE_3__.default, {
      propertyType: propertyType,
      setPropertyType: setPropertyType,
      propertyTypes: propertyTypes
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2M4MGY2ZGZlMTNlZjVlMzRkZjIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdlLFNBQVNTLE1BQVQsR0FBa0I7QUFBQTs7QUFDN0Isa0JBQXdDRiwrQ0FBUSxDQUFDLEtBQUQsQ0FBaEQ7QUFBQSxNQUFPRyxZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUNBLG1CQUFvQ0osK0NBQVEsQ0FBQyxFQUFELENBQTVDO0FBQUEsTUFBT0ssVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBMENOLCtDQUFRLENBQUMsRUFBRCxDQUFsRDtBQUFBLE1BQU9PLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUNBLG1CQUFvRFIsK0NBQVEsQ0FBQyxFQUFELENBQTVEO0FBQUEsTUFBT1Msa0JBQVA7QUFBQSxNQUEyQkMscUJBQTNCOztBQUVBVCxFQUFBQSxnREFBUyxpUkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNlSCxrRUFBeUIsRUFEeEM7O0FBQUE7QUFDQWEsWUFBQUEsTUFEQTtBQUVOSCxZQUFBQSxnQkFBZ0IsQ0FBQ0csTUFBTSxDQUFDSixhQUFSLENBQWhCOztBQUZNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsR0FBVDs7QUFLQSxXQUFTSyxVQUFULENBQW9CQyxRQUFwQixFQUE4QjtBQUMxQkQsSUFBQUEsVUFBVSw2SUFBS0gsa0JBQUwsSUFBeUJJLFFBQXpCLEdBQVY7QUFDSDs7QUFiNEIsV0FlZEMsWUFmYztBQUFBO0FBQUE7O0FBQUE7QUFBQSxzUkFlN0Isa0JBQTRCQyxPQUE1QixFQUFxQ1osWUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRVFBLFlBQVksS0FBSyxLQUZ6QjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQUcwQk4sd0RBQWUsQ0FBQztBQUFDa0IsZ0JBQUFBLE9BQU8sRUFBRUE7QUFBVixlQUFELENBSHpDOztBQUFBO0FBR1NDLGNBQUFBLFFBSFQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxxQkFLMEJuQix3REFBZSxDQUFDO0FBQUNrQixnQkFBQUEsT0FBTyxFQUFFQSxPQUFWO0FBQW1CWixnQkFBQUEsWUFBWSxFQUFDQTtBQUFoQyxlQUFELENBTHpDOztBQUFBO0FBS1NhLGNBQUFBLFFBTFQ7O0FBQUE7QUFRVUMsY0FBQUEsYUFSVixHQVEwQkQsUUFBUSxDQUFDWCxVQUFULENBQW9CYSxHQUFwQixDQUF3QixVQUFBTCxRQUFRO0FBQUEsdUJBQUlkLDZEQUFvQixDQUFDYyxRQUFRLENBQUNNLEVBQVYsQ0FBeEI7QUFBQSxlQUFoQyxDQVIxQjtBQVNJQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosYUFBWixFQUNDSyxJQURELENBQ00sVUFBQUMsTUFBTTtBQUFBLHVCQUFJQSxNQUFNLENBQUNMLEdBQVAsQ0FBVyxVQUFBTSxJQUFJLEVBQUk7QUFBQyx5QkFBT0EsSUFBSSxDQUFDWCxRQUFaO0FBQXFCLGlCQUF6QyxDQUFKO0FBQUEsZUFEWixFQUVDUyxJQUZELENBRU0sVUFBQUcsS0FBSztBQUFBLHVCQUFJQSxLQUFLLENBQUNQLEdBQU4sQ0FBVSxVQUFBTSxJQUFJLEVBQUk7QUFBRUEsa0JBQUFBLElBQUksQ0FBQ0UsT0FBTCxHQUFlLEtBQWY7QUFBc0IseUJBQU9GLElBQVA7QUFBYSxpQkFBdkQsQ0FBSjtBQUFBLGVBRlgsRUFHQ0YsSUFIRCxDQUdNLFVBQUFLLGFBQWE7QUFBQSx1QkFBSXJCLGFBQWEsQ0FBQ3FCLGFBQUQsQ0FBakI7QUFBQSxlQUhuQjs7QUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWY2QjtBQUFBO0FBQUE7O0FBOEI3QixzQkFDSTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUEsNEJBQ0E7QUFBUSxlQUFTLEVBQUMsWUFBbEI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQSxnQ0FDQTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUEyQixlQUFLLEVBQUMsS0FBakM7QUFBdUMsYUFBRyxFQUFDLGdCQUEzQztBQUE0RCxhQUFHLEVBQUM7QUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxlQUVFO0FBQUksbUJBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFRQSw4REFBQyxzRUFBRDtBQUF1QixrQkFBWSxFQUFFYixZQUFyQztBQUFtRCxrQkFBWSxFQUFFWDtBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkEsZUFjQTtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBLGdCQUVDRSxVQUFVLGdCQUFHLDhEQUFDLDhEQUFEO0FBQWUsa0JBQVUsRUFBRUE7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFILGdCQUErQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUYxRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEEsZUFtQkEsOERBQUMsb0VBQUQ7QUFBcUIsa0JBQVksRUFBRUYsWUFBbkM7QUFBaUQscUJBQWUsRUFBRUMsZUFBbEU7QUFBbUYsbUJBQWEsRUFBRUc7QUFBbEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXdCSDs7R0F0RHVCTDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BlcnR5VHlwZXNGaWx0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvcGVydHlUeXBlc0ZpbHRlclwiO1xyXG5pbXBvcnQgU2VhcmNoUmVzdWx0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzXCI7XHJcbmltcG9ydCBTZWxlY3RlZFByb3BlcnRpZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VsZWN0ZWRQcm9wZXJ0aWVzXCI7XHJcbmltcG9ydCBTZWFyY2hGb3JtQW5kU2VsZWN0ZWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoRm9ybUFuZFNlbGVjdGVkXCI7XHJcbmltcG9ydCB7ZmV0Y2hQcm9wZXJ0aWVzLCBnZXRBdmFpbGFibGVQcm9wZXJ0eVR5cGVzLCBmZXRjaFByb3BlcnR5RGV0YWlsc30gZnJvbSAnLi4vYXBpLmpzJztcclxuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKCkge1xyXG4gICAgY29uc3QgW3Byb3BlcnR5VHlwZSwgc2V0UHJvcGVydHlUeXBlXSA9IHVzZVN0YXRlKFwiYWxsXCIpO1xyXG4gICAgY29uc3QgW3Byb3BlcnRpZXMsIHNldFByb3BlcnRpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3Byb3BlcnR5VHlwZXMsIHNldFByb3BlcnR5VHlwZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkUHJvcGVydGllcywgc2V0U2VsZWN0ZWRQcm9wZXJ0aWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldEF2YWlsYWJsZVByb3BlcnR5VHlwZXMoKTtcclxuICAgICAgICBzZXRQcm9wZXJ0eVR5cGVzKHJlc3VsdC5wcm9wZXJ0eVR5cGVzKTtcclxuICAgIH0pXHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q2hlY2tlZChwcm9wZXJ0eSkge1xyXG4gICAgICAgIHNldENoZWNrZWQoWy4uLnNlbGVjdGVkUHJvcGVydGllcywgcHJvcGVydHldKVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdFNlYXJjaChhZGRyZXNzLCBwcm9wZXJ0eVR5cGUpIHtcclxuICAgICAgICBsZXQgcmVzcG9uc2U7XHJcbiAgICAgICAgaWYgKHByb3BlcnR5VHlwZSA9PT0gXCJhbGxcIikge1xyXG4gICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaFByb3BlcnRpZXMoe2FkZHJlc3M6IGFkZHJlc3N9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaFByb3BlcnRpZXMoe2FkZHJlc3M6IGFkZHJlc3MsIHByb3BlcnR5VHlwZTpwcm9wZXJ0eVR5cGV9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYWxsUHJvcGVydGllcyA9IHJlc3BvbnNlLnByb3BlcnRpZXMubWFwKHByb3BlcnR5ID0+IGZldGNoUHJvcGVydHlEZXRhaWxzKHByb3BlcnR5LmlkKSk7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwoYWxsUHJvcGVydGllcylcclxuICAgICAgICAudGhlbih2YWx1ZXMgPT4gdmFsdWVzLm1hcChpdGVtID0+IHtyZXR1cm4gaXRlbS5wcm9wZXJ0eX0pKVxyXG4gICAgICAgIC50aGVuKHRoaW5nID0+IHRoaW5nLm1hcChpdGVtID0+IHsgaXRlbS5jaGVja2VkID0gZmFsc2U7IHJldHVybiBpdGVtO30pKVxyXG4gICAgICAgIC50aGVuKHVwZGF0ZWRWYWx1ZXMgPT4gc2V0UHJvcGVydGllcyh1cGRhdGVkVmFsdWVzKSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJBcHAtaGVhZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN0cmFpbi13aWR0aFwiPlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbW1vLWxvZ29cIiB3aWR0aD1cIjEwMFwiIHNyYz0nL2ltbW8tbG9nby5zdmcnIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoMSBhbGlnbi1jZW50ZXJcIj5Qcm9wZXJ0eSBzZWFyY2ggdG9vbDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICA8U2VhcmNoRm9ybUFuZFNlbGVjdGVkIHN1Ym1pdFNlYXJjaD17c3VibWl0U2VhcmNofSBwcm9wZXJ0eVR5cGU9e3Byb3BlcnR5VHlwZX0vPlxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgey8qIDxTZWxlY3RlZFByb3BlcnRpZXMgLz4gKi99XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdHNcIj5cclxuICAgICAgIFxyXG4gICAgICAgIHtwcm9wZXJ0aWVzID8gPFNlYXJjaFJlc3VsdHMgcHJvcGVydGllcz17cHJvcGVydGllc30gLz4gOiA8cD5QbGVhc2UgZW50ZXIgYSBzZWFyY2ggcXVlcnk8L3A+IH0gIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgPFByb3BlcnR5VHlwZXNGaWx0ZXIgcHJvcGVydHlUeXBlPXtwcm9wZXJ0eVR5cGV9IHNldFByb3BlcnR5VHlwZT17c2V0UHJvcGVydHlUeXBlfSBwcm9wZXJ0eVR5cGVzPXtwcm9wZXJ0eVR5cGVzfSAvPlxyXG4gICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlByb3BlcnR5VHlwZXNGaWx0ZXIiLCJTZWFyY2hSZXN1bHRzIiwiU2VsZWN0ZWRQcm9wZXJ0aWVzIiwiU2VhcmNoRm9ybUFuZFNlbGVjdGVkIiwiZmV0Y2hQcm9wZXJ0aWVzIiwiZ2V0QXZhaWxhYmxlUHJvcGVydHlUeXBlcyIsImZldGNoUHJvcGVydHlEZXRhaWxzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTZWFyY2giLCJwcm9wZXJ0eVR5cGUiLCJzZXRQcm9wZXJ0eVR5cGUiLCJwcm9wZXJ0aWVzIiwic2V0UHJvcGVydGllcyIsInByb3BlcnR5VHlwZXMiLCJzZXRQcm9wZXJ0eVR5cGVzIiwic2VsZWN0ZWRQcm9wZXJ0aWVzIiwic2V0U2VsZWN0ZWRQcm9wZXJ0aWVzIiwicmVzdWx0Iiwic2V0Q2hlY2tlZCIsInByb3BlcnR5Iiwic3VibWl0U2VhcmNoIiwiYWRkcmVzcyIsInJlc3BvbnNlIiwiYWxsUHJvcGVydGllcyIsIm1hcCIsImlkIiwiUHJvbWlzZSIsImFsbCIsInRoZW4iLCJ2YWx1ZXMiLCJpdGVtIiwidGhpbmciLCJjaGVja2VkIiwidXBkYXRlZFZhbHVlcyJdLCJzb3VyY2VSb290IjoiIn0=