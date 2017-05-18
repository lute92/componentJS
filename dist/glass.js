window["glass"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utility = __webpack_require__(2);

function Button() {
    this.value = "Button";
    this.id = utility.getGuid();
    this.onClick = function () {};
    this.parentId = undefined;
    this.parentByNameIndex = undefined;
};

Button.prototype = function () {

    var _type = "btn-default";
    var _htmlContext = null;

    var getHtmlContext = function getHtmlContext() {
        return _htmlContext;
    };

    var setHtmlContext = function setHtmlContext(val) {
        _htmlContext = val;
    };

    var getType = function getType() {
        return _type;
    };

    var setType = function setType(css) {
        _type = css;
    };

    var getId = function getId() {
        return this.id;
    };

    var getParentId = function getParentId() {
        return this.parentId;
    };

    var setPlaceHolderById = function setPlaceHolderById(val) {
        placeHolderId = val;
    };

    var bindOnClickEvent = function bindOnClickEvent(currentComponent, onClick) {
        //let currentCallBack = onEnterKeyPress;
        $(currentComponent).on('click', function (e) {
            onClick(e);
        });
    };

    var type = function type() {
        return new ButtonType();
    };

    var ButtonType = function ButtonType() {};

    ButtonType.prototype = function () {

        var _default = function _default() {
            setType("btn-default");
        };

        var warning = function warning() {
            setType("btn-warning");
        };

        var success = function success() {
            setType("btn-success");
        };

        var danger = function danger() {
            setType("btn-danger");
        };

        var info = function info() {
            setType("btn-info");
        };

        var primary = function primary() {
            setType("btn-primary");
        };

        return {
            default: _default,
            success: success,
            warning: warning,
            danger: danger,
            info: info,
            primary: primary
        };
    }();

    var initialize = function initialize() {
        $("#" + this.id).remove();
        var currentComponent = undefined;
        if (this.parentId != undefined) {
            //ParentId is given
            document.getElementById("" + this.parentId).innerHTML = "<button id=" + this.id + " class='btn " + getType() + "'>" + this.value + "</button>";
            currentComponent = document.getElementById(this.id);
        } else if (this.parentByNameIndex.length == 2) {
            //ParentName and Index are given
            document.getElementsByName("" + this.parentByNameIndex[0])[this.parentByNameIndex[1]].innerHTML = "<button id=" + this.id + " class='btn " + getType() + "'>" + this.value + "</button>";
            currentComponent = document.getElementsByName(this.parentByNameIndex[0])[this.parentByNameIndex[1]];
        }
        setHtmlContext($(currentComponent));
        bindOnClickEvent(currentComponent, this.onClick);
    };

    return {
        getId: getId,
        getParentId: getParentId,
        type: type,
        getType: getType,
        initialize: initialize,
        getHtmlContext: getHtmlContext
    };
}();

module.exports = Button;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var button = __webpack_require__(0);
function Glass() {};

Glass.prototype = function () {

  var getButton = function getButton() {
    return new button();
  };

  return {
    getButton: getButton
  };
}();

var _publish = function getGlass() {
  return new Glass();
}();

module.exports = _publish;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Utility() {};

Utility.prototype = function () {
    /**
    * Function name: loadTemplate
    * Author: STK
    * Description : This method used to load HTML templates
    * Param1: 'url' : to pass url of the html template
    * Param2: callback to retrieved parsed html
    */

    var loadTemplate = function loadTemplate(url) {
        return $.get(url, function (data) {
            var parsed = $.parseHTML(data);
            return parsed;
        });
    };

    var guid = function guid() {

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };

    var s4 = function s4() {

        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };

    return {
        loadTemplate: loadTemplate,
        getGuid: guid

    };
}();

var getUtility = function getUtility() {
    return new Utility();
};
var utility = getUtility();

module.exports = utility;

/***/ })
/******/ ]);