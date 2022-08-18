// while
/* var contador = 1;

// #
// ##
// ###
// ####
// #####
// ######

while (contador <= 6) {
  console.log('#'.repeat(contador));
  contador++;
  // contador = contador + 1;
} */

// 1 + 1 = 2
// 2 + 2 = 4
// 3 + 3 = 6
// 4 + 4 = 8
// n -> variable prompt

var numero = prompt('ingresa un número');
var contador = 1;

console.log(typeof numero);

// !true -> false
// !false -> true

if (!isNaN(Number(numero))) {
  while (contador <= numero) {
    document.write(`${contador} + ${contador} = ${contador + contador} <br>`);
    contador++;
  }
} else {
  document.write('Ingresa un número válido');
}

// do while
// for
