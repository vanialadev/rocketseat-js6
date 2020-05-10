const usuario = {
  nome: "Vania",
  idade: 23,
  empresa: "Rocket"
}

const { nome, ...uresto } = usuario;

console.log(nome);
console.log(usuario);

const array = [1, 2, 3, 4];

const [a, b, ...c] = array;

console.log(a);
console.log(b);
console.log(c);

function soma1(a, b, c) {
  return a + b + c;
}

function soma2(...params) {
  return params.reduce((total, next) => total + next);
}

function soma3(a, b, ...params) {
  return params;
}

console.log(soma2(1, 2, 3, 5));
console.log(soma3(1, 2, 3, 5, 76, 87));

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const usuario1 = {
  nome: "Vania",
  idade: 23,
  empresa: "Rocket"
}

const usuario2 = { ...usuario1, nome: "Vânia Almeida" }

console.log(usuario2);
