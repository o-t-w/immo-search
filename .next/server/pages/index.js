"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchProperties": () => (/* binding */ fetchProperties),
/* harmony export */   "fetchPropertyDetails": () => (/* binding */ fetchPropertyDetails),
/* harmony export */   "getAvailablePropertyTypes": () => (/* binding */ getAvailablePropertyTypes)
/* harmony export */ });
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
  return new Promise(resolve => setTimeout(resolve, delayInMilliseconds));
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

const sampleProperties = [{
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

async function fetchProperties({
  address,
  propertyType
}) {
  await wait(randomInteger(500));

  if (typeof address !== 'string' || address.trim() === '') {
    throw new Error('`address` must be provided');
  }

  if (Math.random() > 0.98) {
    throw new Error('An unexpected error occurred');
  }

  let propertiesFilteredByType = sampleProperties;

  if (propertyType !== undefined) {
    propertiesFilteredByType = propertiesFilteredByType.filter(property => property.propertyType === propertyType);
  }

  const propertiesFilteredByAddress = propertiesFilteredByType.filter(property => property.address.toLowerCase().includes(address.toLowerCase()));
  return {
    properties: propertiesFilteredByAddress.map(({
      id,
      address,
      postcode,
      propertyType
    }) => ({
      id,
      address,
      postcode,
      propertyType
    }))
  };
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


async function fetchPropertyDetails(propertyId) {
  if (Math.random() > 0.99) {
    throw new Error('An unexpected error occurred');
  }

  await wait(randomInteger(500));
  const propertyToReturn = sampleProperties.find(property => property.id === propertyId);
  return {
    property: propertyToReturn
  };
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


async function getAvailablePropertyTypes() {
  await wait(randomInteger(500));
  return {
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
  };
}



/***/ }),

/***/ "./components/PropertyTypesFilter.js":
/*!*******************************************!*\
  !*** ./components/PropertyTypesFilter.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PropertyTypesFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Ollie\\Desktop\\immo-task\\components\\PropertyTypesFilter.js";

function PropertyTypesFilter(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "property-types mb24",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      className: "h2 mb24",
      children: "Property types"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "unstyled-list property-types-list",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: props.propertyType === 'all' ? 'bold' : null,
          onClick: () => {
            props.setPropertyType('all');
            props.submitSearch(props.searchInput);
          },
          children: "All"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 6,
          columnNumber: 11
        }, this), " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 7
      }, this), props.propertyTypes.map(item => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: item.value === props.propertyType ? 'bold' : null,
            onClick: () => {
              props.setPropertyType(item.value);
              props.submitSearch(props.searchInput, item.value);
            },
            children: item.label
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 8,
            columnNumber: 43
          }, this), " "]
        }, item.value, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 22
        }, this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/SearchForm.js":
/*!**********************************!*\
  !*** ./components/SearchForm.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchFormAndSelected)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Ollie\\Desktop\\immo-task\\components\\SearchForm.js";


function SearchFormAndSelected(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "search-form-and-selected",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
      className: "mb24",
      onSubmit: event => {
        event.preventDefault();
        props.submitSearch(props.searchInput, props.propertyType);
      },
      action: "",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("label", {
        className: "h2 mb24",
        htmlFor: "search",
        children: "Search"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "flex colgap16",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
          className: "flex1",
          placeholder: "Address",
          value: props.searchInput,
          onChange: event => props.handleSearchInput(event),
          id: "search",
          type: "search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
          className: "btn-search",
          children: "Search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/SearchResults.js":
/*!*************************************!*\
  !*** ./components/SearchResults.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchResults)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Ollie\\Desktop\\immo-task\\components\\SearchResults.js";


function SearchResults({
  properties,
  handleCheckbox
}) {
  if (properties.length > 0) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "h2 mb16",
        children: "Search results"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 10
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mb24 table-container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "\u2713"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Address"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Postcode"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Property type"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Number of rooms"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 21
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Floor area"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 17
            }, this), properties.map(property => {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    onChange: event => handleCheckbox(property, event.target.checked),
                    type: "checkbox"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 22,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                  columnNumber: 25
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  children: property.address
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                  columnNumber: 25
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  children: property.postcode
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 24,
                  columnNumber: 25
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  children: property.propertyType
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 25,
                  columnNumber: 25
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  children: property.numberOfRooms
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 25
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  children: property.floorArea
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 27,
                  columnNumber: 25
                }, this)]
              }, property.id, true, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 21
              }, this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 9
      }, this)]
    }, void 0, true);
  } else if (properties === null) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "h2 mb16",
        children: "Search results"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Search for an address in the input above"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, this)]
    }, void 0, true);
  } else {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "h2 mb16",
        children: "Search results"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "No results found"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }, this)]
    }, void 0, true);
  }
}

/***/ }),

/***/ "./components/SelectedProperties.js":
/*!******************************************!*\
  !*** ./components/SelectedProperties.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchResults)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Ollie\\Desktop\\immo-task\\components\\SelectedProperties.js";

function SearchResults({
  selectedProperties
}) {
  if (selectedProperties.length > 0) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        gridColumn: '2 / 3'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "h2 mb16",
        children: "Selected Properties"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mb24 table-container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("table", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Address"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 12,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Postcode"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Number of rooms"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 25
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
                children: "Floor area"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 25
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 21
            }, this), selectedProperties.map(property => {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  children: property.address
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 20,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  children: property.postcode
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 21,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  children: property.numberOfRooms
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                  columnNumber: 29
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("td", {
                  children: property.floorArea
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                  columnNumber: 29
                }, this)]
              }, property.id, true, {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 25
              }, this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }, this);
  } else {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      style: {
        gridColumn: ' 2 / 3'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: "h2 mb16",
        children: "Selected Properties"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 14
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "No properties selected"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 14
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this);
  }
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _components_PropertyTypesFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/PropertyTypesFilter */ "./components/PropertyTypesFilter.js");
/* harmony import */ var _components_SearchResults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SearchResults */ "./components/SearchResults.js");
/* harmony import */ var _components_SelectedProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SelectedProperties */ "./components/SelectedProperties.js");
/* harmony import */ var _components_SearchForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SearchForm */ "./components/SearchForm.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.js */ "./api.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Ollie\\Desktop\\immo-task\\pages\\index.js";







function Search() {
  const {
    0: searchInput,
    1: setSearchInput
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)('');
  const {
    0: propertyType,
    1: setPropertyType
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("all");
  const {
    0: properties,
    1: setProperties
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
  const {
    0: propertyTypes,
    1: setPropertyTypes
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
  const {
    0: selectedProperties,
    1: setSelectedProperties
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(async () => {
    const result = await (0,_api_js__WEBPACK_IMPORTED_MODULE_4__.getAvailablePropertyTypes)();
    setPropertyTypes(result.propertyTypes);
  });

  function handleSearchInput(event) {
    setSearchInput(event.target.value);
  }

  function handleCheckbox(property, checked) {
    if (checked) {
      setSelectedProperties([...selectedProperties, property]);
    } else {
      const updatedArray = selectedProperties.filter(item => item !== property);
      setSelectedProperties(updatedArray);
    }
  }

  async function submitSearch(address, propertyType) {
    try {
      setError(false);
      let response;

      if (propertyType === "all") {
        response = await (0,_api_js__WEBPACK_IMPORTED_MODULE_4__.fetchProperties)({
          address: address
        });
      } else {
        response = await (0,_api_js__WEBPACK_IMPORTED_MODULE_4__.fetchProperties)({
          address: address,
          propertyType: propertyType
        });
      }

      const allProperties = response.properties.map(property => (0,_api_js__WEBPACK_IMPORTED_MODULE_4__.fetchPropertyDetails)(property.id));
      Promise.all(allProperties).then(values => values.map(item => {
        return item.property;
      })).then(thing => thing.map(item => {
        item.checked = false;
        return item;
      })).then(updatedValues => setProperties(updatedValues));
    } catch (error) {
      setError(error.message);
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: "App",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("header", {
      className: "App-header",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "constrain-width",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
          className: "immo-logo",
          width: "100",
          src: "/immo-logo.svg",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "search-grid",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_SearchForm__WEBPACK_IMPORTED_MODULE_3__.default, {
        handleSearchInput: handleSearchInput,
        searchInput: searchInput,
        submitSearch: submitSearch,
        propertyType: propertyType
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
        children: "An unexpected error occurred"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 19
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_SelectedProperties__WEBPACK_IMPORTED_MODULE_2__.default, {
        selectedProperties: selectedProperties
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "search-results",
        children: properties ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_SearchResults__WEBPACK_IMPORTED_MODULE_1__.default, {
          handleCheckbox: handleCheckbox,
          properties: properties
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 23
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: "Please enter a search query"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 99
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_components_PropertyTypesFilter__WEBPACK_IMPORTED_MODULE_0__.default, {
        searchInput: searchInput,
        submitSearch: submitSearch,
        propertyType: propertyType,
        setPropertyType: setPropertyType,
        propertyTypes: propertyTypes
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDLFNBQVNBLElBQVQsQ0FBY0MsbUJBQWQsRUFBbUM7QUFDaEMsU0FBTyxJQUFJQyxPQUFKLENBQWFDLE9BQUQsSUFBYUMsVUFBVSxDQUFDRCxPQUFELEVBQVVGLG1CQUFWLENBQW5DLENBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsU0FBU0ksYUFBVCxDQUF1QkMsR0FBdkIsRUFBNEI7QUFDMUIsU0FBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkgsR0FBM0IsQ0FBUDtBQUNEOztBQUVELE1BQU1JLGdCQUFnQixHQUFHLENBQ3ZCO0FBQ0VDLEVBQUFBLE9BQU8sRUFBRSxrQkFEWDtBQUVFQyxFQUFBQSxFQUFFLEVBQUUsc0NBRk47QUFHRUMsRUFBQUEsWUFBWSxFQUFFLFVBSGhCO0FBSUVDLEVBQUFBLGFBQWEsRUFBRSxDQUpqQjtBQUtFQyxFQUFBQSxTQUFTLEVBQUUsRUFMYjtBQU1FQyxFQUFBQSxRQUFRLEVBQUU7QUFOWixDQUR1QixFQVN2QjtBQUNFTCxFQUFBQSxPQUFPLEVBQUUsZ0JBRFg7QUFFRUMsRUFBQUEsRUFBRSxFQUFFLHNDQUZOO0FBR0VFLEVBQUFBLGFBQWEsRUFBRSxDQUhqQjtBQUlFRCxFQUFBQSxZQUFZLEVBQUUsVUFKaEI7QUFLRUUsRUFBQUEsU0FBUyxFQUFFLEVBTGI7QUFNRUMsRUFBQUEsUUFBUSxFQUFFO0FBTlosQ0FUdUIsRUFpQnZCO0FBQ0VMLEVBQUFBLE9BQU8sRUFBRSxnQkFEWDtBQUVFQyxFQUFBQSxFQUFFLEVBQUUsc0NBRk47QUFHRUMsRUFBQUEsWUFBWSxFQUFFLE1BSGhCO0FBSUVDLEVBQUFBLGFBQWEsRUFBRSxDQUpqQjtBQUtFQyxFQUFBQSxTQUFTLEVBQUUsRUFMYjtBQU1FQyxFQUFBQSxRQUFRLEVBQUU7QUFOWixDQWpCdUIsRUF5QnZCO0FBQ0VMLEVBQUFBLE9BQU8sRUFBRSxrQkFEWDtBQUVFQyxFQUFBQSxFQUFFLEVBQUUsc0NBRk47QUFHRUMsRUFBQUEsWUFBWSxFQUFFLE1BSGhCO0FBSUVDLEVBQUFBLGFBQWEsRUFBRSxDQUpqQjtBQUtFQyxFQUFBQSxTQUFTLEVBQUUsRUFMYjtBQU1FQyxFQUFBQSxRQUFRLEVBQUU7QUFOWixDQXpCdUIsRUFpQ3ZCO0FBQ0VMLEVBQUFBLE9BQU8sRUFBRSxrQkFEWDtBQUVFQyxFQUFBQSxFQUFFLEVBQUUsc0NBRk47QUFHRUMsRUFBQUEsWUFBWSxFQUFFLE1BSGhCO0FBSUVDLEVBQUFBLGFBQWEsRUFBRSxDQUpqQjtBQUtFQyxFQUFBQSxTQUFTLEVBQUUsRUFMYjtBQU1FQyxFQUFBQSxRQUFRLEVBQUU7QUFOWixDQWpDdUIsRUF5Q3ZCO0FBQ0VMLEVBQUFBLE9BQU8sRUFBRSxtQkFEWDtBQUVFQyxFQUFBQSxFQUFFLEVBQUUsc0NBRk47QUFHRUMsRUFBQUEsWUFBWSxFQUFFLFVBSGhCO0FBSUVDLEVBQUFBLGFBQWEsRUFBRSxDQUpqQjtBQUtFQyxFQUFBQSxTQUFTLEVBQUUsRUFMYjtBQU1FQyxFQUFBQSxRQUFRLEVBQUU7QUFOWixDQXpDdUIsRUFpRHZCO0FBQ0VMLEVBQUFBLE9BQU8sRUFBRSxjQURYO0FBRUVDLEVBQUFBLEVBQUUsRUFBRSxzQ0FGTjtBQUdFQyxFQUFBQSxZQUFZLEVBQUUsVUFIaEI7QUFJRUMsRUFBQUEsYUFBYSxFQUFFLENBSmpCO0FBS0VDLEVBQUFBLFNBQVMsRUFBRSxFQUxiO0FBTUVDLEVBQUFBLFFBQVEsRUFBRTtBQU5aLENBakR1QixFQXlEdkI7QUFDRUwsRUFBQUEsT0FBTyxFQUFFLGdCQURYO0FBRUVDLEVBQUFBLEVBQUUsRUFBRSxzQ0FGTjtBQUdFQyxFQUFBQSxZQUFZLEVBQUUsZUFIaEI7QUFJRUMsRUFBQUEsYUFBYSxFQUFFLEVBSmpCO0FBS0VDLEVBQUFBLFNBQVMsRUFBRSxHQUxiO0FBTUVDLEVBQUFBLFFBQVEsRUFBRTtBQU5aLENBekR1QixFQWlFdkI7QUFDRUwsRUFBQUEsT0FBTyxFQUFFLG1CQURYO0FBRUVDLEVBQUFBLEVBQUUsRUFBRSxzQ0FGTjtBQUdFQyxFQUFBQSxZQUFZLEVBQUUsVUFIaEI7QUFJRUMsRUFBQUEsYUFBYSxFQUFFLENBSmpCO0FBS0VDLEVBQUFBLFNBQVMsRUFBRSxHQUxiO0FBTUVDLEVBQUFBLFFBQVEsRUFBRTtBQU5aLENBakV1QixDQUF6QjtBQTJFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0UsZUFBZUMsZUFBZixDQUErQjtBQUFFTixFQUFBQSxPQUFGO0FBQVdFLEVBQUFBO0FBQVgsQ0FBL0IsRUFBMEQ7QUFDeEQsUUFBTWIsSUFBSSxDQUFDSyxhQUFhLENBQUMsR0FBRCxDQUFkLENBQVY7O0FBRUEsTUFBSSxPQUFPTSxPQUFQLEtBQW1CLFFBQW5CLElBQStCQSxPQUFPLENBQUNPLElBQVIsT0FBbUIsRUFBdEQsRUFBMEQ7QUFDeEQsVUFBTSxJQUFJQyxLQUFKLENBQVUsNEJBQVYsQ0FBTjtBQUNEOztBQUVELE1BQUlaLElBQUksQ0FBQ0UsTUFBTCxLQUFnQixJQUFwQixFQUEwQjtBQUN4QixVQUFNLElBQUlVLEtBQUosQ0FBVSw4QkFBVixDQUFOO0FBQ0Q7O0FBRUQsTUFBSUMsd0JBQXdCLEdBQUdWLGdCQUEvQjs7QUFFQSxNQUFJRyxZQUFZLEtBQUtRLFNBQXJCLEVBQWdDO0FBQzlCRCxJQUFBQSx3QkFBd0IsR0FBR0Esd0JBQXdCLENBQUNFLE1BQXpCLENBQ3hCQyxRQUFELElBQWNBLFFBQVEsQ0FBQ1YsWUFBVCxLQUEwQkEsWUFEZixDQUEzQjtBQUdEOztBQUVELFFBQU1XLDJCQUEyQixHQUFHSix3QkFBd0IsQ0FBQ0UsTUFBekIsQ0FBaUNDLFFBQUQsSUFDbEVBLFFBQVEsQ0FBQ1osT0FBVCxDQUFpQmMsV0FBakIsR0FBK0JDLFFBQS9CLENBQXdDZixPQUFPLENBQUNjLFdBQVIsRUFBeEMsQ0FEa0MsQ0FBcEM7QUFJQSxTQUFPO0FBQ0xFLElBQUFBLFVBQVUsRUFBRUgsMkJBQTJCLENBQUNJLEdBQTVCLENBQWdDLENBQUM7QUFBRWhCLE1BQUFBLEVBQUY7QUFBTUQsTUFBQUEsT0FBTjtBQUFlSyxNQUFBQSxRQUFmO0FBQXlCSCxNQUFBQTtBQUF6QixLQUFELE1BQThDO0FBQ3hGRCxNQUFBQSxFQUR3RjtBQUV4RkQsTUFBQUEsT0FGd0Y7QUFHeEZLLE1BQUFBLFFBSHdGO0FBSXhGSCxNQUFBQTtBQUp3RixLQUE5QyxDQUFoQztBQURQLEdBQVA7QUFRRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFLGVBQWVnQixvQkFBZixDQUFvQ0MsVUFBcEMsRUFBZ0Q7QUFDOUMsTUFBSXZCLElBQUksQ0FBQ0UsTUFBTCxLQUFnQixJQUFwQixFQUEwQjtBQUN4QixVQUFNLElBQUlVLEtBQUosQ0FBVSw4QkFBVixDQUFOO0FBQ0Q7O0FBRUQsUUFBTW5CLElBQUksQ0FBQ0ssYUFBYSxDQUFDLEdBQUQsQ0FBZCxDQUFWO0FBQ0EsUUFBTTBCLGdCQUFnQixHQUFHckIsZ0JBQWdCLENBQUNzQixJQUFqQixDQUF1QlQsUUFBRCxJQUFjQSxRQUFRLENBQUNYLEVBQVQsS0FBZ0JrQixVQUFwRCxDQUF6QjtBQUVBLFNBQU87QUFBRVAsSUFBQUEsUUFBUSxFQUFFUTtBQUFaLEdBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsZUFBZUUseUJBQWYsR0FBMkM7QUFDekMsUUFBTWpDLElBQUksQ0FBQ0ssYUFBYSxDQUFDLEdBQUQsQ0FBZCxDQUFWO0FBRUEsU0FBTztBQUNMNkIsSUFBQUEsYUFBYSxFQUFFLENBQ2I7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLGVBQVQ7QUFBMEJDLE1BQUFBLEtBQUssRUFBRTtBQUFqQyxLQURhLEVBRWI7QUFBRUQsTUFBQUEsS0FBSyxFQUFFLGdCQUFUO0FBQTJCQyxNQUFBQSxLQUFLLEVBQUU7QUFBbEMsS0FGYSxFQUdiO0FBQUVELE1BQUFBLEtBQUssRUFBRSxnQkFBVDtBQUEyQkMsTUFBQUEsS0FBSyxFQUFFO0FBQWxDLEtBSGEsRUFJYjtBQUFFRCxNQUFBQSxLQUFLLEVBQUUsTUFBVDtBQUFpQkMsTUFBQUEsS0FBSyxFQUFFO0FBQXhCLEtBSmE7QUFEVixHQUFQO0FBUUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdk1ZLFNBQVNDLG1CQUFULENBQTZCQyxLQUE3QixFQUFvQztBQUMvQyxzQkFDQTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBLDRCQUNBO0FBQUksZUFBUyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUVFO0FBQUksZUFBUyxFQUFDLG1DQUFkO0FBQUEsOEJBQ0E7QUFBQSxnQ0FBSTtBQUFRLG1CQUFTLEVBQUVBLEtBQUssQ0FBQ3pCLFlBQU4sS0FBdUIsS0FBdkIsR0FBK0IsTUFBL0IsR0FBd0MsSUFBM0Q7QUFBaUUsaUJBQU8sRUFBRSxNQUFNO0FBQUN5QixZQUFBQSxLQUFLLENBQUNDLGVBQU4sQ0FBc0IsS0FBdEI7QUFBOEJELFlBQUFBLEtBQUssQ0FBQ0UsWUFBTixDQUFtQkYsS0FBSyxDQUFDRyxXQUF6QjtBQUFzQyxXQUFySjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxFQUVLSCxLQUFLLENBQUNKLGFBQU4sQ0FBb0JOLEdBQXBCLENBQXlCYyxJQUFELElBQVU7QUFDL0IsNEJBQU87QUFBQSxrQ0FBcUI7QUFBUSxxQkFBUyxFQUFFQSxJQUFJLENBQUNOLEtBQUwsS0FBZUUsS0FBSyxDQUFDekIsWUFBckIsR0FBb0MsTUFBcEMsR0FBNkMsSUFBaEU7QUFBc0UsbUJBQU8sRUFBRSxNQUFNO0FBQUN5QixjQUFBQSxLQUFLLENBQUNDLGVBQU4sQ0FBc0JHLElBQUksQ0FBQ04sS0FBM0I7QUFBbUNFLGNBQUFBLEtBQUssQ0FBQ0UsWUFBTixDQUFtQkYsS0FBSyxDQUFDRyxXQUF6QixFQUFzQ0MsSUFBSSxDQUFDTixLQUEzQztBQUFrRCxhQUEzSztBQUFBLHNCQUE4S00sSUFBSSxDQUFDUDtBQUFuTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFyQjtBQUFBLFdBQVNPLElBQUksQ0FBQ04sS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFQO0FBQ0gsT0FGQSxDQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURBO0FBV0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaRDs7QUFFZSxTQUFTUSxxQkFBVCxDQUErQk4sS0FBL0IsRUFBc0M7QUFHakQsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsMEJBQWY7QUFBQSwyQkFDQTtBQUFNLGVBQVMsRUFBQyxNQUFoQjtBQUF1QixjQUFRLEVBQUdPLEtBQUQsSUFBVztBQUFDQSxRQUFBQSxLQUFLLENBQUNDLGNBQU47QUFBd0JSLFFBQUFBLEtBQUssQ0FBQ0UsWUFBTixDQUFtQkYsS0FBSyxDQUFDRyxXQUF6QixFQUFzQ0gsS0FBSyxDQUFDekIsWUFBNUM7QUFBMEQsT0FBL0g7QUFBaUksWUFBTSxFQUFDLEVBQXhJO0FBQUEsOEJBQ0E7QUFBTyxpQkFBUyxFQUFDLFNBQWpCO0FBQTJCLGVBQU8sRUFBQyxRQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBRUE7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQSxnQ0FDQTtBQUFPLG1CQUFTLEVBQUMsT0FBakI7QUFBeUIscUJBQVcsRUFBQyxTQUFyQztBQUErQyxlQUFLLEVBQUV5QixLQUFLLENBQUNHLFdBQTVEO0FBQXlFLGtCQUFRLEVBQUdJLEtBQUQsSUFBV1AsS0FBSyxDQUFDUyxpQkFBTixDQUF3QkYsS0FBeEIsQ0FBOUY7QUFBOEgsWUFBRSxFQUFDLFFBQWpJO0FBQTBJLGNBQUksRUFBQztBQUEvSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLGVBRUE7QUFBUSxtQkFBUyxFQUFDLFlBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVlIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJjLFNBQVNHLGFBQVQsQ0FBdUI7QUFBQ3JCLEVBQUFBLFVBQUQ7QUFBYXNCLEVBQUFBO0FBQWIsQ0FBdkIsRUFBcUQ7QUFDaEUsTUFBSXRCLFVBQVUsQ0FBQ3VCLE1BQVgsR0FBb0IsQ0FBeEIsRUFBMkI7QUFDM0Isd0JBQ0k7QUFBQSw4QkFDQztBQUFJLGlCQUFTLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBRUE7QUFBSyxpQkFBUyxFQUFDLHNCQUFmO0FBQUEsK0JBRUE7QUFBQSxpQ0FDSTtBQUFBLG9DQUNJO0FBQUEsc0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkosZUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFMSixlQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixFQVNLdkIsVUFBVSxDQUFDQyxHQUFYLENBQWdCTCxRQUFELElBQWM7QUFDMUIsa0NBQ0E7QUFBQSx3Q0FFSTtBQUFBLHlDQUFJO0FBQU8sNEJBQVEsRUFBR3NCLEtBQUQsSUFBV0ksY0FBYyxDQUFDMUIsUUFBRCxFQUFXc0IsS0FBSyxDQUFDTSxNQUFOLENBQWFDLE9BQXhCLENBQTFDO0FBQTRFLHdCQUFJLEVBQUM7QUFBakY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBRkosZUFHSTtBQUFBLDRCQUFLN0IsUUFBUSxDQUFDWjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSEosZUFJSTtBQUFBLDRCQUFLWSxRQUFRLENBQUNQO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFKSixlQUtJO0FBQUEsNEJBQUtPLFFBQVEsQ0FBQ1Y7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUxKLGVBTUk7QUFBQSw0QkFBS1UsUUFBUSxDQUFDVDtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBTkosZUFPSTtBQUFBLDRCQUFLUyxRQUFRLENBQUNSO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFQSjtBQUFBLGlCQUFTUSxRQUFRLENBQUNYLEVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREE7QUFXSCxhQVpBLENBVEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQTtBQUFBLG9CQURKO0FBZ0NHLEdBakNILE1BaUNTLElBQUllLFVBQVUsS0FBSyxJQUFuQixFQUF5QjtBQUM5Qix3QkFDSTtBQUFBLDhCQUNBO0FBQUksaUJBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZBO0FBQUEsb0JBREo7QUFNSCxHQVBRLE1BT0Y7QUFDSCx3QkFDSTtBQUFBLDhCQUNBO0FBQUksaUJBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZBO0FBQUEsb0JBREo7QUFNSDtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRGMsU0FBU3FCLGFBQVQsQ0FBdUI7QUFBQ0ssRUFBQUE7QUFBRCxDQUF2QixFQUE2QztBQUN4RCxNQUFJQSxrQkFBa0IsQ0FBQ0gsTUFBbkIsR0FBNEIsQ0FBaEMsRUFBbUM7QUFDL0Isd0JBQ0k7QUFBSyxXQUFLLEVBQUU7QUFBQ0ksUUFBQUEsVUFBVSxFQUFFO0FBQWIsT0FBWjtBQUFBLDhCQUNBO0FBQUksaUJBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFFQTtBQUFLLGlCQUFTLEVBQUMsc0JBQWY7QUFBQSwrQkFFQTtBQUFBLGlDQUNJO0FBQUEsb0NBQ0k7QUFBQSxzQ0FFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSixlQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhKLGVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkosZUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosRUFRS0Qsa0JBQWtCLENBQUN6QixHQUFuQixDQUF3QkwsUUFBRCxJQUFjO0FBQ2xDLGtDQUNBO0FBQUEsd0NBQ0k7QUFBQSw0QkFBS0EsUUFBUSxDQUFDWjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosZUFFSTtBQUFBLDRCQUFLWSxRQUFRLENBQUNQO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGSixlQUdJO0FBQUEsNEJBQUtPLFFBQVEsQ0FBQ1Q7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUhKLGVBSUk7QUFBQSw0QkFBS1MsUUFBUSxDQUFDUjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSko7QUFBQSxpQkFBU1EsUUFBUSxDQUFDWCxFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURBO0FBUUgsYUFUQSxDQVJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUE2QkgsR0E5QkQsTUE4Qk87QUFDSCx3QkFDSTtBQUFLLFdBQUssRUFBRTtBQUFDMEMsUUFBQUEsVUFBVSxFQUFFO0FBQWIsT0FBWjtBQUFBLDhCQUNDO0FBQUksaUJBQVMsRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBTUg7QUFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHZSxTQUFTSSxNQUFULEdBQWtCO0FBQzdCLFFBQU07QUFBQSxPQUFDakIsV0FBRDtBQUFBLE9BQWNrQjtBQUFkLE1BQWdDaEIsK0NBQVEsQ0FBQyxFQUFELENBQTlDO0FBQ0EsUUFBTTtBQUFBLE9BQUM5QixZQUFEO0FBQUEsT0FBZTBCO0FBQWYsTUFBa0NJLCtDQUFRLENBQUMsS0FBRCxDQUFoRDtBQUNBLFFBQU07QUFBQSxPQUFDaEIsVUFBRDtBQUFBLE9BQWFpQztBQUFiLE1BQThCakIsK0NBQVEsQ0FBQyxJQUFELENBQTVDO0FBQ0EsUUFBTTtBQUFBLE9BQUNULGFBQUQ7QUFBQSxPQUFnQjJCO0FBQWhCLE1BQW9DbEIsK0NBQVEsQ0FBQyxFQUFELENBQWxEO0FBQ0EsUUFBTTtBQUFBLE9BQUNVLGtCQUFEO0FBQUEsT0FBcUJTO0FBQXJCLE1BQThDbkIsK0NBQVEsQ0FBQyxFQUFELENBQTVEO0FBQ0EsUUFBTTtBQUFBLE9BQUNvQixLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQnJCLCtDQUFRLENBQUMsS0FBRCxDQUFsQztBQUVBYyxFQUFBQSxnREFBUyxDQUFDLFlBQVk7QUFDbEIsVUFBTVEsTUFBTSxHQUFHLE1BQU1oQyxrRUFBeUIsRUFBOUM7QUFDQTRCLElBQUFBLGdCQUFnQixDQUFDSSxNQUFNLENBQUMvQixhQUFSLENBQWhCO0FBQ0gsR0FIUSxDQUFUOztBQUtBLFdBQVNhLGlCQUFULENBQTJCRixLQUEzQixFQUFrQztBQUM5QmMsSUFBQUEsY0FBYyxDQUFDZCxLQUFLLENBQUNNLE1BQU4sQ0FBYWYsS0FBZCxDQUFkO0FBQ0g7O0FBRUQsV0FBU2EsY0FBVCxDQUF3QjFCLFFBQXhCLEVBQWtDNkIsT0FBbEMsRUFBMkM7QUFDdkMsUUFBSUEsT0FBSixFQUFhO0FBQ1RVLE1BQUFBLHFCQUFxQixDQUFDLENBQUMsR0FBR1Qsa0JBQUosRUFBd0I5QixRQUF4QixDQUFELENBQXJCO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsWUFBTTJDLFlBQVksR0FBR2Isa0JBQWtCLENBQUMvQixNQUFuQixDQUEyQm9CLElBQUQsSUFBVUEsSUFBSSxLQUFLbkIsUUFBN0MsQ0FBckI7QUFDQXVDLE1BQUFBLHFCQUFxQixDQUFDSSxZQUFELENBQXJCO0FBQ0g7QUFDSjs7QUFFRCxpQkFBZTFCLFlBQWYsQ0FBNEI3QixPQUE1QixFQUFxQ0UsWUFBckMsRUFBbUQ7QUFDaEQsUUFBSTtBQUNBbUQsTUFBQUEsUUFBUSxDQUFDLEtBQUQsQ0FBUjtBQUNILFVBQUlHLFFBQUo7O0FBQ0EsVUFBSXRELFlBQVksS0FBSyxLQUFyQixFQUE0QjtBQUN2QnNELFFBQUFBLFFBQVEsR0FBRyxNQUFNbEQsd0RBQWUsQ0FBQztBQUFDTixVQUFBQSxPQUFPLEVBQUVBO0FBQVYsU0FBRCxDQUFoQztBQUNKLE9BRkQsTUFFTztBQUNGd0QsUUFBQUEsUUFBUSxHQUFHLE1BQU1sRCx3REFBZSxDQUFDO0FBQUNOLFVBQUFBLE9BQU8sRUFBRUEsT0FBVjtBQUFtQkUsVUFBQUEsWUFBWSxFQUFDQTtBQUFoQyxTQUFELENBQWhDO0FBQ0o7O0FBQ0QsWUFBTXVELGFBQWEsR0FBR0QsUUFBUSxDQUFDeEMsVUFBVCxDQUFvQkMsR0FBcEIsQ0FBd0JMLFFBQVEsSUFBSU0sNkRBQW9CLENBQUNOLFFBQVEsQ0FBQ1gsRUFBVixDQUF4RCxDQUF0QjtBQUNBVixNQUFBQSxPQUFPLENBQUNtRSxHQUFSLENBQVlELGFBQVosRUFDQ0UsSUFERCxDQUNNQyxNQUFNLElBQUlBLE1BQU0sQ0FBQzNDLEdBQVAsQ0FBV2MsSUFBSSxJQUFJO0FBQUMsZUFBT0EsSUFBSSxDQUFDbkIsUUFBWjtBQUFxQixPQUF6QyxDQURoQixFQUVDK0MsSUFGRCxDQUVNRSxLQUFLLElBQUlBLEtBQUssQ0FBQzVDLEdBQU4sQ0FBVWMsSUFBSSxJQUFJO0FBQUVBLFFBQUFBLElBQUksQ0FBQ1UsT0FBTCxHQUFlLEtBQWY7QUFBc0IsZUFBT1YsSUFBUDtBQUFhLE9BQXZELENBRmYsRUFHQzRCLElBSEQsQ0FHTUcsYUFBYSxJQUFJYixhQUFhLENBQUNhLGFBQUQsQ0FIcEM7QUFLQSxLQWRELENBY0UsT0FBTVYsS0FBTixFQUFhO0FBQ2RDLE1BQUFBLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDVyxPQUFQLENBQVI7QUFDQTtBQUdIOztBQUVELHNCQUNJO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQSw0QkFDQTtBQUFRLGVBQVMsRUFBQyxZQUFsQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxpQkFBZjtBQUFBLGdDQUNBO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQTJCLGVBQUssRUFBQyxLQUFqQztBQUF1QyxhQUFHLEVBQUMsZ0JBQTNDO0FBQTRELGFBQUcsRUFBQztBQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURBLGVBRUU7QUFBSSxtQkFBUyxFQUFDLGlCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQVFBO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSw4QkFDQSw4REFBQywyREFBRDtBQUFZLHlCQUFpQixFQUFFM0IsaUJBQS9CO0FBQWtELG1CQUFXLEVBQUVOLFdBQS9EO0FBQTRFLG9CQUFZLEVBQUVELFlBQTFGO0FBQXdHLG9CQUFZLEVBQUUzQjtBQUF0SDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsRUFHQ2tELEtBQUssaUJBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIVixlQUtBLDhEQUFDLG1FQUFEO0FBQW9CLDBCQUFrQixFQUFFVjtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEEsZUFPQTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSxrQkFFQzFCLFVBQVUsZ0JBQUcsOERBQUMsOERBQUQ7QUFBZSx3QkFBYyxFQUFFc0IsY0FBL0I7QUFBK0Msb0JBQVUsRUFBRXRCO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQUgsZ0JBQStFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRjFGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQQSxlQVlBLDhEQUFDLG9FQUFEO0FBQXFCLG1CQUFXLEVBQUVjLFdBQWxDO0FBQStDLG9CQUFZLEVBQUVELFlBQTdEO0FBQTJFLG9CQUFZLEVBQUUzQixZQUF6RjtBQUF1Ryx1QkFBZSxFQUFFMEIsZUFBeEg7QUFBeUkscUJBQWEsRUFBRUw7QUFBeEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMEJIOzs7Ozs7Ozs7O0FDbEZEOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1vLXRhc2svLi9hcGkuanMiLCJ3ZWJwYWNrOi8vaW1tby10YXNrLy4vY29tcG9uZW50cy9Qcm9wZXJ0eVR5cGVzRmlsdGVyLmpzIiwid2VicGFjazovL2ltbW8tdGFzay8uL2NvbXBvbmVudHMvU2VhcmNoRm9ybS5qcyIsIndlYnBhY2s6Ly9pbW1vLXRhc2svLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMuanMiLCJ3ZWJwYWNrOi8vaW1tby10YXNrLy4vY29tcG9uZW50cy9TZWxlY3RlZFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vaW1tby10YXNrLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW1tby10YXNrL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9pbW1vLXRhc2svZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVXNlIHRoZSBmdW5jdGlvbnMgZXhwb3J0ZWQgZnJvbSB0aGlzIG1vZHVsZSBhcyB5b3VyIFwiQVBJXCIgZnJvbSB3aGljaCB5b3VcclxuICogcmV0cmlldmUgdGhlIGRhdGEgdG8gZGlzcGxheSBvbiB0aGUgcGFnZS4gRG8gbm90IG1vZGlmeSB0aGlzIGZpbGUuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFNsZWVwIGZvciBhIGdpdmVuIG51bWJlciBvZiBtaWxsaXNlY29uZHMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheUluTWlsbGlzZWNvbmRzXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxyXG4gKi9cclxuIGZ1bmN0aW9uIHdhaXQoZGVsYXlJbk1pbGxpc2Vjb25kcykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIGRlbGF5SW5NaWxsaXNlY29uZHMpKTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogR2VuZXJhdGUgYSBwc2V1ZG8tcmFuZG9tIGludGVnZXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gbWF4XHJcbiAgICogQHJldHVybnMge251bWJlcn1cclxuICAgKi9cclxuICBmdW5jdGlvbiByYW5kb21JbnRlZ2VyKG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IHNhbXBsZVByb3BlcnRpZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGFkZHJlc3M6ICdGb3JzbWFubnN0cmHDn2UgNScsXHJcbiAgICAgIGlkOiAnMWYyZGE0ZWYtYzFiNy00YjRlLWIxNzItNTlmMTk5ODdlMGJlJyxcclxuICAgICAgcHJvcGVydHlUeXBlOiAnZGV0YWNoZWQnLFxyXG4gICAgICBudW1iZXJPZlJvb21zOiA1LFxyXG4gICAgICBmbG9vckFyZWE6IDI2LFxyXG4gICAgICBwb3N0Y29kZTogJzI4NTM1JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGFkZHJlc3M6ICdTdGVpbnN0cmHDn2UgMTInLFxyXG4gICAgICBpZDogJzEyNzM3YzVmLTJkMDEtNGM0My1hMGU3LWY2Zjg3NjA4YTZiMicsXHJcbiAgICAgIG51bWJlck9mUm9vbXM6IDIsXHJcbiAgICAgIHByb3BlcnR5VHlwZTogJ3RlcnJhY2VkJyxcclxuICAgICAgZmxvb3JBcmVhOiAyMyxcclxuICAgICAgcG9zdGNvZGU6ICcyMTU3MycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBhZGRyZXNzOiAnSGltbWVsc3RyYcOfZSAyJyxcclxuICAgICAgaWQ6ICc0ZTU3OWUwNy01OWFjLTQ1MWYtYTg0My02MGFkNGFiYTE2YzQnLFxyXG4gICAgICBwcm9wZXJ0eVR5cGU6ICdmbGF0JyxcclxuICAgICAgbnVtYmVyT2ZSb29tczogOCxcclxuICAgICAgZmxvb3JBcmVhOiA1NSxcclxuICAgICAgcG9zdGNvZGU6ICcyMzg5NycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBhZGRyZXNzOiAnU8O8bnRlbHN0cmHDn2UgMTFBJyxcclxuICAgICAgaWQ6ICcwMTU3ZjdjYi1lY2ZjLTQ2YWEtYTg5ZS1mYjE2ZDcyZTFlNWInLFxyXG4gICAgICBwcm9wZXJ0eVR5cGU6ICdmbGF0JyxcclxuICAgICAgbnVtYmVyT2ZSb29tczogMSxcclxuICAgICAgZmxvb3JBcmVhOiA5NCxcclxuICAgICAgcG9zdGNvZGU6ICcyNDg0OScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBhZGRyZXNzOiAnQWx0ZSBTY2hsZXVzZSAyMycsXHJcbiAgICAgIGlkOiAnZWMyNTA1Y2EtYzA5Yi00YzQ5LTkzMjItMGY1Nzg3NGYxNWM5JyxcclxuICAgICAgcHJvcGVydHlUeXBlOiAnZmxhdCcsXHJcbiAgICAgIG51bWJlck9mUm9vbXM6IDMsXHJcbiAgICAgIGZsb29yQXJlYTogNDgsXHJcbiAgICAgIHBvc3Rjb2RlOiAnMjUyNTcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYWRkcmVzczogJ1N0ZWxsaW5nZXIgV2VnIDQ1JyxcclxuICAgICAgaWQ6ICc4NTI2MmIyZS1jZTJiLTRjMjEtYmVmZC1iNDBjOWMyYjU4OTEnLFxyXG4gICAgICBwcm9wZXJ0eVR5cGU6ICdkZXRhY2hlZCcsXHJcbiAgICAgIG51bWJlck9mUm9vbXM6IDMsXHJcbiAgICAgIGZsb29yQXJlYTogMjgsXHJcbiAgICAgIHBvc3Rjb2RlOiAnMjA3NzUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYWRkcmVzczogJ05hZ2Vsc3dlZyAyMicsXHJcbiAgICAgIGlkOiAnMGQwZTM0MzYtMTg4Ni00ZTRkLTlmZGUtYTMzMzc4ZWQxNzU4JyxcclxuICAgICAgcHJvcGVydHlUeXBlOiAnZGV0YWNoZWQnLFxyXG4gICAgICBudW1iZXJPZlJvb21zOiA2LFxyXG4gICAgICBmbG9vckFyZWE6IDI3LFxyXG4gICAgICBwb3N0Y29kZTogJzIwMDU5JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGFkZHJlc3M6ICdaaW1tZXJwZm9ydGUgMycsXHJcbiAgICAgIGlkOiAnNjU2YTA3NDgtY2QxNy00OTU3LTliMzAtZmZjYzgwZWM4ZmU4JyxcclxuICAgICAgcHJvcGVydHlUeXBlOiAnc2VtaS1kZXRhY2hlZCcsXHJcbiAgICAgIG51bWJlck9mUm9vbXM6IDEwLFxyXG4gICAgICBmbG9vckFyZWE6IDExNSxcclxuICAgICAgcG9zdGNvZGU6ICcyNzMzMScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBhZGRyZXNzOiAnSGFtYnVyZ2VyIEJlcmcgMTknLFxyXG4gICAgICBpZDogJ2YzYjMxYjcyLTU0OWEtNDFkZS1hM2ZiLThjMzczMjMzZDViNycsXHJcbiAgICAgIHByb3BlcnR5VHlwZTogJ3RlcnJhY2VkJyxcclxuICAgICAgbnVtYmVyT2ZSb29tczogOSxcclxuICAgICAgZmxvb3JBcmVhOiAxMTUsXHJcbiAgICAgIHBvc3Rjb2RlOiAnMjk1NTEnLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEB0eXBlZGVmIHtPYmplY3R9IFByb3BlcnRpZXNMaXN0RW50cnlcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gaWQgLSBVbmlxdWUgaWRlbnRpZmllclxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBhZGRyZXNzIC0gU3RyZWV0IGFkZHJlc3NcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gcG9zdGNvZGUgLSBQb3N0Y29kZVxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBwcm9wZXJ0eVR5cGUgLSBQcm9wZXJ0eSB0eXBlXHJcbiAgICovXHJcbiAgXHJcbiAgLyoqXHJcbiAgICogUmV0cmlldmUgYSBsaXN0IG9mIHByb3BlcnRpZXMsIG9wdGlvbmFsbHkgZmlsdGVyZWQgYnkgcHJvcGVydHktdHlwZS4gU2luY2VcclxuICAgKiB0aGlzIGZ1bmN0aW9uIHNpbXVsYXRlcyBhbiBBUEksIGl0IHdpbGwgdGFrZSB1cCB0byA1MDBtcyB0byBjb21wbGV0ZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuYWRkcmVzc1xyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5wcm9wZXJ0eVR5cGVdXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8eyBwcm9wZXJ0aWVzOiBQcm9wZXJ0aWVzTGlzdEVudHJ5W10gfT59XHJcbiAgICovXHJcbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hQcm9wZXJ0aWVzKHsgYWRkcmVzcywgcHJvcGVydHlUeXBlIH0pIHtcclxuICAgIGF3YWl0IHdhaXQocmFuZG9tSW50ZWdlcig1MDApKTtcclxuICBcclxuICAgIGlmICh0eXBlb2YgYWRkcmVzcyAhPT0gJ3N0cmluZycgfHwgYWRkcmVzcy50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignYGFkZHJlc3NgIG11c3QgYmUgcHJvdmlkZWQnKTtcclxuICAgIH1cclxuICBcclxuICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC45OCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQnKTtcclxuICAgIH1cclxuICBcclxuICAgIGxldCBwcm9wZXJ0aWVzRmlsdGVyZWRCeVR5cGUgPSBzYW1wbGVQcm9wZXJ0aWVzO1xyXG4gIFxyXG4gICAgaWYgKHByb3BlcnR5VHlwZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHByb3BlcnRpZXNGaWx0ZXJlZEJ5VHlwZSA9IHByb3BlcnRpZXNGaWx0ZXJlZEJ5VHlwZS5maWx0ZXIoXHJcbiAgICAgICAgKHByb3BlcnR5KSA9PiBwcm9wZXJ0eS5wcm9wZXJ0eVR5cGUgPT09IHByb3BlcnR5VHlwZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgcHJvcGVydGllc0ZpbHRlcmVkQnlBZGRyZXNzID0gcHJvcGVydGllc0ZpbHRlcmVkQnlUeXBlLmZpbHRlcigocHJvcGVydHkpID0+XHJcbiAgICAgIHByb3BlcnR5LmFkZHJlc3MudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhhZGRyZXNzLnRvTG93ZXJDYXNlKCkpXHJcbiAgICApO1xyXG4gIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcGVydGllczogcHJvcGVydGllc0ZpbHRlcmVkQnlBZGRyZXNzLm1hcCgoeyBpZCwgYWRkcmVzcywgcG9zdGNvZGUsIHByb3BlcnR5VHlwZSB9KSA9PiAoe1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIGFkZHJlc3MsXHJcbiAgICAgICAgcG9zdGNvZGUsXHJcbiAgICAgICAgcHJvcGVydHlUeXBlLFxyXG4gICAgICB9KSksXHJcbiAgICB9O1xyXG4gIH1cclxuICBcclxuICAvKipcclxuICAgKiBAdHlwZWRlZiB7b2JqZWN0fSBQcm9wZXJ0eURldGFpbHNcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gaWQgLSBVbmlxdWUgaWRlbnRpZmllclxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBhZGRyZXNzIC0gU3RyZWV0IGFkZHJlc3NcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ30gcG9zdGNvZGUgLSBQb3N0Y29kZVxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBwcm9wZXJ0eVR5cGUgLSBQcm9wZXJ0eSB0eXBlXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IG51bWJlck9mUm9vbXMgLSBOdW1iZXIgb2Ygcm9vbXMgaW4gdGhlIHByb3BlcnR5XHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IGZsb29yQXJlYSAtIEZsb29yIGFyZWEgaW4gc3F1YXJlIG1ldGVyc1xyXG4gICAqL1xyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFJldHJpZXZlIGRldGFpbHMgZm9yIGEgc3BlY2lmaWMgcHJvcGVydHkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHlJZFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHsgcHJvcGVydHk6IFByb3BlcnR5RGV0YWlscyB9Pn1cclxuICAgKi9cclxuICBhc3luYyBmdW5jdGlvbiBmZXRjaFByb3BlcnR5RGV0YWlscyhwcm9wZXJ0eUlkKSB7XHJcbiAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuOTkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBhd2FpdCB3YWl0KHJhbmRvbUludGVnZXIoNTAwKSk7XHJcbiAgICBjb25zdCBwcm9wZXJ0eVRvUmV0dXJuID0gc2FtcGxlUHJvcGVydGllcy5maW5kKChwcm9wZXJ0eSkgPT4gcHJvcGVydHkuaWQgPT09IHByb3BlcnR5SWQpO1xyXG4gIFxyXG4gICAgcmV0dXJuIHsgcHJvcGVydHk6IHByb3BlcnR5VG9SZXR1cm4gfTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQHR5cGVkZWYge29iamVjdH0gUHJvcGVydHlUeXBlXHJcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGxhYmVsIC0gVGhlIHRleHQgdG8gZGlzcGxheVxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSBlbnVtIHZhbHVlIGFzc2lnbmVkXHJcbiAgICovXHJcbiAgXHJcbiAgLyoqXHJcbiAgICogUmV0cmlldmUgYSBsaXN0IG9mIGFsbCBhdmFpbGFibGUgcHJvcGVydHkgdHlwZXMuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7IHByb3BlcnR5VHlwZXM6IFByb3BlcnR5VHlwZVtdIH0+fVxyXG4gICAqL1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEF2YWlsYWJsZVByb3BlcnR5VHlwZXMoKSB7XHJcbiAgICBhd2FpdCB3YWl0KHJhbmRvbUludGVnZXIoNTAwKSk7XHJcbiAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wZXJ0eVR5cGVzOiBbXHJcbiAgICAgICAgeyBsYWJlbDogJ1NlbWktZGV0YWNoZWQnLCB2YWx1ZTogJ3NlbWktZGV0YWNoZWQnIH0sXHJcbiAgICAgICAgeyBsYWJlbDogJ0RldGFjaGVkIGhvdXNlJywgdmFsdWU6ICdkZXRhY2hlZCcgfSxcclxuICAgICAgICB7IGxhYmVsOiAnVGVycmFjZWQgaG91c2UnLCB2YWx1ZTogJ3RlcnJhY2VkJyB9LFxyXG4gICAgICAgIHsgbGFiZWw6ICdGbGF0JywgdmFsdWU6ICdmbGF0JyB9LFxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxuICBcclxuICBleHBvcnQge1xyXG4gICAgZmV0Y2hQcm9wZXJ0aWVzLCBmZXRjaFByb3BlcnR5RGV0YWlscywgZ2V0QXZhaWxhYmxlUHJvcGVydHlUeXBlcyxcclxuICB9O1xyXG4gICIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb3BlcnR5VHlwZXNGaWx0ZXIocHJvcHMpIHtcclxuICAgIHJldHVybihcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcGVydHktdHlwZXMgbWIyNFwiPlxyXG4gICAgPGgyIGNsYXNzTmFtZT1cImgyIG1iMjRcIj5Qcm9wZXJ0eSB0eXBlczwvaDI+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJ1bnN0eWxlZC1saXN0IHByb3BlcnR5LXR5cGVzLWxpc3RcIj5cclxuICAgICAgPGxpPjxidXR0b24gY2xhc3NOYW1lPXtwcm9wcy5wcm9wZXJ0eVR5cGUgPT09ICdhbGwnID8gJ2JvbGQnIDogbnVsbH0gb25DbGljaz17KCkgPT4ge3Byb3BzLnNldFByb3BlcnR5VHlwZSgnYWxsJyk7IHByb3BzLnN1Ym1pdFNlYXJjaChwcm9wcy5zZWFyY2hJbnB1dCl9fT5BbGw8L2J1dHRvbj4gPC9saT5cclxuICAgICAgICAgIHtwcm9wcy5wcm9wZXJ0eVR5cGVzLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpdGVtLnZhbHVlfT48YnV0dG9uIGNsYXNzTmFtZT17aXRlbS52YWx1ZSA9PT0gcHJvcHMucHJvcGVydHlUeXBlID8gJ2JvbGQnIDogbnVsbH0gb25DbGljaz17KCkgPT4ge3Byb3BzLnNldFByb3BlcnR5VHlwZShpdGVtLnZhbHVlKTsgcHJvcHMuc3VibWl0U2VhcmNoKHByb3BzLnNlYXJjaElucHV0LCBpdGVtLnZhbHVlKX19PntpdGVtLmxhYmVsfTwvYnV0dG9uPiA8L2xpPlxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaEZvcm1BbmRTZWxlY3RlZChwcm9wcykge1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWZvcm0tYW5kLXNlbGVjdGVkXCI+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibWIyNFwiIG9uU3VibWl0PXsoZXZlbnQpID0+IHtldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBwcm9wcy5zdWJtaXRTZWFyY2gocHJvcHMuc2VhcmNoSW5wdXQsIHByb3BzLnByb3BlcnR5VHlwZSl9fSBhY3Rpb249XCJcIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiaDIgbWIyNFwiIGh0bWxGb3I9XCJzZWFyY2hcIj5TZWFyY2g8L2xhYmVsPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBjb2xnYXAxNlwiPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmbGV4MVwiIHBsYWNlaG9sZGVyPVwiQWRkcmVzc1wiIHZhbHVlPXtwcm9wcy5zZWFyY2hJbnB1dH0gb25DaGFuZ2U9eyhldmVudCkgPT4gcHJvcHMuaGFuZGxlU2VhcmNoSW5wdXQoZXZlbnQpfSBpZD1cInNlYXJjaFwiIHR5cGU9XCJzZWFyY2hcIi8+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tc2VhcmNoXCI+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoUmVzdWx0cyh7cHJvcGVydGllcywgaGFuZGxlQ2hlY2tib3h9KSB7XHJcbiAgICBpZiAocHJvcGVydGllcy5sZW5ndGggPiAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoMiBtYjE2XCI+U2VhcmNoIHJlc3VsdHM8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWIyNCB0YWJsZS1jb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPuKckzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPkFkZHJlc3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Qb3N0Y29kZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlByb3BlcnR5IHR5cGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5OdW1iZXIgb2Ygcm9vbXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5GbG9vciBhcmVhPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgIHsgcHJvcGVydGllcy5tYXAoKHByb3BlcnR5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtwcm9wZXJ0eS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8dGQ+PGlucHV0IGNoZWNrZWQ9e3Byb3BlcnR5LmNoZWNrZWR9IG9uQ2hhbmdlPXsoKSA9PiBzZXRDaGVja2VkKHByb3BlcnR5LmlkKX0gdHlwZT1cImNoZWNrYm94XCIgLz48L3RkPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGVja2JveChwcm9wZXJ0eSwgZXZlbnQudGFyZ2V0LmNoZWNrZWQpfSB0eXBlPVwiY2hlY2tib3hcIiAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcGVydHkuYWRkcmVzc308L3RkPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcGVydHkucG9zdGNvZGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wZXJ0eS5wcm9wZXJ0eVR5cGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wZXJ0eS5udW1iZXJPZlJvb21zfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcGVydHkuZmxvb3JBcmVhfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKSB9IGVsc2UgaWYgKHByb3BlcnRpZXMgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDIgbWIxNlwiPlNlYXJjaCByZXN1bHRzPC9oMj5cclxuICAgICAgICAgICAgPHA+U2VhcmNoIGZvciBhbiBhZGRyZXNzIGluIHRoZSBpbnB1dCBhYm92ZTwvcD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDIgbWIxNlwiPlNlYXJjaCByZXN1bHRzPC9oMj5cclxuICAgICAgICAgICAgPHA+Tm8gcmVzdWx0cyBmb3VuZDwvcD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoUmVzdWx0cyh7c2VsZWN0ZWRQcm9wZXJ0aWVzfSkgeyAgIFxyXG4gICAgaWYgKHNlbGVjdGVkUHJvcGVydGllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2dyaWRDb2x1bW46ICcyIC8gMyd9fT5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImgyIG1iMTZcIj5TZWxlY3RlZCBQcm9wZXJ0aWVzPC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYjI0IHRhYmxlLWNvbnRhaW5lclwiPlxyXG4gICAgXHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BZGRyZXNzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlBvc3Rjb2RlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk51bWJlciBvZiByb29tczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5GbG9vciBhcmVhPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgeyBzZWxlY3RlZFByb3BlcnRpZXMubWFwKChwcm9wZXJ0eSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtwcm9wZXJ0eS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Byb3BlcnR5LmFkZHJlc3N9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcGVydHkucG9zdGNvZGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvcGVydHkubnVtYmVyT2ZSb29tc308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwcm9wZXJ0eS5mbG9vckFyZWF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgICAgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tncmlkQ29sdW1uOiAnIDIgLyAzJ319PlxyXG4gICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImgyIG1iMTZcIj5TZWxlY3RlZCBQcm9wZXJ0aWVzPC9oMj5cclxuICAgICAgICAgICAgIDxwPk5vIHByb3BlcnRpZXMgc2VsZWN0ZWQ8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgXHJcbn0iLCJpbXBvcnQgUHJvcGVydHlUeXBlc0ZpbHRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9wZXJ0eVR5cGVzRmlsdGVyXCI7XHJcbmltcG9ydCBTZWFyY2hSZXN1bHRzIGZyb20gXCIuLi9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHNcIjtcclxuaW1wb3J0IFNlbGVjdGVkUHJvcGVydGllcyBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWxlY3RlZFByb3BlcnRpZXNcIjtcclxuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoRm9ybVwiO1xyXG5pbXBvcnQge2ZldGNoUHJvcGVydGllcywgZ2V0QXZhaWxhYmxlUHJvcGVydHlUeXBlcywgZmV0Y2hQcm9wZXJ0eURldGFpbHN9IGZyb20gJy4uL2FwaS5qcyc7XHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuICAgIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Byb3BlcnR5VHlwZSwgc2V0UHJvcGVydHlUeXBlXSA9IHVzZVN0YXRlKFwiYWxsXCIpO1xyXG4gICAgY29uc3QgW3Byb3BlcnRpZXMsIHNldFByb3BlcnRpZXNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbcHJvcGVydHlUeXBlcywgc2V0UHJvcGVydHlUeXBlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRQcm9wZXJ0aWVzLCBzZXRTZWxlY3RlZFByb3BlcnRpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZXRBdmFpbGFibGVQcm9wZXJ0eVR5cGVzKCk7XHJcbiAgICAgICAgc2V0UHJvcGVydHlUeXBlcyhyZXN1bHQucHJvcGVydHlUeXBlcyk7XHJcbiAgICB9KVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNlYXJjaElucHV0KGV2ZW50KSB7XHJcbiAgICAgICAgc2V0U2VhcmNoSW5wdXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGVja2JveChwcm9wZXJ0eSwgY2hlY2tlZCkge1xyXG4gICAgICAgIGlmIChjaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkUHJvcGVydGllcyhbLi4uc2VsZWN0ZWRQcm9wZXJ0aWVzLCBwcm9wZXJ0eV0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEFycmF5ID0gc2VsZWN0ZWRQcm9wZXJ0aWVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gcHJvcGVydHkpO1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFByb3BlcnRpZXModXBkYXRlZEFycmF5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc3VibWl0U2VhcmNoKGFkZHJlc3MsIHByb3BlcnR5VHlwZSkge1xyXG4gICAgICAgdHJ5IHtcclxuICAgICAgICAgICBzZXRFcnJvcihmYWxzZSk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlO1xyXG4gICAgICAgIGlmIChwcm9wZXJ0eVR5cGUgPT09IFwiYWxsXCIpIHtcclxuICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hQcm9wZXJ0aWVzKHthZGRyZXNzOiBhZGRyZXNzfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2hQcm9wZXJ0aWVzKHthZGRyZXNzOiBhZGRyZXNzLCBwcm9wZXJ0eVR5cGU6cHJvcGVydHlUeXBlfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFsbFByb3BlcnRpZXMgPSByZXNwb25zZS5wcm9wZXJ0aWVzLm1hcChwcm9wZXJ0eSA9PiBmZXRjaFByb3BlcnR5RGV0YWlscyhwcm9wZXJ0eS5pZCkpO1xyXG4gICAgICAgIFByb21pc2UuYWxsKGFsbFByb3BlcnRpZXMpXHJcbiAgICAgICAgLnRoZW4odmFsdWVzID0+IHZhbHVlcy5tYXAoaXRlbSA9PiB7cmV0dXJuIGl0ZW0ucHJvcGVydHl9KSlcclxuICAgICAgICAudGhlbih0aGluZyA9PiB0aGluZy5tYXAoaXRlbSA9PiB7IGl0ZW0uY2hlY2tlZCA9IGZhbHNlOyByZXR1cm4gaXRlbTt9KSlcclxuICAgICAgICAudGhlbih1cGRhdGVkVmFsdWVzID0+IHNldFByb3BlcnRpZXModXBkYXRlZFZhbHVlcykpXHJcblxyXG4gICAgICAgfSBjYXRjaChlcnJvcikge1xyXG4gICAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJBcHAtaGVhZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnN0cmFpbi13aWR0aFwiPlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbW1vLWxvZ29cIiB3aWR0aD1cIjEwMFwiIHNyYz0nL2ltbW8tbG9nby5zdmcnIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJoMSBhbGlnbi1jZW50ZXJcIj5Qcm9wZXJ0eSBzZWFyY2ggdG9vbDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1ncmlkXCI+XHJcbiAgICAgICAgPFNlYXJjaEZvcm0gaGFuZGxlU2VhcmNoSW5wdXQ9e2hhbmRsZVNlYXJjaElucHV0fSBzZWFyY2hJbnB1dD17c2VhcmNoSW5wdXR9IHN1Ym1pdFNlYXJjaD17c3VibWl0U2VhcmNofSBwcm9wZXJ0eVR5cGU9e3Byb3BlcnR5VHlwZX0vPlxyXG4gICAgICAgXHJcbiAgICAgICAge2Vycm9yICYmIDxwPkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQ8L3A+fVxyXG4gICAgICAgIFxyXG4gICAgICAgIDxTZWxlY3RlZFByb3BlcnRpZXMgc2VsZWN0ZWRQcm9wZXJ0aWVzPXtzZWxlY3RlZFByb3BlcnRpZXN9Lz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0c1wiPlxyXG4gICAgICAgXHJcbiAgICAgICAge3Byb3BlcnRpZXMgPyA8U2VhcmNoUmVzdWx0cyBoYW5kbGVDaGVja2JveD17aGFuZGxlQ2hlY2tib3h9IHByb3BlcnRpZXM9e3Byb3BlcnRpZXN9IC8+IDogPHA+UGxlYXNlIGVudGVyIGEgc2VhcmNoIHF1ZXJ5PC9wPiB9ICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICAgIDxQcm9wZXJ0eVR5cGVzRmlsdGVyIHNlYXJjaElucHV0PXtzZWFyY2hJbnB1dH0gc3VibWl0U2VhcmNoPXtzdWJtaXRTZWFyY2h9IHByb3BlcnR5VHlwZT17cHJvcGVydHlUeXBlfSBzZXRQcm9wZXJ0eVR5cGU9e3NldFByb3BlcnR5VHlwZX0gcHJvcGVydHlUeXBlcz17cHJvcGVydHlUeXBlc30gLz5cclxuICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIndhaXQiLCJkZWxheUluTWlsbGlzZWNvbmRzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwicmFuZG9tSW50ZWdlciIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNhbXBsZVByb3BlcnRpZXMiLCJhZGRyZXNzIiwiaWQiLCJwcm9wZXJ0eVR5cGUiLCJudW1iZXJPZlJvb21zIiwiZmxvb3JBcmVhIiwicG9zdGNvZGUiLCJmZXRjaFByb3BlcnRpZXMiLCJ0cmltIiwiRXJyb3IiLCJwcm9wZXJ0aWVzRmlsdGVyZWRCeVR5cGUiLCJ1bmRlZmluZWQiLCJmaWx0ZXIiLCJwcm9wZXJ0eSIsInByb3BlcnRpZXNGaWx0ZXJlZEJ5QWRkcmVzcyIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJwcm9wZXJ0aWVzIiwibWFwIiwiZmV0Y2hQcm9wZXJ0eURldGFpbHMiLCJwcm9wZXJ0eUlkIiwicHJvcGVydHlUb1JldHVybiIsImZpbmQiLCJnZXRBdmFpbGFibGVQcm9wZXJ0eVR5cGVzIiwicHJvcGVydHlUeXBlcyIsImxhYmVsIiwidmFsdWUiLCJQcm9wZXJ0eVR5cGVzRmlsdGVyIiwicHJvcHMiLCJzZXRQcm9wZXJ0eVR5cGUiLCJzdWJtaXRTZWFyY2giLCJzZWFyY2hJbnB1dCIsIml0ZW0iLCJ1c2VTdGF0ZSIsIlNlYXJjaEZvcm1BbmRTZWxlY3RlZCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVTZWFyY2hJbnB1dCIsIlNlYXJjaFJlc3VsdHMiLCJoYW5kbGVDaGVja2JveCIsImxlbmd0aCIsInRhcmdldCIsImNoZWNrZWQiLCJzZWxlY3RlZFByb3BlcnRpZXMiLCJncmlkQ29sdW1uIiwiU2VsZWN0ZWRQcm9wZXJ0aWVzIiwiU2VhcmNoRm9ybSIsInVzZUVmZmVjdCIsIlNlYXJjaCIsInNldFNlYXJjaElucHV0Iiwic2V0UHJvcGVydGllcyIsInNldFByb3BlcnR5VHlwZXMiLCJzZXRTZWxlY3RlZFByb3BlcnRpZXMiLCJlcnJvciIsInNldEVycm9yIiwicmVzdWx0IiwidXBkYXRlZEFycmF5IiwicmVzcG9uc2UiLCJhbGxQcm9wZXJ0aWVzIiwiYWxsIiwidGhlbiIsInZhbHVlcyIsInRoaW5nIiwidXBkYXRlZFZhbHVlcyIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9