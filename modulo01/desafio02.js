const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

var map = usuarios.map(usuario => usuario.idade);
console.log(map);

var filter = usuarios.filter(usuario =>
  usuario.empresa === 'Rocketseat'
  && usuario.idade > 18);
console.log(filter);

var find = usuarios.find(usuario => usuario.empresa === 'Google');
console.log(find);

var unindo = usuarios
  .map(usuario => ({ ...usuario, idade: usuario.idade * 2 }))
  .filter(usuario => usuario.idade <=50);

console.log(unindo);


