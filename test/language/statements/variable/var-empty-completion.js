// Copyright 2015 Marek Materzok. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The variable statement should have an empty completion value.
  This is observed using eval.
es5id: 12.2
es6id: 13.3.2.4
description: Variable statement has empty completion value
---*/

assert.sameValue(eval('1; var x'), 1, '1; var x');
assert.sameValue(eval('2; var y = 0'), 2, '2; var y = 0');
assert.sameValue(eval('3; var a, b = 1'), 3, '3; var a, b = 1');
assert.sameValue(eval('var c = 0', undefined, 'var c = 0'));

