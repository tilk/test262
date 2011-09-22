// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of the call method is 1
 *
 * @section 15.3.4.4
 * @path 15_Native/15.3_Function_Objects/15.3.4_Properties_of_the_Function_Prototype_Object/15.3.4.4_Function.prototype.call/S15.3.4.4_A2_T1.js
 * @description Checking Function.prototype.call.length
 */

//CHECK#1
if (typeof Function.prototype.call !== "function") {
  $ERROR('#1: call method defined');
}

//CHECK#2
if (typeof Function.prototype.call.length === "undefined") {
  $ERROR('#2: length property of call method defined');
}

//CHECK#3
if (Function.prototype.call.length !== 1) {
  $ERROR('#3: The length property of the call method is 1');
}
