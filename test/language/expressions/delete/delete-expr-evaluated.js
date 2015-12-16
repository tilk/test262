// Copyright 2015 Marek Materzok. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Even though the delete operator used on non-references should
  only return true and do nothing else, the parameter expression should
  be evaluated anyway.
es5id: 11.4.1
es6id: 12.5.4.2
description: Delete on non-reference expressions should evaluate it
---*/

var x = 0;

assert(delete (x = 1), 'delete (x = 1)');
assert.sameValue(x, 1, 'x');

