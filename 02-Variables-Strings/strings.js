var lorem =
  'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without';
var number = 123;
var nulo = null;
var noDefinido = undefined;
var symbol = Symbol('gato');
var boleano = true;
var miObjeto = {
  /* aqui adentro van propiedades */
};
var miArreglo = [
  /* aqui dentro van valores separados por , */
];

// 01. Usa cada uno de estos métodos e imprimelo en consola: toLowerCase, toUpperCase, substr
console.log('🚀 ~ file: variables.js ~ line 42 ~ lorem', lorem);
console.log(lorem.toLowerCase());
console.log(lorem.toUpperCase());
console.log(lorem.substring(14, 18));

// 06. Utiliza un nuevo método de string e imprimelo en consola.
var loremsito =
  'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without';
console.log(loremsito.padStart(loremsito.length + 1, '!'));
console.log(loremsito.split(' '));

var url = 'api.tuweb.com/productos/{id}';
console.log(url.replace('{id}', '123'));

console.log(url.split('.'));
console.log(url.split('/'));
console.log(url.split(''));

// 07. Concatenar 2 strings, ``, .concat(), +
var nombre = 'Gerardo';
var apellidoPaterno = 'Nava';
var apellidoMaterno = 'Pereda';

console.log(nombre + ' ' + apellidoPaterno);
console.log(nombre.concat(apellidoPaterno, apellidoMaterno));
// Alt + 96 -> ``
console.log(
  `Hola estoy concatenando/uniendo mi nombre: ${nombre} ${apellidoPaterno} ${apellidoMaterno}`
);

var lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error repellendus hic explicabo sapiente tenetur ea accusantium, suscipit, a maiores vel dolore est? Totam magni modi sunt maxime debitis, perferendis assumenda.';

var resultadoDelIndexOf = lorem.indexOf('Error');
console.log('--line2-- lorem charAt', lorem.charAt(resultadoDelIndexOf));
console.log('--line2-- lorem charAt', lorem.substr(resultadoDelIndexOf, 5));

var resultadoDelSlice = lorem.slice(0, 57);
var resultadoDelSlice2 = lorem.slice(57);
var resultadoDelSlice3 = lorem.slice(-10);
// var resultadoDelSlice4 = lorem.slice(-1, -57); // no es valido
console.log(
  '🚀 ~ file: strings.js ~ line 40 ~ resultadoDelSlice',
  resultadoDelSlice
);
console.log(
  '🚀 ~ file: strings.js ~ line 41 ~ resultadoDelSlice2',
  resultadoDelSlice2
);
console.log(
  '🚀 ~ file: strings.js ~ line 42 ~ resultadoDelSlice3',
  resultadoDelSlice3
);
