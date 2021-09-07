"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchProperties": function() { return /* binding */ fetchProperties; },
/* harmony export */   "fetchPropertyDetails": function() { return /* binding */ fetchPropertyDetails; },
/* harmony export */   "getAvailablePropertyTypes": function() { return /* binding */ getAvailablePropertyTypes; }
/* harmony export */ });
/* harmony import */ var C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);



/**
 * Use the functions exported from this module as your "API" from which you
 * retrieve the data to display on the page. Do not modify this file.
 */

/**
 * Sleep for a given number of milliseconds.
 *
 * @param {number} delayInMilliseconds
 * @returns {Promise<void>}
 */
function wait(delayInMilliseconds) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, delayInMilliseconds);
  });
}
/**
 * Generate a pseudo-random integer.
 *
 * @param {number} max
 * @returns {number}
 */


function randomInteger(max) {
  return Math.floor(Math.random() * max);
}

var sampleProperties = [{
  address: 'Forsmannstraße 5',
  id: '1f2da4ef-c1b7-4b4e-b172-59f19987e0be',
  propertyType: 'detached',
  numberOfRooms: 5,
  floorArea: 26,
  postcode: '28535'
}, {
  address: 'Steinstraße 12',
  id: '12737c5f-2d01-4c43-a0e7-f6f87608a6b2',
  numberOfRooms: 2,
  propertyType: 'terraced',
  floorArea: 23,
  postcode: '21573'
}, {
  address: 'Himmelstraße 2',
  id: '4e579e07-59ac-451f-a843-60ad4aba16c4',
  propertyType: 'flat',
  numberOfRooms: 8,
  floorArea: 55,
  postcode: '23897'
}, {
  address: 'Süntelstraße 11A',
  id: '0157f7cb-ecfc-46aa-a89e-fb16d72e1e5b',
  propertyType: 'flat',
  numberOfRooms: 1,
  floorArea: 94,
  postcode: '24849'
}, {
  address: 'Alte Schleuse 23',
  id: 'ec2505ca-c09b-4c49-9322-0f57874f15c9',
  propertyType: 'flat',
  numberOfRooms: 3,
  floorArea: 48,
  postcode: '25257'
}, {
  address: 'Stellinger Weg 45',
  id: '85262b2e-ce2b-4c21-befd-b40c9c2b5891',
  propertyType: 'detached',
  numberOfRooms: 3,
  floorArea: 28,
  postcode: '20775'
}, {
  address: 'Nagelsweg 22',
  id: '0d0e3436-1886-4e4d-9fde-a33378ed1758',
  propertyType: 'detached',
  numberOfRooms: 6,
  floorArea: 27,
  postcode: '20059'
}, {
  address: 'Zimmerpforte 3',
  id: '656a0748-cd17-4957-9b30-ffcc80ec8fe8',
  propertyType: 'semi-detached',
  numberOfRooms: 10,
  floorArea: 115,
  postcode: '27331'
}, {
  address: 'Hamburger Berg 19',
  id: 'f3b31b72-549a-41de-a3fb-8c373233d5b7',
  propertyType: 'terraced',
  numberOfRooms: 9,
  floorArea: 115,
  postcode: '29551'
}];
/**
 * @typedef {Object} PropertiesListEntry
 * @property {string} id - Unique identifier
 * @property {string} address - Street address
 * @property {string} postcode - Postcode
 * @property {string} propertyType - Property type
 */

/**
 * Retrieve a list of properties, optionally filtered by property-type. Since
 * this function simulates an API, it will take up to 500ms to complete.
 *
 * @param {object} options
 * @param {string} options.address
 * @param {string} [options.propertyType]
 * @returns {Promise<{ properties: PropertiesListEntry[] }>}
 */

function fetchProperties(_x) {
  return _fetchProperties.apply(this, arguments);
}
/**
 * @typedef {object} PropertyDetails
 * @property {string} id - Unique identifier
 * @property {string} address - Street address
 * @property {string} postcode - Postcode
 * @property {string} propertyType - Property type
 * @property {number} numberOfRooms - Number of rooms in the property
 * @property {number} floorArea - Floor area in square meters
 */

/**
 * Retrieve details for a specific property.
 *
 * @param {string} propertyId
 * @returns {Promise<{ property: PropertyDetails }>}
 */


function _fetchProperties() {
  _fetchProperties = (0,C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(_ref) {
    var address, propertyType, propertiesFilteredByType, propertiesFilteredByAddress;
    return C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            address = _ref.address, propertyType = _ref.propertyType;
            _context.next = 3;
            return wait(randomInteger(500));

          case 3:
            if (!(typeof address !== 'string' || address.trim() === '')) {
              _context.next = 5;
              break;
            }

            throw new Error('`address` must be provided');

          case 5:
            if (false) {}

            throw new Error('An unexpected error occurred');

          case 7:
            propertiesFilteredByType = sampleProperties;

            if (propertyType !== undefined) {
              propertiesFilteredByType = propertiesFilteredByType.filter(function (property) {
                return property.propertyType === propertyType;
              });
            }

            propertiesFilteredByAddress = propertiesFilteredByType.filter(function (property) {
              return property.address.toLowerCase().includes(address.toLowerCase());
            });
            return _context.abrupt("return", {
              properties: propertiesFilteredByAddress.map(function (_ref2) {
                var id = _ref2.id,
                    address = _ref2.address,
                    postcode = _ref2.postcode,
                    propertyType = _ref2.propertyType;
                return {
                  id: id,
                  address: address,
                  postcode: postcode,
                  propertyType: propertyType
                };
              })
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchProperties.apply(this, arguments);
}

function fetchPropertyDetails(_x2) {
  return _fetchPropertyDetails.apply(this, arguments);
}
/**
 * @typedef {object} PropertyType
 * @property {string} label - The text to display
 * @property {string} value - The enum value assigned
 */

/**
 * Retrieve a list of all available property types.
 *
 * @returns {Promise<{ propertyTypes: PropertyType[] }>}
 */


function _fetchPropertyDetails() {
  _fetchPropertyDetails = (0,C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(propertyId) {
    var propertyToReturn;
    return C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(Math.random() > 0.99)) {
              _context2.next = 2;
              break;
            }

            throw new Error('An unexpected error occurred');

          case 2:
            _context2.next = 4;
            return wait(randomInteger(500));

          case 4:
            propertyToReturn = sampleProperties.find(function (property) {
              return property.id === propertyId;
            });
            return _context2.abrupt("return", {
              property: propertyToReturn
            });

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _fetchPropertyDetails.apply(this, arguments);
}

function getAvailablePropertyTypes() {
  return _getAvailablePropertyTypes.apply(this, arguments);
}

function _getAvailablePropertyTypes() {
  _getAvailablePropertyTypes = (0,C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {
    return C_Users_Ollie_Desktop_immo_task_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return wait(randomInteger(500));

          case 2:
            return _context3.abrupt("return", {
              propertyTypes: [{
                label: 'Semi-detached',
                value: 'semi-detached'
              }, {
                label: 'Detached house',
                value: 'detached'
              }, {
                label: 'Terraced house',
                value: 'terraced'
              }, {
                label: 'Flat',
                value: 'flat'
              }]
            });

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getAvailablePropertyTypes.apply(this, arguments);
}



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTMxZmI4MDAxYjg4YjcyNWVkYWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0MsU0FBU0EsSUFBVCxDQUFjQyxtQkFBZCxFQUFtQztBQUNoQyxTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFEO0FBQUEsV0FBYUMsVUFBVSxDQUFDRCxPQUFELEVBQVVGLG1CQUFWLENBQXZCO0FBQUEsR0FBWixDQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLFNBQVNJLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCO0FBQzFCLFNBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JILEdBQTNCLENBQVA7QUFDRDs7QUFFRCxJQUFNSSxnQkFBZ0IsR0FBRyxDQUN2QjtBQUNFQyxFQUFBQSxPQUFPLEVBQUUsa0JBRFg7QUFFRUMsRUFBQUEsRUFBRSxFQUFFLHNDQUZOO0FBR0VDLEVBQUFBLFlBQVksRUFBRSxVQUhoQjtBQUlFQyxFQUFBQSxhQUFhLEVBQUUsQ0FKakI7QUFLRUMsRUFBQUEsU0FBUyxFQUFFLEVBTGI7QUFNRUMsRUFBQUEsUUFBUSxFQUFFO0FBTlosQ0FEdUIsRUFTdkI7QUFDRUwsRUFBQUEsT0FBTyxFQUFFLGdCQURYO0FBRUVDLEVBQUFBLEVBQUUsRUFBRSxzQ0FGTjtBQUdFRSxFQUFBQSxhQUFhLEVBQUUsQ0FIakI7QUFJRUQsRUFBQUEsWUFBWSxFQUFFLFVBSmhCO0FBS0VFLEVBQUFBLFNBQVMsRUFBRSxFQUxiO0FBTUVDLEVBQUFBLFFBQVEsRUFBRTtBQU5aLENBVHVCLEVBaUJ2QjtBQUNFTCxFQUFBQSxPQUFPLEVBQUUsZ0JBRFg7QUFFRUMsRUFBQUEsRUFBRSxFQUFFLHNDQUZOO0FBR0VDLEVBQUFB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LENBTFo7O0FBQUE7QUFNUTBCLFlBQUFBLGdCQU5SLEdBTTJCckIsZ0JBQWdCLENBQUNzQixJQUFqQixDQUFzQixVQUFDVCxRQUFEO0FBQUEscUJBQWNBLFFBQVEsQ0FBQ1gsRUFBVCxLQUFnQmtCLFVBQTlCO0FBQUEsYUFBdEIsQ0FOM0I7QUFBQSw4Q0FRUztBQUFFUCxjQUFBQSxRQUFRLEVBQUVRO0FBQVosYUFSVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztTQXNCZUU7Ozs7O2lTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNRakMsSUFBSSxDQUFDSyxhQUFhLENBQUMsR0FBRCxDQUFkLENBRFo7O0FBQUE7QUFBQSw4Q0FHUztBQUNMNkIsY0FBQUEsYUFBYSxFQUFFLENBQ2I7QUFBRUMsZ0JBQUFBLEtBQUssRUFBRSxlQUFUO0FBQTBCQyxnQkFBQUEsS0FBSyxFQUFFO0FBQWpDLGVBRGEsRUFFYjtBQUFFRCxnQkFBQUEsS0FBSyxFQUFFLGdCQUFUO0FBQTJCQyxnQkFBQUEsS0FBSyxFQUFFO0FBQWxDLGVBRmEsRUFHYjtBQUFFRCxnQkFBQUEsS0FBSyxFQUFFLGdCQUFUO0FBQTJCQyxnQkFBQUEsS0FBSyxFQUFFO0FBQWxDLGVBSGEsRUFJYjtBQUFFRCxnQkFBQUEsS0FBSyxFQUFFLE1BQVQ7QUFBaUJDLGdCQUFBQSxLQUFLLEVBQUU7QUFBeEIsZUFKYTtBQURWLGFBSFQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFhQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcGkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFVzZSB0aGUgZnVuY3Rpb25zIGV4cG9ydGVkIGZyb20gdGhpcyBtb2R1bGUgYXMgeW91ciBcIkFQSVwiIGZyb20gd2hpY2ggeW91XHJcbiAqIHJldHJpZXZlIHRoZSBkYXRhIHRvIGRpc3BsYXkgb24gdGhlIHBhZ2UuIERvIG5vdCBtb2RpZnkgdGhpcyBmaWxlLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBTbGVlcCBmb3IgYSBnaXZlbiBudW1iZXIgb2YgbWlsbGlzZWNvbmRzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gZGVsYXlJbk1pbGxpc2Vjb25kc1xyXG4gKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cclxuICovXHJcbiBmdW5jdGlvbiB3YWl0KGRlbGF5SW5NaWxsaXNlY29uZHMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBkZWxheUluTWlsbGlzZWNvbmRzKSk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlIGEgcHNldWRvLXJhbmRvbSBpbnRlZ2VyLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IG1heFxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gcmFuZG9tSW50ZWdlcihtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xyXG4gIH1cclxuICBcclxuICBjb25zdCBzYW1wbGVQcm9wZXJ0aWVzID0gW1xyXG4gICAge1xyXG4gICAgICBhZGRyZXNzOiAnRm9yc21hbm5zdHJhw59lIDUnLFxyXG4gICAgICBpZDogJzFmMmRhNGVmLWMxYjctNGI0ZS1iMTcyLTU5ZjE5OTg3ZTBiZScsXHJcbiAgICAgIHByb3BlcnR5VHlwZTogJ2RldGFjaGVkJyxcclxuICAgICAgbnVtYmVyT2ZSb29tczogNSxcclxuICAgICAgZmxvb3JBcmVhOiAyNixcclxuICAgICAgcG9zdGNvZGU6ICcyODUzNScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBhZGRyZXNzOiAnU3RlaW5zdHJhw59lIDEyJyxcclxuICAgICAgaWQ6ICcxMjczN2M1Zi0yZDAxLTRjNDMtYTBlNy1mNmY4NzYwOGE2YjInLFxyXG4gICAgICBudW1iZXJPZlJvb21zOiAyLFxyXG4gICAgICBwcm9wZXJ0eVR5cGU6ICd0ZXJyYWNlZCcsXHJcbiAgICAgIGZsb29yQXJlYTogMjMsXHJcbiAgICAgIHBvc3Rjb2RlOiAnMjE1NzMnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYWRkcmVzczogJ0hpbW1lbHN0cmHDn2UgMicsXHJcbiAgICAgIGlkOiAnNGU1NzllMDctNTlhYy00NTFmLWE4NDMtNjBhZDRhYmExNmM0JyxcclxuICAgICAgcHJvcGVydHlUeXBlOiAnZmxhdCcsXHJcbiAgICAgIG51bWJlck9mUm9vbXM6IDgsXHJcbiAgICAgIGZsb29yQXJlYTogNTUsXHJcbiAgICAgIHBvc3Rjb2RlOiAnMjM4OTcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYWRkcmVzczogJ1PDvG50ZWxzdHJhw59lIDExQScsXHJcbiAgICAgIGlkOiAnMDE1N2Y3Y2ItZWNmYy00NmFhLWE4OWUtZmIxNmQ3MmUxZTViJyxcclxuICAgICAgcHJvcGVydHlUeXBlOiAnZmxhdCcsXHJcbiAgICAgIG51bWJlck9mUm9vbXM6IDEsXHJcbiAgICAgIGZsb29yQXJlYTogOTQsXHJcbiAgICAgIHBvc3Rjb2RlOiAnMjQ4NDknLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYWRkcmVzczogJ0FsdGUgU2NobGV1c2UgMjMnLFxyXG4gICAgICBpZDogJ2VjMjUwNWNhLWMwOWItNGM0OS05MzIyLTBmNTc4NzRmMTVjOScsXHJcbiAgICAgIHByb3BlcnR5VHlwZTogJ2ZsYXQnLFxyXG4gICAgICBudW1iZXJPZlJvb21zOiAzLFxyXG4gICAgICBmbG9vckFyZWE6IDQ4LFxyXG4gICAgICBwb3N0Y29kZTogJzI1MjU3JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGFkZHJlc3M6ICdTdGVsbGluZ2VyIFdlZyA0NScsXHJcbiAgICAgIGlkOiAnODUyNjJiMmUtY2UyYi00YzIxLWJlZmQtYjQwYzljMmI1ODkxJyxcclxuICAgICAgcHJvcGVydHlUeXBlOiAnZGV0YWNoZWQnLFxyXG4gICAgICBudW1iZXJPZlJvb21zOiAzLFxyXG4gICAgICBmbG9vckFyZWE6IDI4LFxyXG4gICAgICBwb3N0Y29kZTogJzIwNzc1JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGFkZHJlc3M6ICdOYWdlbHN3ZWcgMjInLFxyXG4gICAgICBpZDogJzBkMGUzNDM2LTE4ODYtNGU0ZC05ZmRlLWEzMzM3OGVkMTc1OCcsXHJcbiAgICAgIHByb3BlcnR5VHlwZTogJ2RldGFjaGVkJyxcclxuICAgICAgbnVtYmVyT2ZSb29tczogNixcclxuICAgICAgZmxvb3JBcmVhOiAyNyxcclxuICAgICAgcG9zdGNvZGU6ICcyMDA1OScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBhZGRyZXNzOiAnWmltbWVycGZvcnRlIDMnLFxyXG4gICAgICBpZDogJzY1NmEwNzQ4LWNkMTctNDk1Ny05YjMwLWZmY2M4MGVjOGZlOCcsXHJcbiAgICAgIHByb3BlcnR5VHlwZTogJ3NlbWktZGV0YWNoZWQnLFxyXG4gICAgICBudW1iZXJPZlJvb21zOiAxMCxcclxuICAgICAgZmxvb3JBcmVhOiAxMTUsXHJcbiAgICAgIHBvc3Rjb2RlOiAnMjczMzEnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYWRkcmVzczogJ0hhbWJ1cmdlciBCZXJnIDE5JyxcclxuICAgICAgaWQ6ICdmM2IzMWI3Mi01NDlhLTQxZGUtYTNmYi04YzM3MzIzM2Q1YjcnLFxyXG4gICAgICBwcm9wZXJ0eVR5cGU6ICd0ZXJyYWNlZCcsXHJcbiAgICAgIG51bWJlck9mUm9vbXM6IDksXHJcbiAgICAgIGZsb29yQXJlYTogMTE1LFxyXG4gICAgICBwb3N0Y29kZTogJzI5NTUxJyxcclxuICAgIH0sXHJcbiAgXTtcclxuICBcclxuICAvKipcclxuICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBQcm9wZXJ0aWVzTGlzdEVudHJ5XHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGlkIC0gVW5pcXVlIGlkZW50aWZpZXJcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gYWRkcmVzcyAtIFN0cmVldCBhZGRyZXNzXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IHBvc3Rjb2RlIC0gUG9zdGNvZGVcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gcHJvcGVydHlUeXBlIC0gUHJvcGVydHkgdHlwZVxyXG4gICAqL1xyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFJldHJpZXZlIGEgbGlzdCBvZiBwcm9wZXJ0aWVzLCBvcHRpb25hbGx5IGZpbHRlcmVkIGJ5IHByb3BlcnR5LXR5cGUuIFNpbmNlXHJcbiAgICogdGhpcyBmdW5jdGlvbiBzaW11bGF0ZXMgYW4gQVBJLCBpdCB3aWxsIHRha2UgdXAgdG8gNTAwbXMgdG8gY29tcGxldGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmFkZHJlc3NcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMucHJvcGVydHlUeXBlXVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgcHJvcGVydGllczogUHJvcGVydGllc0xpc3RFbnRyeVtdIH0+fVxyXG4gICAqL1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoUHJvcGVydGllcyh7IGFkZHJlc3MsIHByb3BlcnR5VHlwZSB9KSB7XHJcbiAgICBhd2FpdCB3YWl0KHJhbmRvbUludGVnZXIoNTAwKSk7XHJcbiAgXHJcbiAgICBpZiAodHlwZW9mIGFkZHJlc3MgIT09ICdzdHJpbmcnIHx8IGFkZHJlc3MudHJpbSgpID09PSAnJykge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BhZGRyZXNzYCBtdXN0IGJlIHByb3ZpZGVkJyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpZiAodHJ1ZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnKTtcclxuICAgIH1cclxuICBcclxuICAgIGxldCBwcm9wZXJ0aWVzRmlsdGVyZWRCeVR5cGUgPSBzYW1wbGVQcm9wZXJ0aWVzO1xyXG4gIFxyXG4gICAgaWYgKHByb3BlcnR5VHlwZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHByb3BlcnRpZXNGaWx0ZXJlZEJ5VHlwZSA9IHByb3BlcnRpZXNGaWx0ZXJlZEJ5VHlwZS5maWx0ZXIoXHJcbiAgICAgICAgKHByb3BlcnR5KSA9PiBwcm9wZXJ0eS5wcm9wZXJ0eVR5cGUgPT09IHByb3BlcnR5VHlwZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgcHJvcGVydGllc0ZpbHRlcmVkQnlBZGRyZXNzID0gcHJvcGVydGllc0ZpbHRlcmVkQnlUeXBlLmZpbHRlcigocHJvcGVydHkpID0+XHJcbiAgICAgIHByb3BlcnR5LmFkZHJlc3MudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhhZGRyZXNzLnRvTG93ZXJDYXNlKCkpXHJcbiAgICApO1xyXG4gIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcGVydGllczogcHJvcGVydGllc0ZpbHRlcmVkQnlBZGRyZXNzLm1hcCgoeyBpZCwgYWRkcmVzcywgcG9zdGNvZGUsIHByb3BlcnR5VHlwZSB9KSA9PiAoe1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIGFkZHJlc3MsXHJcbiAgICAgICAgcG9zdGNvZGUsXHJcbiAgICAgICAgcHJvcGVydHlUeXBlLFxyXG4gICAgICB9KSksXHJcbiAgICB9O1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAdHlwZWRlZiB7b2JqZWN0fSBQcm9wZXJ0eURldGFpbHNcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gaWQgLSBVbmlxdWUgaWRlbnRpZmllclxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBhZGRyZXNzIC0gU3RyZWV0IGFkZHJlc3NcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gcG9zdGNvZGUgLSBQb3N0Y29kZVxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBwcm9wZXJ0eVR5cGUgLSBQcm9wZXJ0eSB0eXBlXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IG51bWJlck9mUm9vbXMgLSBOdW1iZXIgb2Ygcm9vbXMgaW4gdGhlIHByb3BlcnR5XHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IGZsb29yQXJlYSAtIEZsb29yIGFyZWEgaW4gc3F1YXJlIG1ldGVyc1xyXG4gICAqL1xyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFJldHJpZXZlIGRldGFpbHMgZm9yIGEgc3BlY2lmaWMgcHJvcGVydHkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHlJZFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgcHJvcGVydHk6IFByb3BlcnR5RGV0YWlscyB9Pn1cclxuICAgKi9cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFByb3BlcnR5RGV0YWlscyhwcm9wZXJ0eUlkKSB7XHJcbiAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuOTkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBhd2FpdCB3YWl0KHJhbmRvbUludGVnZXIoNTAwKSk7XHJcbiAgICBjb25zdCBwcm9wZXJ0eVRvUmV0dXJuID0gc2FtcGxlUHJvcGVydGllcy5maW5kKChwcm9wZXJ0eSkgPT4gcHJvcGVydHkuaWQgPT09IHByb3BlcnR5SWQpO1xyXG4gIFxyXG4gICAgcmV0dXJuIHsgcHJvcGVydHk6IHByb3BlcnR5VG9SZXR1cm4gfTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQHR5cGVkZWYge29iamVjdH0gUHJvcGVydHlUeXBlXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGxhYmVsIC0gVGhlIHRleHQgdG8gZGlzcGxheVxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSBlbnVtIHZhbHVlIGFzc2lnbmVkXHJcbiAgICovXHJcbiAgXHJcbiAgLyoqXHJcbiAgICogUmV0cmlldmUgYSBsaXN0IG9mIGFsbCBhdmFpbGFibGUgcHJvcGVydHkgdHlwZXMuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IHByb3BlcnR5VHlwZXM6IFByb3BlcnR5VHlwZVtdIH0+fVxyXG4gICAqL1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEF2YWlsYWJsZVByb3BlcnR5VHlwZXMoKSB7XHJcbiAgICBhd2FpdCB3YWl0KHJhbmRvbUludGVnZXIoNTAwKSk7XHJcbiAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wZXJ0eVR5cGVzOiBbXHJcbiAgICAgICAgeyBsYWJlbDogJ1NlbWktZGV0YWNoZWQnLCB2YWx1ZTogJ3NlbWktZGV0YWNoZWQnIH0sXHJcbiAgICAgICAgeyBsYWJlbDogJ0RldGFjaGVkIGhvdXNlJywgdmFsdWU6ICdkZXRhY2hlZCcgfSxcclxuICAgICAgICB7IGxhYmVsOiAnVGVycmFjZWQgaG91c2UnLCB2YWx1ZTogJ3RlcnJhY2VkJyB9LFxyXG4gICAgICAgIHsgbGFiZWw6ICdGbGF0JywgdmFsdWU6ICdmbGF0JyB9LFxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxuICBcclxuICBleHBvcnQge1xyXG4gICAgZmV0Y2hQcm9wZXJ0aWVzLCBmZXRjaFByb3BlcnR5RGV0YWlscywgZ2V0QXZhaWxhYmxlUHJvcGVydHlUeXBlcyxcclxuICB9O1xyXG4gICJdLCJuYW1lcyI6WyJ3YWl0IiwiZGVsYXlJbk1pbGxpc2Vjb25kcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInJhbmRvbUludGVnZXIiLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzYW1wbGVQcm9wZXJ0aWVzIiwiYWRkcmVzcyIsImlkIiwicHJvcGVydHlUeXBlIiwibnVtYmVyT2ZSb29tcyIsImZsb29yQXJlYSIsInBvc3Rjb2RlIiwiZmV0Y2hQcm9wZXJ0aWVzIiwidHJpbSIsIkVycm9yIiwicHJvcGVydGllc0ZpbHRlcmVkQnlUeXBlIiwidW5kZWZpbmVkIiwiZmlsdGVyIiwicHJvcGVydHkiLCJwcm9wZXJ0aWVzRmlsdGVyZWRCeUFkZHJlc3MiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwicHJvcGVydGllcyIsIm1hcCIsImZldGNoUHJvcGVydHlEZXRhaWxzIiwicHJvcGVydHlJZCIsInByb3BlcnR5VG9SZXR1cm4iLCJmaW5kIiwiZ2V0QXZhaWxhYmxlUHJvcGVydHlUeXBlcyIsInByb3BlcnR5VHlwZXMiLCJsYWJlbCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==