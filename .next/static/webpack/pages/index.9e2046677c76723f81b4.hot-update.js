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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_6__.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWUyMDQ2Njc3Yzc2NzIzZjgxYjQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdlLFNBQVNTLE1BQVQsR0FBa0I7QUFBQTs7QUFDN0Isa0JBQXdDRiwrQ0FBUSxDQUFDLEtBQUQsQ0FBaEQ7QUFBQSxNQUFPRyxZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUNBLG1CQUFvQ0osK0NBQVEsQ0FBQyxFQUFELENBQTVDO0FBQUEsTUFBT0ssVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBMENOLCtDQUFRLENBQUMsRUFBRCxDQUFsRDtBQUFBLE1BQU9PLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUNBLG1CQUFvRFIsK0NBQVEsQ0FBQyxFQUFELENBQTVEO0FBQUEsTUFBT1Msa0JBQVA7QUFBQSxNQUEyQkMscUJBQTNCOztBQUVBVCxFQUFBQSxnREFBUyxpUkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNlSCxrRUFBeUIsRUFEeEM7O0FBQUE7QUFDQWEsWUFBQUEsTUFEQTtBQUVOSCxZQUFBQSxnQkFBZ0IsQ0FBQ0csTUFBTSxDQUFDSixhQUFSLENBQWhCOztBQUZNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsR0FBVDs7QUFLQSxXQUFTSyxjQUFULENBQXdCQyxRQUF4QixFQUFrQ0MsT0FBbEMsRUFBMkM7QUFDdkMsUUFBSUEsT0FBSixFQUFhO0FBQ1RKLE1BQUFBLHFCQUFxQiw2SUFBS0Qsa0JBQUwsSUFBeUJJLFFBQXpCLEdBQXJCO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsVUFBTUUsWUFBWSxHQUFHTixrQkFBa0IsQ0FBQ08sTUFBbkIsQ0FBMEIsVUFBQ0MsSUFBRDtBQUFBLGVBQVVBLElBQUksS0FBS0osUUFBbkI7QUFBQSxPQUEx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O0FBQW1GLG1CQUFhLEVBQUVHO0FBQWxHO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF1Qkg7O0dBMUR1Qkw7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wZXJ0eVR5cGVzRmlsdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb3BlcnR5VHlwZXNGaWx0ZXJcIjtcclxuaW1wb3J0IFNlYXJjaFJlc3VsdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0c1wiO1xyXG5pbXBvcnQgU2VsZWN0ZWRQcm9wZXJ0aWVzIGZyb20gXCIuLi9jb21wb25lbnRzL1NlbGVjdGVkUHJvcGVydGllc1wiO1xyXG5pbXBvcnQgU2VhcmNoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWFyY2hGb3JtXCI7XHJcbmltcG9ydCB7ZmV0Y2hQcm9wZXJ0aWVzLCBnZXRBdmFpbGFibGVQcm9wZXJ0eVR5cGVzLCBmZXRjaFByb3BlcnR5RGV0YWlsc30gZnJvbSAnLi4vYXBpLmpzJztcclxuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKCkge1xyXG4gICAgY29uc3QgW3Byb3BlcnR5VHlwZSwgc2V0UHJvcGVydHlUeXBlXSA9IHVzZVN0YXRlKFwiYWxsXCIpO1xyXG4gICAgY29uc3QgW3Byb3BlcnRpZXMsIHNldFByb3BlcnRpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3Byb3BlcnR5VHlwZXMsIHNldFByb3BlcnR5VHlwZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkUHJvcGVydGllcywgc2V0U2VsZWN0ZWRQcm9wZXJ0aWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldEF2YWlsYWJsZVByb3BlcnR5VHlwZXMoKTtcclxuICAgICAgICBzZXRQcm9wZXJ0eVR5cGVzKHJlc3VsdC5wcm9wZXJ0eVR5cGVzKTtcclxuICAgIH0pXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hlY2tib3gocHJvcGVydHksIGNoZWNrZWQpIHtcclxuICAgICAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFByb3BlcnRpZXMoWy4uLnNlbGVjdGVkUHJvcGVydGllcywgcHJvcGVydHldKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRBcnJheSA9IHNlbGVjdGVkUHJvcGVydGllcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IHByb3BlcnR5KTtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRQcm9wZXJ0aWVzKHVwZGF0ZWRBcnJheSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdFNlYXJjaChhZGRyZXNzLCBwcm9wZXJ0eVR5cGUpIHtcclxuICAgICAgICBsZXQgcmVzcG9uc2U7XHJcbiAgICAgICAgaWYgKHByb3BlcnR5VHlwZSA9PT0gXCJhbGxcIikge1xyXG4gICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaFByb3BlcnRpZXMoe2FkZHJlc3M6IGFkZHJlc3N9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaFByb3BlcnRpZXMoe2FkZHJlc3M6IGFkZHJlc3MsIHByb3BlcnR5VHlwZTpwcm9wZXJ0eVR5cGV9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYWxsUHJvcGVydGllcyA9IHJlc3BvbnNlLnByb3BlcnRpZXMubWFwKHByb3BlcnR5ID0+IGZldGNoUHJvcGVydHlEZXRhaWxzKHByb3BlcnR5LmlkKSk7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwoYWxsUHJvcGVydGllcylcclxuICAgICAgICAudGhlbih2YWx1ZXMgPT4gdmFsdWVzLm1hcChpdGVtID0+IHtyZXR1cm4gaXRlbS5wcm9wZXJ0eX0pKVxyXG4gICAgICAgIC50aGVuKHRoaW5nID0+IHRoaW5nLm1hcChpdGVtID0+IHsgaXRlbS5jaGVja2VkID0gZmFsc2U7IHJldHVybiBpdGVtO30pKVxyXG4gICAgICAgIC50aGVuKHVwZGF0ZWRWYWx1ZXMgPT4gc2V0UHJvcGVydGllcyh1cGRhdGVkVmFsdWVzKSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJBcHAtaGVhZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN0cmFpbi13aWR0aFwiPlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbW1vLWxvZ29cIiB3aWR0aD1cIjEwMFwiIHNyYz0nL2ltbW8tbG9nby5zdmcnIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoMSBhbGlnbi1jZW50ZXJcIj5Qcm9wZXJ0eSBzZWFyY2ggdG9vbDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICA8U2VhcmNoRm9ybSBzdWJtaXRTZWFyY2g9e3N1Ym1pdFNlYXJjaH0gcHJvcGVydHlUeXBlPXtwcm9wZXJ0eVR5cGV9Lz5cclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxTZWxlY3RlZFByb3BlcnRpZXMgc2VsZWN0ZWRQcm9wZXJ0aWVzPXtzZWxlY3RlZFByb3BlcnRpZXN9Lz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0c1wiPlxyXG4gICAgICAgXHJcbiAgICAgICAge3Byb3BlcnRpZXMgPyA8U2VhcmNoUmVzdWx0cyBoYW5kbGVDaGVja2JveD17aGFuZGxlQ2hlY2tib3h9IHByb3BlcnRpZXM9e3Byb3BlcnRpZXN9IC8+IDogPHA+UGxlYXNlIGVudGVyIGEgc2VhcmNoIHF1ZXJ5PC9wPiB9ICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICAgIDxQcm9wZXJ0eVR5cGVzRmlsdGVyIHByb3BlcnR5VHlwZT17cHJvcGVydHlUeXBlfSBzZXRQcm9wZXJ0eVR5cGU9e3NldFByb3BlcnR5VHlwZX0gcHJvcGVydHlUeXBlcz17cHJvcGVydHlUeXBlc30gLz5cclxuICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJQcm9wZXJ0eVR5cGVzRmlsdGVyIiwiU2VhcmNoUmVzdWx0cyIsIlNlbGVjdGVkUHJvcGVydGllcyIsIlNlYXJjaEZvcm0iLCJmZXRjaFByb3BlcnRpZXMiLCJnZXRBdmFpbGFibGVQcm9wZXJ0eVR5cGVzIiwiZmV0Y2hQcm9wZXJ0eURldGFpbHMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlNlYXJjaCIsInByb3BlcnR5VHlwZSIsInNldFByb3BlcnR5VHlwZSIsInByb3BlcnRpZXMiLCJzZXRQcm9wZXJ0aWVzIiwicHJvcGVydHlUeXBlcyIsInNldFByb3BlcnR5VHlwZXMiLCJzZWxlY3RlZFByb3BlcnRpZXMiLCJzZXRTZWxlY3RlZFByb3BlcnRpZXMiLCJyZXN1bHQiLCJoYW5kbGVDaGVja2JveCIsInByb3BlcnR5IiwiY2hlY2tlZCIsInVwZGF0ZWRBcnJheSIsImZpbHRlciIsIml0ZW0iLCJzdWJtaXRTZWFyY2giLCJhZGRyZXNzIiwicmVzcG9uc2UiLCJhbGxQcm9wZXJ0aWVzIiwibWFwIiwiaWQiLCJQcm9taXNlIiwiYWxsIiwidGhlbiIsInZhbHVlcyIsInRoaW5nIiwidXBkYXRlZFZhbHVlcyJdLCJzb3VyY2VSb290IjoiIn0=