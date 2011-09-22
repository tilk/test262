// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Primitive types are passed by value
 *
 * @section 13.2.1
 * @path 13_Function_Definition/13.2_Creating_Function_Objects/S13.2.1_A6_T1.js
 * @description Declaring a function with "function __func(arg1, arg2)"
 */

function __func(arg1, arg2){
    arg1++;
    arg2+="BA";
};

var x=1;
y=2;
var a="AB"
b="SAM";

__func(x,a);
__func(y,b);

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (x!==1 || y!==2 || a!=="AB" || b!=="SAM") {
	$ERROR('#1: x === 1 and y === 2 and a === "AB" and b === "SAM". Actual: x ==='+x+' and y ==='+y+' and a ==='+a+' and b ==='+b);
}
//
//////////////////////////////////////////////////////////////////////////////
