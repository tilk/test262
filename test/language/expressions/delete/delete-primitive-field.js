// Copyright 2015 Marek Materzok. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: When passed a reference, the delete operator should convert
  the base value to an object.
es5id: 11.4.1_4_a
es6id: 12.5.4.2
description: Delete a field on a primitive value
---*/

assert(delete (1).x, true, 'delete (1).x');
assert(delete true.x, true, 'delete true.x');
assert(delete false.x, true, 'delete false.x');
assert(delete "".x, true, 'delete "".x');
assert.throws(TypeError, function() { delete null.x });
assert.throws(TypeError, function() { delete undefined.x });

