"use strict";

var arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
  return item + 10;
});
arr.map(function (item) {
  return item + 10;
});
var usuario = {
  nome: 'Diego',
  idade: 23
};

function mostraIdade1(usuario) {
  return usuario.idade;
}

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

mostraIdade(usuario);
console.log(mostraIdade(usuario));
var nome = "Diego";
var idade = 23;

function mostraUsuario1() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
}

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

mostraUsuario(nome, idade);
mostraUsuario(nome);
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

var promise1 = function promise1() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

var promise = function promise() {
  new Promise(function (resolve, reject) {
    return resolve;
  });
};
