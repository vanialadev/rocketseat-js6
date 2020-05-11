const arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
  return item + 10;
});

arr.map(item => item + 10);

const usuario = { nome: 'Diego', idade: 23 };

function mostraIdade1(usuario) {
  return usuario.idade;
}

const mostraIdade = usuario => usuario.idade;

mostraIdade(usuario);
console.log(mostraIdade(usuario));

const nome = "Diego";
const idade = 23;

function mostraUsuario1(nome = 'Diego', idade = 18) {
  return { nome, idade };
}

const mostraUsuario = (nome = 'Diego', idade = 18) =>
  ({ nome, idade });

mostraUsuario(nome, idade)
mostraUsuario(nome);
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

const promise1 = function () {
  return new Promise(function (resolve, reject) {
    return resolve();
  })
}

const promise = () => {
  new Promise((resolve, reject) => resolve);
}
