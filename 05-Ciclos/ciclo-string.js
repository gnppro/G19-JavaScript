var MERN = ['mongodb', 'express', 'react', 'nodejs'];

var tecnologiasWeb = [
  'html',
  'css',
  'javascript',
  'react',
  'nodejs',
  'angular',
  'vue',
];

// Recorrer el array y transformarlo, imprime el resultado en consola
// 1. para convertirlo a mayusculas
for (let indice = 0; indice < tecnologiasWeb.length; indice++) {
  console.log(tecnologiasWeb[indice].toUpperCase());
}
// 2. para convertirlo a minusculas
for (let i = 0; i < tecnologiasWeb.length; i++) {
  var string = tecnologiasWeb[i];
  console.log(string.toLocaleLowerCase());
}
// 3. para cortar la primer letra
for (let i = 0; i < tecnologiasWeb.length; i++) {
  var string = tecnologiasWeb[i];
  console.log(string.charAt(0));
}
// 4. para hacer la primer letra mayuscula
for (let i = 0; i < tecnologiasWeb.length; i++) {
  var string = tecnologiasWeb[i]; // optengo el string del array por su indice
  var primerLetra = string.charAt(0);
  var primerLetraMayuscula = primerLetra.toUpperCase();
  var restoDelString = string.slice(1);
  console.log(primerLetraMayuscula + restoDelString);
  // console.log(tecnologiasWeb[i].charAt(0).toUpperCase());
}

// Extra validar si el stack mern esta dentro de nuestro array (includes)
