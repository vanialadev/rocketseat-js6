"use strict";

var usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "fortaleza",
    uf: "Ceará"
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    _usuario$endereco = usuario.endereco,
    cidade = _usuario$endereco.cidade,
    uf = _usuario$endereco.uf;
console.log(nome);
console.log(idade);
console.log(cidade);
console.log(uf);

function mostraNome() {
  console.log(usuario.nome);
}

function mostraNome2(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome);
  console.log(idade);
}

mostraNome(usuario);
mostraNome2(usuario);
