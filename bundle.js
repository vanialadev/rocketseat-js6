"use strict";

function soma(x, y) {
  return x + y;
}

console.log(soma(1));

function somaDefault() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 9;
  return x + y;
}

console.log(somaDefault(1));
