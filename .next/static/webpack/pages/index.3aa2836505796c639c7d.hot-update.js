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

  function handleCheckbox(property, checked) {
    if (checked) {
      setSelectedProperties([].concat((0,C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(selectedProperties), [property]));
    } else {
      var updatedArray = selectedProperties.filter(function (item) {
        return item !== property;
      });
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
          lineNumber: 47,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h1", {
          className: "h1 align-center",
          children: "Property search tool"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_SearchFormAndSelected__WEBPACK_IMPORTED_MODULE_6__.default, {
      submitSearch: submitSearch,
      propertyType: propertyType
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
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
    lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2FhMjgzNjUwNTc5NmM2MzljN2QuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdlLFNBQVNTLE1BQVQsR0FBa0I7QUFBQTs7QUFDN0Isa0JBQXdDRiwrQ0FBUSxDQUFDLEtBQUQsQ0FBaEQ7QUFBQSxNQUFPRyxZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUNBLG1CQUFvQ0osK0NBQVEsQ0FBQyxFQUFELENBQTVDO0FBQUEsTUFBT0ssVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBMENOLCtDQUFRLENBQUMsRUFBRCxDQUFsRDtBQUFBLE1BQU9PLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUNBLG1CQUFvRFIsK0NBQVEsQ0FBQyxFQUFELENBQTVEO0FBQUEsTUFBT1Msa0JBQVA7QUFBQSxNQUEyQkMscUJBQTNCOztBQUVBVCxFQUFBQSxnREFBUyxpUkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNlSCxrRUFBeUIsRUFEeEM7O0FBQUE7QUFDQWEsWUFBQUEsTUFEQTtBQUVOSCxZQUFBQSxnQkFBZ0IsQ0FBQ0csTUFBTSxDQUFDSixhQUFSLENBQWhCOztBQUZNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsR0FBVDs7QUFLQSxXQUFTSyxjQUFULENBQXdCQyxRQUF4QixFQUFrQ0MsT0FBbEMsRUFBMkM7QUFDdkMsUUFBSUEsT0FBSixFQUFhO0FBQ1RKLE1BQUFBLHFCQUFxQiw2SUFBS0Qsa0JBQUwsSUFBeUJJLFFBQXpCLEdBQXJCO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsVUFBTUUsWUFBWSxHQUFHTixrQkFBa0IsQ0FBQ08sTUFBbkIsQ0FBMEIsVUFBQ0MsSUFBRDtBQUFBLGVBQVVBLElBQUksS0FBS0osUUFBbkI7QUFBQSxPQUEx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Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wZXJ0eVR5cGVzRmlsdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb3BlcnR5VHlwZXNGaWx0ZXJcIjtcclxuaW1wb3J0IFNlYXJjaFJlc3VsdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0c1wiO1xyXG5pbXBvcnQgU2VsZWN0ZWRQcm9wZXJ0aWVzIGZyb20gXCIuLi9jb21wb25lbnRzL1NlbGVjdGVkUHJvcGVydGllc1wiO1xyXG5pbXBvcnQgU2VhcmNoRm9ybUFuZFNlbGVjdGVkIGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaEZvcm1BbmRTZWxlY3RlZFwiO1xyXG5pbXBvcnQge2ZldGNoUHJvcGVydGllcywgZ2V0QXZhaWxhYmxlUHJvcGVydHlUeXBlcywgZmV0Y2hQcm9wZXJ0eURldGFpbHN9IGZyb20gJy4uL2FwaS5qcyc7XHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuICAgIGNvbnN0IFtwcm9wZXJ0eVR5cGUsIHNldFByb3BlcnR5VHlwZV0gPSB1c2VTdGF0ZShcImFsbFwiKTtcclxuICAgIGNvbnN0IFtwcm9wZXJ0aWVzLCBzZXRQcm9wZXJ0aWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtwcm9wZXJ0eVR5cGVzLCBzZXRQcm9wZXJ0eVR5cGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZFByb3BlcnRpZXMsIHNldFNlbGVjdGVkUHJvcGVydGllc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRBdmFpbGFibGVQcm9wZXJ0eVR5cGVzKCk7XHJcbiAgICAgICAgc2V0UHJvcGVydHlUeXBlcyhyZXN1bHQucHJvcGVydHlUeXBlcyk7XHJcbiAgICB9KVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoZWNrYm94KHByb3BlcnR5LCBjaGVja2VkKSB7XHJcbiAgICAgICAgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRQcm9wZXJ0aWVzKFsuLi5zZWxlY3RlZFByb3BlcnRpZXMsIHByb3BlcnR5XSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkQXJyYXkgPSBzZWxlY3RlZFByb3BlcnRpZXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBwcm9wZXJ0eSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc3VibWl0U2VhcmNoKGFkZHJlc3MsIHByb3BlcnR5VHlwZSkge1xyXG4gICAgICAgIGxldCByZXNwb25zZTtcclxuICAgICAgICBpZiAocHJvcGVydHlUeXBlID09PSBcImFsbFwiKSB7XHJcbiAgICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoUHJvcGVydGllcyh7YWRkcmVzczogYWRkcmVzc30pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoUHJvcGVydGllcyh7YWRkcmVzczogYWRkcmVzcywgcHJvcGVydHlUeXBlOnByb3BlcnR5VHlwZX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBhbGxQcm9wZXJ0aWVzID0gcmVzcG9uc2UucHJvcGVydGllcy5tYXAocHJvcGVydHkgPT4gZmV0Y2hQcm9wZXJ0eURldGFpbHMocHJvcGVydHkuaWQpKTtcclxuICAgICAgICBQcm9taXNlLmFsbChhbGxQcm9wZXJ0aWVzKVxyXG4gICAgICAgIC50aGVuKHZhbHVlcyA9PiB2YWx1ZXMubWFwKGl0ZW0gPT4ge3JldHVybiBpdGVtLnByb3BlcnR5fSkpXHJcbiAgICAgICAgLnRoZW4odGhpbmcgPT4gdGhpbmcubWFwKGl0ZW0gPT4geyBpdGVtLmNoZWNrZWQgPSBmYWxzZTsgcmV0dXJuIGl0ZW07fSkpXHJcbiAgICAgICAgLnRoZW4odXBkYXRlZFZhbHVlcyA9PiBzZXRQcm9wZXJ0aWVzKHVwZGF0ZWRWYWx1ZXMpKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIkFwcC1oZWFkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc3RyYWluLXdpZHRoXCI+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltbW8tbG9nb1wiIHdpZHRoPVwiMTAwXCIgc3JjPScvaW1tby1sb2dvLnN2ZycgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImgxIGFsaWduLWNlbnRlclwiPlByb3BlcnR5IHNlYXJjaCB0b29sPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICAgIDxTZWFyY2hGb3JtQW5kU2VsZWN0ZWQgc3VibWl0U2VhcmNoPXtzdWJtaXRTZWFyY2h9IHByb3BlcnR5VHlwZT17cHJvcGVydHlUeXBlfS8+XHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICB7LyogPFNlbGVjdGVkUHJvcGVydGllcyAvPiAqL31cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0c1wiPlxyXG4gICAgICAgXHJcbiAgICAgICAge3Byb3BlcnRpZXMgPyA8U2VhcmNoUmVzdWx0cyBoYW5kbGVDaGVja2JveD17aGFuZGxlQ2hlY2tib3h9IHByb3BlcnRpZXM9e3Byb3BlcnRpZXN9IC8+IDogPHA+UGxlYXNlIGVudGVyIGEgc2VhcmNoIHF1ZXJ5PC9wPiB9ICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICAgIDxQcm9wZXJ0eVR5cGVzRmlsdGVyIHByb3BlcnR5VHlwZT17cHJvcGVydHlUeXBlfSBzZXRQcm9wZXJ0eVR5cGU9e3NldFByb3BlcnR5VHlwZX0gcHJvcGVydHlUeXBlcz17cHJvcGVydHlUeXBlc30gLz5cclxuICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJQcm9wZXJ0eVR5cGVzRmlsdGVyIiwiU2VhcmNoUmVzdWx0cyIsIlNlbGVjdGVkUHJvcGVydGllcyIsIlNlYXJjaEZvcm1BbmRTZWxlY3RlZCIsImZldGNoUHJvcGVydGllcyIsImdldEF2YWlsYWJsZVByb3BlcnR5VHlwZXMiLCJmZXRjaFByb3BlcnR5RGV0YWlscyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2VhcmNoIiwicHJvcGVydHlUeXBlIiwic2V0UHJvcGVydHlUeXBlIiwicHJvcGVydGllcyIsInNldFByb3BlcnRpZXMiLCJwcm9wZXJ0eVR5cGVzIiwic2V0UHJvcGVydHlUeXBlcyIsInNlbGVjdGVkUHJvcGVydGllcyIsInNldFNlbGVjdGVkUHJvcGVydGllcyIsInJlc3VsdCIsImhhbmRsZUNoZWNrYm94IiwicHJvcGVydHkiLCJjaGVja2VkIiwidXBkYXRlZEFycmF5IiwiZmlsdGVyIiwiaXRlbSIsInN1Ym1pdFNlYXJjaCIsImFkZHJlc3MiLCJyZXNwb25zZSIsImFsbFByb3BlcnRpZXMiLCJtYXAiLCJpZCIsIlByb21pc2UiLCJhbGwiLCJ0aGVuIiwidmFsdWVzIiwidGhpbmciLCJ1cGRhdGVkVmFsdWVzIl0sInNvdXJjZVJvb3QiOiIifQ==