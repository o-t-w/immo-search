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

  function handleCheckbox(property) {
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
        handleCheckbox: handleCheckbox,
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
        columnNumber: 99
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmQzNDkzNmNmNGRjYmVhNWQ3Y2MuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdlLFNBQVNTLE1BQVQsR0FBa0I7QUFBQTs7QUFDN0Isa0JBQXdDRiwrQ0FBUSxDQUFDLEtBQUQsQ0FBaEQ7QUFBQSxNQUFPRyxZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUNBLG1CQUFvQ0osK0NBQVEsQ0FBQyxFQUFELENBQTVDO0FBQUEsTUFBT0ssVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBMENOLCtDQUFRLENBQUMsRUFBRCxDQUFsRDtBQUFBLE1BQU9PLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUNBLG1CQUFvRFIsK0NBQVEsQ0FBQyxFQUFELENBQTVEO0FBQUEsTUFBT1Msa0JBQVA7QUFBQSxNQUEyQkMscUJBQTNCOztBQUVBVCxFQUFBQSxnREFBUyxpUkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNlSCxrRUFBeUIsRUFEeEM7O0FBQUE7QUFDQWEsWUFBQUEsTUFEQTtBQUVOSCxZQUFBQSxnQkFBZ0IsQ0FBQ0csTUFBTSxDQUFDSixhQUFSLENBQWhCOztBQUZNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsR0FBVDs7QUFLQSxXQUFTSyxjQUFULENBQXdCQyxRQUF4QixFQUFrQztBQUM5QkMsSUFBQUEsVUFBVSw2SUFBS0wsa0JBQUwsSUFBeUJJLFFBQXpCLEdBQVY7QUFDSDs7QUFiNEIsV0FlZEUsWUFmYztBQUFBO0FBQUE7O0FBQUE7QUFBQSxzUkFlN0Isa0JBQTRCQyxPQUE1QixFQUFxQ2IsWUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRVFBLFlBQVksS0FBSyxLQUZ6QjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQUcwQk4sd0RBQWUsQ0FBQztBQUFDbUIsZ0JBQUFBLE9BQU8sRUFBRUE7QUFBVixlQUFELENBSHpDOztBQUFBO0FBR1NDLGNBQUFBLFFBSFQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxxQkFLMEJwQix3REFBZSxDQUFDO0FBQUNtQixnQkFBQUEsT0FBTyxFQUFFQSxPQUFWO0FBQW1CYixnQkFBQUEsWUFBWSxFQUFDQTtBQUFoQyxlQUFELENBTHpDOztBQUFBO0FBS1NjLGNBQUFBLFFBTFQ7O0FBQUE7QUFRVUMsY0FBQUEsYUFSVixHQVEwQkQsUUFBUSxDQUFDWixVQUFULENBQW9CYyxHQUFwQixDQUF3QixVQUFBTixRQUFRO0FBQUEsdUJBQUlkLDZEQUFvQixDQUFDYyxRQUFRLENBQUNPLEVBQVYsQ0FBeEI7QUFBQSxlQUFoQyxDQVIxQjtBQVNJQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosYUFBWixFQUNDSyxJQURELENBQ00sVUFBQUMsTUFBTTtBQUFBLHVCQUFJQSxNQUFNLENBQUNMLEdBQVAsQ0FBVyxVQUFBTSxJQUFJLEVBQUk7QUFBQyx5QkFBT0EsSUFBSSxDQUFDWixRQUFaO0FBQXFCLGlCQUF6QyxDQUFKO0FBQUEsZUFEWixFQUVDVSxJQUZELENBRU0sVUFBQUcsS0FBSztBQUFBLHVCQUFJQSxLQUFLLENBQUNQLEdBQU4sQ0FBVSxVQUFBTSxJQUFJLEVBQUk7QUFBRUEsa0JBQUFBLElBQUksQ0FBQ0UsT0FBTCxHQUFlLEtBQWY7QUFBc0IseUJBQU9GLElBQVA7QUFBYSxpQkFBdkQsQ0FBSjtBQUFBLGVBRlgsRUFHQ0YsSUFIRCxDQUdNLFVBQUFLLGFBQWE7QUFBQSx1QkFBSXRCLGFBQWEsQ0FBQ3NCLGFBQUQsQ0FBakI7QUFBQSxlQUhuQjs7QUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWY2QjtBQUFBO0FBQUE7O0FBOEI3QixzQkFDSTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUEsNEJBQ0E7QUFBUSxlQUFTLEVBQUMsWUFBbEI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQSxnQ0FDQTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUEyQixlQUFLLEVBQUMsS0FBakM7QUFBdUMsYUFBRyxFQUFDLGdCQUEzQztBQUE0RCxhQUFHLEVBQUM7QUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxlQUVFO0FBQUksbUJBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFRQSw4REFBQyxzRUFBRDtBQUF1QixrQkFBWSxFQUFFYixZQUFyQztBQUFtRCxrQkFBWSxFQUFFWjtBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkEsZUFjQTtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBLGdCQUVDRSxVQUFVLGdCQUFHLDhEQUFDLDhEQUFEO0FBQWUsc0JBQWMsRUFBRU8sY0FBL0I7QUFBK0Msa0JBQVUsRUFBRVA7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFILGdCQUErRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUYxRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEEsZUFtQkEsOERBQUMsb0VBQUQ7QUFBcUIsa0JBQVksRUFBRUYsWUFBbkM7QUFBaUQscUJBQWUsRUFBRUMsZUFBbEU7QUFBbUYsbUJBQWEsRUFBRUc7QUFBbEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXdCSDs7R0F0RHVCTDs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BlcnR5VHlwZXNGaWx0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvcGVydHlUeXBlc0ZpbHRlclwiO1xyXG5pbXBvcnQgU2VhcmNoUmVzdWx0cyBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzXCI7XHJcbmltcG9ydCBTZWxlY3RlZFByb3BlcnRpZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VsZWN0ZWRQcm9wZXJ0aWVzXCI7XHJcbmltcG9ydCBTZWFyY2hGb3JtQW5kU2VsZWN0ZWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoRm9ybUFuZFNlbGVjdGVkXCI7XHJcbmltcG9ydCB7ZmV0Y2hQcm9wZXJ0aWVzLCBnZXRBdmFpbGFibGVQcm9wZXJ0eVR5cGVzLCBmZXRjaFByb3BlcnR5RGV0YWlsc30gZnJvbSAnLi4vYXBpLmpzJztcclxuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKCkge1xyXG4gICAgY29uc3QgW3Byb3BlcnR5VHlwZSwgc2V0UHJvcGVydHlUeXBlXSA9IHVzZVN0YXRlKFwiYWxsXCIpO1xyXG4gICAgY29uc3QgW3Byb3BlcnRpZXMsIHNldFByb3BlcnRpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3Byb3BlcnR5VHlwZXMsIHNldFByb3BlcnR5VHlwZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkUHJvcGVydGllcywgc2V0U2VsZWN0ZWRQcm9wZXJ0aWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldEF2YWlsYWJsZVByb3BlcnR5VHlwZXMoKTtcclxuICAgICAgICBzZXRQcm9wZXJ0eVR5cGVzKHJlc3VsdC5wcm9wZXJ0eVR5cGVzKTtcclxuICAgIH0pXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hlY2tib3gocHJvcGVydHkpIHtcclxuICAgICAgICBzZXRDaGVja2VkKFsuLi5zZWxlY3RlZFByb3BlcnRpZXMsIHByb3BlcnR5XSlcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBzdWJtaXRTZWFyY2goYWRkcmVzcywgcHJvcGVydHlUeXBlKSB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlO1xyXG4gICAgICAgIGlmIChwcm9wZXJ0eVR5cGUgPT09IFwiYWxsXCIpIHtcclxuICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hQcm9wZXJ0aWVzKHthZGRyZXNzOiBhZGRyZXNzfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hQcm9wZXJ0aWVzKHthZGRyZXNzOiBhZGRyZXNzLCBwcm9wZXJ0eVR5cGU6cHJvcGVydHlUeXBlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGFsbFByb3BlcnRpZXMgPSByZXNwb25zZS5wcm9wZXJ0aWVzLm1hcChwcm9wZXJ0eSA9PiBmZXRjaFByb3BlcnR5RGV0YWlscyhwcm9wZXJ0eS5pZCkpO1xyXG4gICAgICAgIFByb21pc2UuYWxsKGFsbFByb3BlcnRpZXMpXHJcbiAgICAgICAgLnRoZW4odmFsdWVzID0+IHZhbHVlcy5tYXAoaXRlbSA9PiB7cmV0dXJuIGl0ZW0ucHJvcGVydHl9KSlcclxuICAgICAgICAudGhlbih0aGluZyA9PiB0aGluZy5tYXAoaXRlbSA9PiB7IGl0ZW0uY2hlY2tlZCA9IGZhbHNlOyByZXR1cm4gaXRlbTt9KSlcclxuICAgICAgICAudGhlbih1cGRhdGVkVmFsdWVzID0+IHNldFByb3BlcnRpZXModXBkYXRlZFZhbHVlcykpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiQXBwLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdHJhaW4td2lkdGhcIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1tby1sb2dvXCIgd2lkdGg9XCIxMDBcIiBzcmM9Jy9pbW1vLWxvZ28uc3ZnJyBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaDEgYWxpZ24tY2VudGVyXCI+UHJvcGVydHkgc2VhcmNoIHRvb2w8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgPFNlYXJjaEZvcm1BbmRTZWxlY3RlZCBzdWJtaXRTZWFyY2g9e3N1Ym1pdFNlYXJjaH0gcHJvcGVydHlUeXBlPXtwcm9wZXJ0eVR5cGV9Lz5cclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHsvKiA8U2VsZWN0ZWRQcm9wZXJ0aWVzIC8+ICovfVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHRzXCI+XHJcbiAgICAgICBcclxuICAgICAgICB7cHJvcGVydGllcyA/IDxTZWFyY2hSZXN1bHRzIGhhbmRsZUNoZWNrYm94PXtoYW5kbGVDaGVja2JveH0gcHJvcGVydGllcz17cHJvcGVydGllc30gLz4gOiA8cD5QbGVhc2UgZW50ZXIgYSBzZWFyY2ggcXVlcnk8L3A+IH0gIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgICAgPFByb3BlcnR5VHlwZXNGaWx0ZXIgcHJvcGVydHlUeXBlPXtwcm9wZXJ0eVR5cGV9IHNldFByb3BlcnR5VHlwZT17c2V0UHJvcGVydHlUeXBlfSBwcm9wZXJ0eVR5cGVzPXtwcm9wZXJ0eVR5cGVzfSAvPlxyXG4gICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlByb3BlcnR5VHlwZXNGaWx0ZXIiLCJTZWFyY2hSZXN1bHRzIiwiU2VsZWN0ZWRQcm9wZXJ0aWVzIiwiU2VhcmNoRm9ybUFuZFNlbGVjdGVkIiwiZmV0Y2hQcm9wZXJ0aWVzIiwiZ2V0QXZhaWxhYmxlUHJvcGVydHlUeXBlcyIsImZldGNoUHJvcGVydHlEZXRhaWxzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTZWFyY2giLCJwcm9wZXJ0eVR5cGUiLCJzZXRQcm9wZXJ0eVR5cGUiLCJwcm9wZXJ0aWVzIiwic2V0UHJvcGVydGllcyIsInByb3BlcnR5VHlwZXMiLCJzZXRQcm9wZXJ0eVR5cGVzIiwic2VsZWN0ZWRQcm9wZXJ0aWVzIiwic2V0U2VsZWN0ZWRQcm9wZXJ0aWVzIiwicmVzdWx0IiwiaGFuZGxlQ2hlY2tib3giLCJwcm9wZXJ0eSIsInNldENoZWNrZWQiLCJzdWJtaXRTZWFyY2giLCJhZGRyZXNzIiwicmVzcG9uc2UiLCJhbGxQcm9wZXJ0aWVzIiwibWFwIiwiaWQiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsInZhbHVlcyIsIml0ZW0iLCJ0aGluZyIsImNoZWNrZWQiLCJ1cGRhdGVkVmFsdWVzIl0sInNvdXJjZVJvb3QiOiIifQ==