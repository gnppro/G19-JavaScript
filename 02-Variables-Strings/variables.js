// Alcance global
var algo = 'algo';

// Alcance local
const foo = 'foo';
// foo = 'otra cosa' -> esto es incorrecto

let bar = 'bar';
bar = 'otro valor';
// {} todo lo que este dentro de un bloque es local
// function () {} scope/alcance de funcion

// 01. Declara una variable.
var miVariable;

// 02. Declara y asigna un valor númerico a una variable.
var nombreDeTuVariable = 0;

// 03. Declara y asigna una variable por cada tipo de dato.
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

// 04. Usa typeof para tres de las variable de arriba e imprimelas en consola.
console.log(typeof string, typeof number, typeof nulo);
console.log(typeof string);
console.log(typeof number);
console.log(typeof nulo);
