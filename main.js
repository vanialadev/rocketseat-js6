const usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "fortaleza",
    uf: "Ceará",
  },
};

const { nome, idade, endereco: { cidade, uf } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);
console.log(uf);


function mostraNome() {
  console.log(usuario.nome);
}

function mostraNome2( {nome, idade}) {
  console.log(nome);
  console.log(idade);
}

mostraNome(usuario);
mostraNome2(usuario);
