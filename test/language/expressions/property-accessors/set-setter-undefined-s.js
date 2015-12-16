// Copyright 2015 Marek Materzok. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: When an object field is an accessor, but with an undefined
  setter, setting it should throw TypeError in strict mode.
es5id: 8.12.4
es6id: 9.1.9
description: Set on undefined setter should be disallowed
flags: [onlyStrict]
---*/

var o = { get x(v) {} };
function f() {};
f.prototype = o;
var o2 = new f();

assert.throws(TypeError, function() { o.x = 1 });
assert.throws(TypeError, function() { o2.x = 1 });

