var numero = -10;
// let const

for (let contador = 0; contador >= numero; contador--) {
  console.log(contador);
}

var numero2 = 10;

for (let contador = 0; contador <= numero2; contador++) {
  console.log(contador);
}

var miArreglo = [
  'string', // 0
  true, // 1
  1, // 2
  undefined, // 3
  null, // 4
  Symbol('gato'), // 5
];

console.log(miArreglo[4]);

var tecnologiasWeb = [
  'html',
  'css',
  'javascript',
  'react',
  'nodeje',
  'angular',
  'vue',
];

for (let i = 0; i < tecnologiasWeb.length; i++) {
  console.log(i, tecnologiasWeb[i].toUpperCase());
}
