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
/* harmony import */ var C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PropertyTypesFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PropertyTypesFilter */ "./components/PropertyTypesFilter.js");
/* harmony import */ var _components_SearchResults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SearchResults */ "./components/SearchResults.js");
/* harmony import */ var _components_SelectedProperties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SelectedProperties */ "./components/SelectedProperties.js");
/* harmony import */ var _components_SearchFormAndSelected__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SearchFormAndSelected */ "./components/SearchFormAndSelected.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api.js */ "./api.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Ollie\\Desktop\\immo-task\\pages\\index.js",
    _s = $RefreshSig$();









function Search() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("all"),
      propertyType = _useState[0],
      setPropertyType = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]),
      properties = _useState2[0],
      setProperties = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]),
      propertyTypes = _useState3[0],
      setPropertyTypes = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]),
      selectedProperties = _useState4[0],
      setSelectedProperties = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)( /*#__PURE__*/(0,C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var result;
    return C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,_api_js__WEBPACK_IMPORTED_MODULE_6__.getAvailablePropertyTypes)();

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

  function handleCheckbox() {
    setSelectedProperties();
  }

  function submitSearch(_x, _x2) {
    return _submitSearch.apply(this, arguments);
  }

  function _submitSearch() {
    _submitSearch = (0,C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(address, propertyType) {
      var response, allProperties;
      return C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(propertyType === "all")) {
                _context2.next = 6;
                break;
              }

              _context2.next = 3;
              return (0,_api_js__WEBPACK_IMPORTED_MODULE_6__.fetchProperties)({
                address: address
              });

            case 3:
              response = _context2.sent;
              _context2.next = 9;
              break;

            case 6:
              _context2.next = 8;
              return (0,_api_js__WEBPACK_IMPORTED_MODULE_6__.fetchProperties)({
                address: address,
                propertyType: propertyType
              });

            case 8:
              response = _context2.sent;

            case 9:
              allProperties = response.properties.map(function (property) {
                return (0,_api_js__WEBPACK_IMPORTED_MODULE_6__.fetchPropertyDetails)(property.id);
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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    className: "App",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("header", {
      className: "App-header",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "constrain-width",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
          className: "immo-logo",
          width: "100",
          src: "/immo-logo.svg",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h1", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_SearchFormAndSelected__WEBPACK_IMPORTED_MODULE_5__.default, {
      submitSearch: submitSearch,
      propertyType: propertyType
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "search-results",
      children: properties ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_SearchResults__WEBPACK_IMPORTED_MODULE_3__.default, {
        properties: properties
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 23
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_PropertyTypesFilter__WEBPACK_IMPORTED_MODULE_2__.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWYxOWZlMjJiZmJlM2QzOTI1OGEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHZSxTQUFTUyxNQUFULEdBQWtCO0FBQUE7O0FBQzdCLGtCQUF3Q0YsK0NBQVEsQ0FBQyxLQUFELENBQWhEO0FBQUEsTUFBT0csWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFDQSxtQkFBb0NKLCtDQUFRLENBQUMsRUFBRCxDQUE1QztBQUFBLE1BQU9LLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0EsbUJBQTBDTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEQ7QUFBQSxNQUFPTyxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxtQkFBb0RSLCtDQUFRLENBQUMsRUFBRCxDQUE1RDtBQUFBLE1BQU9TLGtCQUFQO0FBQUEsTUFBMkJDLHFCQUEzQjs7QUFFQVQsRUFBQUEsZ0RBQVMsaVJBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDZUgsa0VBQXlCLEVBRHhDOztBQUFBO0FBQ0FhLFlBQUFBLE1BREE7QUFFTkgsWUFBQUEsZ0JBQWdCLENBQUNHLE1BQU0sQ0FBQ0osYUFBUixDQUFoQjs7QUFGTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELEdBQVQ7O0FBS0EsV0FBU0ssY0FBVCxHQUEwQjtBQUN0QkYsSUFBQUEscUJBQXFCO0FBQ3hCOztBQWI0QixXQWVkRyxZQWZjO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHNSQWU3QixrQkFBNEJDLE9BQTVCLEVBQXFDWCxZQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFFUUEsWUFBWSxLQUFLLEtBRnpCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBRzBCTix3REFBZSxDQUFDO0FBQUNpQixnQkFBQUEsT0FBTyxFQUFFQTtBQUFWLGVBQUQsQ0FIekM7O0FBQUE7QUFHU0MsY0FBQUEsUUFIVDtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFCQUswQmxCLHdEQUFlLENBQUM7QUFBQ2lCLGdCQUFBQSxPQUFPLEVBQUVBLE9BQVY7QUFBbUJYLGdCQUFBQSxZQUFZLEVBQUNBO0FBQWhDLGVBQUQsQ0FMekM7O0FBQUE7QUFLU1ksY0FBQUEsUUFMVDs7QUFBQTtBQVFVQyxjQUFBQSxhQVJWLEdBUTBCRCxRQUFRLENBQUNWLFVBQVQsQ0FBb0JZLEdBQXBCLENBQXdCLFVBQUFDLFFBQVE7QUFBQSx1QkFBSW5CLDZEQUFvQixDQUFDbUIsUUFBUSxDQUFDQyxFQUFWLENBQXhCO0FBQUEsZUFBaEMsQ0FSMUI7QUFTSUMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLGFBQVosRUFDQ00sSUFERCxDQUNNLFVBQUFDLE1BQU07QUFBQSx1QkFBSUEsTUFBTSxDQUFDTixHQUFQLENBQVcsVUFBQU8sSUFBSSxFQUFJO0FBQUMseUJBQU9BLElBQUksQ0FBQ04sUUFBWjtBQUFxQixpQkFBekMsQ0FBSjtBQUFBLGVBRFosRUFFQ0ksSUFGRCxDQUVNLFVBQUFHLEtBQUs7QUFBQSx1QkFBSUEsS0FBSyxDQUFDUixHQUFOLENBQVUsVUFBQU8sSUFBSSxFQUFJO0FBQUVBLGtCQUFBQSxJQUFJLENBQUNFLE9BQUwsR0FBZSxLQUFmO0FBQXNCLHlCQUFPRixJQUFQO0FBQVksaUJBQXRELENBQUo7QUFBQSxlQUZYLEVBR0NGLElBSEQsQ0FHTSxVQUFBSyxhQUFhO0FBQUEsdUJBQUlyQixhQUFhLENBQUNxQixhQUFELENBQWpCO0FBQUEsZUFIbkI7O0FBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FmNkI7QUFBQTtBQUFBOztBQThCN0Isc0JBQ0k7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBLDRCQUNBO0FBQVEsZUFBUyxFQUFDLFlBQWxCO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUEsZ0NBQ0E7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBMkIsZUFBSyxFQUFDLEtBQWpDO0FBQXVDLGFBQUcsRUFBQyxnQkFBM0M7QUFBNEQsYUFBRyxFQUFDO0FBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsZUFFRTtBQUFJLG1CQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBUUEsOERBQUMsc0VBQUQ7QUFBdUIsa0JBQVksRUFBRWQsWUFBckM7QUFBbUQsa0JBQVksRUFBRVY7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJBLGVBY0E7QUFBSyxlQUFTLEVBQUMsZ0JBQWY7QUFBQSxnQkFFQ0UsVUFBVSxnQkFBRyw4REFBQyw4REFBRDtBQUFlLGtCQUFVLEVBQUVBO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBSCxnQkFBK0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRBLGVBbUJBLDhEQUFDLG9FQUFEO0FBQXFCLGtCQUFZLEVBQUVGLFlBQW5DO0FBQWlELHFCQUFlLEVBQUVDLGVBQWxFO0FBQW1GLG1CQUFhLEVBQUVHO0FBQWxHO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF3Qkg7O0dBdER1Qkw7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wZXJ0eVR5cGVzRmlsdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb3BlcnR5VHlwZXNGaWx0ZXJcIjtcclxuaW1wb3J0IFNlYXJjaFJlc3VsdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0c1wiO1xyXG5pbXBvcnQgU2VsZWN0ZWRQcm9wZXJ0aWVzIGZyb20gXCIuLi9jb21wb25lbnRzL1NlbGVjdGVkUHJvcGVydGllc1wiO1xyXG5pbXBvcnQgU2VhcmNoRm9ybUFuZFNlbGVjdGVkIGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaEZvcm1BbmRTZWxlY3RlZFwiO1xyXG5pbXBvcnQge2ZldGNoUHJvcGVydGllcywgZ2V0QXZhaWxhYmxlUHJvcGVydHlUeXBlcywgZmV0Y2hQcm9wZXJ0eURldGFpbHN9IGZyb20gJy4uL2FwaS5qcyc7XHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuICAgIGNvbnN0IFtwcm9wZXJ0eVR5cGUsIHNldFByb3BlcnR5VHlwZV0gPSB1c2VTdGF0ZShcImFsbFwiKTtcclxuICAgIGNvbnN0IFtwcm9wZXJ0aWVzLCBzZXRQcm9wZXJ0aWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtwcm9wZXJ0eVR5cGVzLCBzZXRQcm9wZXJ0eVR5cGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZFByb3BlcnRpZXMsIHNldFNlbGVjdGVkUHJvcGVydGllc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRBdmFpbGFibGVQcm9wZXJ0eVR5cGVzKCk7XHJcbiAgICAgICAgc2V0UHJvcGVydHlUeXBlcyhyZXN1bHQucHJvcGVydHlUeXBlcyk7XHJcbiAgICB9KVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoZWNrYm94KCkge1xyXG4gICAgICAgIHNldFNlbGVjdGVkUHJvcGVydGllcygpXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc3VibWl0U2VhcmNoKGFkZHJlc3MsIHByb3BlcnR5VHlwZSkge1xyXG4gICAgICAgIGxldCByZXNwb25zZTtcclxuICAgICAgICBpZiAocHJvcGVydHlUeXBlID09PSBcImFsbFwiKSB7XHJcbiAgICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoUHJvcGVydGllcyh7YWRkcmVzczogYWRkcmVzc30pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoUHJvcGVydGllcyh7YWRkcmVzczogYWRkcmVzcywgcHJvcGVydHlUeXBlOnByb3BlcnR5VHlwZX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBhbGxQcm9wZXJ0aWVzID0gcmVzcG9uc2UucHJvcGVydGllcy5tYXAocHJvcGVydHkgPT4gZmV0Y2hQcm9wZXJ0eURldGFpbHMocHJvcGVydHkuaWQpKTtcclxuICAgICAgICBQcm9taXNlLmFsbChhbGxQcm9wZXJ0aWVzKVxyXG4gICAgICAgIC50aGVuKHZhbHVlcyA9PiB2YWx1ZXMubWFwKGl0ZW0gPT4ge3JldHVybiBpdGVtLnByb3BlcnR5fSkpXHJcbiAgICAgICAgLnRoZW4odGhpbmcgPT4gdGhpbmcubWFwKGl0ZW0gPT4geyBpdGVtLmNoZWNrZWQgPSBmYWxzZTsgcmV0dXJuIGl0ZW19KSlcclxuICAgICAgICAudGhlbih1cGRhdGVkVmFsdWVzID0+IHNldFByb3BlcnRpZXModXBkYXRlZFZhbHVlcykpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiQXBwLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25zdHJhaW4td2lkdGhcIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1tby1sb2dvXCIgd2lkdGg9XCIxMDBcIiBzcmM9Jy9pbW1vLWxvZ28uc3ZnJyBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaDEgYWxpZ24tY2VudGVyXCI+UHJvcGVydHkgc2VhcmNoIHRvb2w8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgICAgPFNlYXJjaEZvcm1BbmRTZWxlY3RlZCBzdWJtaXRTZWFyY2g9e3N1Ym1pdFNlYXJjaH0gcHJvcGVydHlUeXBlPXtwcm9wZXJ0eVR5cGV9Lz5cclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHsvKiA8U2VsZWN0ZWRQcm9wZXJ0aWVzIC8+ICovfVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHRzXCI+XHJcbiAgICAgICBcclxuICAgICAgICB7cHJvcGVydGllcyA/IDxTZWFyY2hSZXN1bHRzIHByb3BlcnRpZXM9e3Byb3BlcnRpZXN9IC8+IDogPHA+UGxlYXNlIGVudGVyIGEgc2VhcmNoIHF1ZXJ5PC9wPiB9ICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICAgIDxQcm9wZXJ0eVR5cGVzRmlsdGVyIHByb3BlcnR5VHlwZT17cHJvcGVydHlUeXBlfSBzZXRQcm9wZXJ0eVR5cGU9e3NldFByb3BlcnR5VHlwZX0gcHJvcGVydHlUeXBlcz17cHJvcGVydHlUeXBlc30gLz5cclxuICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJQcm9wZXJ0eVR5cGVzRmlsdGVyIiwiU2VhcmNoUmVzdWx0cyIsIlNlbGVjdGVkUHJvcGVydGllcyIsIlNlYXJjaEZvcm1BbmRTZWxlY3RlZCIsImZldGNoUHJvcGVydGllcyIsImdldEF2YWlsYWJsZVByb3BlcnR5VHlwZXMiLCJmZXRjaFByb3BlcnR5RGV0YWlscyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2VhcmNoIiwicHJvcGVydHlUeXBlIiwic2V0UHJvcGVydHlUeXBlIiwicHJvcGVydGllcyIsInNldFByb3BlcnRpZXMiLCJwcm9wZXJ0eVR5cGVzIiwic2V0UHJvcGVydHlUeXBlcyIsInNlbGVjdGVkUHJvcGVydGllcyIsInNldFNlbGVjdGVkUHJvcGVydGllcyIsInJlc3VsdCIsImhhbmRsZUNoZWNrYm94Iiwic3VibWl0U2VhcmNoIiwiYWRkcmVzcyIsInJlc3BvbnNlIiwiYWxsUHJvcGVydGllcyIsIm1hcCIsInByb3BlcnR5IiwiaWQiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsInZhbHVlcyIsIml0ZW0iLCJ0aGluZyIsImNoZWNrZWQiLCJ1cGRhdGVkVmFsdWVzIl0sInNvdXJjZVJvb3QiOiIifQ==