// Copyright 2015 Marek Materzok. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: A string object's length property is not configurable, 
  deleting it should fail. The same should happen for primitive
  string values, as they are converted to objects by the delete
  operator.
es5id: 8.12.7
es6id: 12.5.4.2
description: Deleting a string's length property should fail
flags: [onlyStrict]
---*/

var s = "";
var so = new String(s);

assert.throws(TypeError, function() { delete s.length });
assert.throws(TypeError, function() { delete so.length });

