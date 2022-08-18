// TAREA: Principios SOLID
// TAREA: Hoisting
// TAREA: SCOPE
// TAREA: Coertion
// function miFuncion(numero1, numero2, parametros) {};

function sumar(numero1, numero2) {
  return numero1 + numero2;
}
function resta(numero1, numero2) {
  return numero1 - numero2;
}
function multiplicacion(numero1, numero2) {
  return numero1 * numero2;
}
function division(numero1, numero2) {
  return numero1 / numero2;
}
function exponenciacion(numero1, numero2) {
  return numero1 ** numero2;
}
function remanente(numero1, numero2) {
  // numero remanente de una división
  return numero1 % numero2;
}

// invocarla, llamarla
// miFuncion(1, 2);
console.log(sumar(2, 2));
console.log(resta(2, 2));
console.log(multiplicacion(2, 2));
console.log(division(2, 2));
console.log(exponenciacion(2, 2));
console.log(remanente(2, 2));

// 3 formas de declarar funciones
// arrow, funcion flecha
// función anonima
