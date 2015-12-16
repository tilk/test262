// Copyright 2015 Marek Materzok. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: When an object field is an accessor, but with an undefined
  getter, getting it should return undefined.
es5id: 8.12.3
es6id: 9.1.8
description: Get on undefined getter should return undefined
---*/

var o = { set x(v) {} };
function f() {};
f.prototype = o;
var o2 = new f();

assert.sameValue(o.x, undefined, 'o.x');
assert.sameValue(o2.x, undefined, 'o2.x');

