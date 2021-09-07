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
                return setProperties(values);
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
          lineNumber: 35,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h1", {
          className: "h1 align-center",
          children: "Property search tool"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_SearchFormAndSelected__WEBPACK_IMPORTED_MODULE_5__.default, {
      submitSearch: submitSearch,
      propertyType: propertyType
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "search-results"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_PropertyTypesFilter__WEBPACK_IMPORTED_MODULE_2__.default, {
      propertyType: propertyType,
      setPropertyType: setPropertyType,
      propertyTypes: propertyTypes
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, this);
}

_s(Search, "8Zz316PKH8w9opyQmgXtOn38f00=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGNlMmIxMmY0MWNlOWNiZjVmZmIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHZSxTQUFTUyxNQUFULEdBQWtCO0FBQUE7O0FBQzdCLGtCQUF3Q0YsK0NBQVEsQ0FBQyxLQUFELENBQWhEO0FBQUEsTUFBT0csWUFBUDtBQUFBLE1BQXFCQyxlQUFyQjs7QUFDQSxtQkFBb0NKLCtDQUFRLENBQUMsRUFBRCxDQUE1QztBQUFBLE1BQU9LLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0EsbUJBQTBDTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEQ7QUFBQSxNQUFPTyxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFFQVAsRUFBQUEsZ0RBQVMsaVJBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDZUgsa0VBQXlCLEVBRHhDOztBQUFBO0FBQ0FXLFlBQUFBLE1BREE7QUFFTkQsWUFBQUEsZ0JBQWdCLENBQUNDLE1BQU0sQ0FBQ0YsYUFBUixDQUFoQjs7QUFGTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELEdBQVQ7O0FBTDZCLFdBVWRHLFlBVmM7QUFBQTtBQUFBOztBQUFBO0FBQUEsc1JBVTdCLGtCQUE0QkMsT0FBNUIsRUFBcUNSLFlBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUVRQSxZQUFZLEtBQUssS0FGekI7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkFHMEJOLHdEQUFlLENBQUM7QUFBQ2MsZ0JBQUFBLE9BQU8sRUFBRUE7QUFBVixlQUFELENBSHpDOztBQUFBO0FBR1NDLGNBQUFBLFFBSFQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxxQkFLMEJmLHdEQUFlLENBQUM7QUFBQ2MsZ0JBQUFBLE9BQU8sRUFBRUEsT0FBVjtBQUFtQlIsZ0JBQUFBLFlBQVksRUFBQ0E7QUFBaEMsZUFBRCxDQUx6Qzs7QUFBQTtBQUtTUyxjQUFBQSxRQUxUOztBQUFBO0FBUVVDLGNBQUFBLGFBUlYsR0FRMEJELFFBQVEsQ0FBQ1AsVUFBVCxDQUFvQlMsR0FBcEIsQ0FBd0IsVUFBQUMsUUFBUTtBQUFBLHVCQUFJaEIsNkRBQW9CLENBQUNnQixRQUFRLENBQUNDLEVBQVYsQ0FBeEI7QUFBQSxlQUFoQyxDQVIxQjtBQVNJQyxjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsYUFBWixFQUEyQk0sSUFBM0IsQ0FBZ0MsVUFBQUMsTUFBTTtBQUFBLHVCQUFJZCxhQUFhLENBQUNjLE1BQUQsQ0FBakI7QUFBQSxlQUF0Qzs7QUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVY2QjtBQUFBO0FBQUE7O0FBc0I3QixzQkFDSTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUEsNEJBQ0E7QUFBUSxlQUFTLEVBQUMsWUFBbEI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQSxnQ0FDQTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUEyQixlQUFLLEVBQUMsS0FBakM7QUFBdUMsYUFBRyxFQUFDLGdCQUEzQztBQUE0RCxhQUFHLEVBQUM7QUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEQSxlQUVFO0FBQUksbUJBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFRQSw4REFBQyxzRUFBRDtBQUF1QixrQkFBWSxFQUFFVixZQUFyQztBQUFtRCxrQkFBWSxFQUFFUDtBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkEsZUFjQTtBQUFLLGVBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkQSxlQW1CQSw4REFBQyxvRUFBRDtBQUFxQixrQkFBWSxFQUFFQSxZQUFuQztBQUFpRCxxQkFBZSxFQUFFQyxlQUFsRTtBQUFtRixtQkFBYSxFQUFFRztBQUFsRztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBd0JIOztHQTlDdUJMOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcGVydHlUeXBlc0ZpbHRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9wZXJ0eVR5cGVzRmlsdGVyXCI7XHJcbmltcG9ydCBTZWFyY2hSZXN1bHRzIGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHNcIjtcclxuaW1wb3J0IFNlbGVjdGVkUHJvcGVydGllcyBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWxlY3RlZFByb3BlcnRpZXNcIjtcclxuaW1wb3J0IFNlYXJjaEZvcm1BbmRTZWxlY3RlZCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hGb3JtQW5kU2VsZWN0ZWRcIjtcclxuaW1wb3J0IHtmZXRjaFByb3BlcnRpZXMsIGdldEF2YWlsYWJsZVByb3BlcnR5VHlwZXMsIGZldGNoUHJvcGVydHlEZXRhaWxzfSBmcm9tICcuLi9hcGkuanMnO1xyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goKSB7XHJcbiAgICBjb25zdCBbcHJvcGVydHlUeXBlLCBzZXRQcm9wZXJ0eVR5cGVdID0gdXNlU3RhdGUoXCJhbGxcIik7XHJcbiAgICBjb25zdCBbcHJvcGVydGllcywgc2V0UHJvcGVydGllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcHJvcGVydHlUeXBlcywgc2V0UHJvcGVydHlUeXBlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRBdmFpbGFibGVQcm9wZXJ0eVR5cGVzKCk7XHJcbiAgICAgICAgc2V0UHJvcGVydHlUeXBlcyhyZXN1bHQucHJvcGVydHlUeXBlcyk7XHJcbiAgICB9KVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdFNlYXJjaChhZGRyZXNzLCBwcm9wZXJ0eVR5cGUpIHtcclxuICAgICAgICBsZXQgcmVzcG9uc2U7XHJcbiAgICAgICAgaWYgKHByb3BlcnR5VHlwZSA9PT0gXCJhbGxcIikge1xyXG4gICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaFByb3BlcnRpZXMoe2FkZHJlc3M6IGFkZHJlc3N9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaFByb3BlcnRpZXMoe2FkZHJlc3M6IGFkZHJlc3MsIHByb3BlcnR5VHlwZTpwcm9wZXJ0eVR5cGV9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYWxsUHJvcGVydGllcyA9IHJlc3BvbnNlLnByb3BlcnRpZXMubWFwKHByb3BlcnR5ID0+IGZldGNoUHJvcGVydHlEZXRhaWxzKHByb3BlcnR5LmlkKSk7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwoYWxsUHJvcGVydGllcykudGhlbih2YWx1ZXMgPT4gc2V0UHJvcGVydGllcyh2YWx1ZXMpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJBcHAtaGVhZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN0cmFpbi13aWR0aFwiPlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbW1vLWxvZ29cIiB3aWR0aD1cIjEwMFwiIHNyYz0nL2ltbW8tbG9nby5zdmcnIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoMSBhbGlnbi1jZW50ZXJcIj5Qcm9wZXJ0eSBzZWFyY2ggdG9vbDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICA8U2VhcmNoRm9ybUFuZFNlbGVjdGVkIHN1Ym1pdFNlYXJjaD17c3VibWl0U2VhcmNofSBwcm9wZXJ0eVR5cGU9e3Byb3BlcnR5VHlwZX0vPlxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgey8qIDxTZWxlY3RlZFByb3BlcnRpZXMgLz4gKi99XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdHNcIj5cclxuICAgICAgIFxyXG4gICAgICAgIHsvKiB7cHJvcGVydGllcyA/IDxTZWFyY2hSZXN1bHRzIHByb3BlcnRpZXM9e3Byb3BlcnRpZXN9IC8+IDogPHA+UGxlYXNlIGVudGVyIGEgc2VhcmNoIHF1ZXJ5PC9wPiB9ICAgKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgICA8UHJvcGVydHlUeXBlc0ZpbHRlciBwcm9wZXJ0eVR5cGU9e3Byb3BlcnR5VHlwZX0gc2V0UHJvcGVydHlUeXBlPXtzZXRQcm9wZXJ0eVR5cGV9IHByb3BlcnR5VHlwZXM9e3Byb3BlcnR5VHlwZXN9IC8+XHJcbiAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUHJvcGVydHlUeXBlc0ZpbHRlciIsIlNlYXJjaFJlc3VsdHMiLCJTZWxlY3RlZFByb3BlcnRpZXMiLCJTZWFyY2hGb3JtQW5kU2VsZWN0ZWQiLCJmZXRjaFByb3BlcnRpZXMiLCJnZXRBdmFpbGFibGVQcm9wZXJ0eVR5cGVzIiwiZmV0Y2hQcm9wZXJ0eURldGFpbHMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNlYXJjaCIsInByb3BlcnR5VHlwZSIsInNldFByb3BlcnR5VHlwZSIsInByb3BlcnRpZXMiLCJzZXRQcm9wZXJ0aWVzIiwicHJvcGVydHlUeXBlcyIsInNldFByb3BlcnR5VHlwZXMiLCJyZXN1bHQiLCJzdWJtaXRTZWFyY2giLCJhZGRyZXNzIiwicmVzcG9uc2UiLCJhbGxQcm9wZXJ0aWVzIiwibWFwIiwicHJvcGVydHkiLCJpZCIsIlByb21pc2UiLCJhbGwiLCJ0aGVuIiwidmFsdWVzIl0sInNvdXJjZVJvb3QiOiIifQ==