(function(global) {
"use strict";

// --- dependency modules ----------------------------------
// --- define / local variables ----------------------------
//var _runOnNode = "process" in global;
//var _runOnWorker = "WorkerLocation" in global;
//var _runOnBrowser = "document" in global;

// --- class / interfaces ----------------------------------
function WMFoo(value) { // @arg Number|Integer = 0 comment
//{@dev
  //$args(WMFoo, arguments);
  //$valid($type(value, "Number|Integer|omit"), WMFoo, "value");
//}@dev

    this._value = value || 0;
}

//{@dev
WMFoo["repository"] = "https://github.com/uupaa/WMFoo.js"; // GitHub repository URL. http://git.io/Help
//}@dev

WMFoo["prototype"]["value"]     = WMFoo_value;     // WMFoo#value():Number|Integer = 0
WMFoo["prototype"]["isNumber"]  = WMFoo_isNumber;  // WMFoo#isNumber():Boolean
WMFoo["prototype"]["isInteger"] = WMFoo_isInteger; // WMFoo#isInteger():Boolean
/* or
WMFoo["prototype"] = {
    "constructor":  WMFoo,           // new WMFoo(value:Number|Integer):WMFoo
    "value":        WMFoo_value,     // WMFoo#value():Number/Integer
    "isNumber":     WMFoo_isNumber,  // WMFoo#isNumber():Boolean
    "isInteger":    WMFoo_isInteger  // WMFoo#isInteger():Boolean
};
 */

// --- implements ------------------------------------------
function WMFoo_value() { // @ret Number|Integer comment
    return this._value;
}

function WMFoo_isNumber() { // @ret Boolean comment
    return typeof this._value === "number";
}

function WMFoo_isInteger() { // @ret Boolean comment
    return typeof this._value === "number" &&
           Math.ceil(this._value) === this._value;
}

// --- validate / assertions -------------------------------
//{@dev
function $valid(val, fn, hint) { if (global["Valid"]) { global["Valid"](val, fn, hint); } }
function $type(obj, type) { return global["Valid"] ? global["Valid"].type(obj, type) : true; }
//function $keys(obj, str) { return global["Valid"] ? global["Valid"].keys(obj, str) : true; }
//function $some(val, str, ignore) { return global["Valid"] ? global["Valid"].some(val, str, ignore) : true; }
//function $args(fn, args) { if (global["Valid"]) { global["Valid"].args(fn, args); } }
//}@dev

// --- exports ---------------------------------------------
if ("process" in global) {
    module["exports"] = WMFoo;
}
global["WMFoo" in global ? "WMFoo_" : "WMFoo"] = WMFoo; // switch module. http://git.io/Minify

})((this || 0).self || global); // WebModule idiom. http://git.io/WebModule

