// declara un array llamado transacciones y asignale valores numericos consecutivos de 1 en 1
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// recorrer el array con un ciclo para sumar todos los valores del array
var acumulador = 0; // suma
console.log(acumulador);

for (let contador = 0; contador < numeros.length; contador++) {
  // acumulador = acumulador + numeros[contador];
  acumulador += numeros[contador];
  console.log(acumulador);
}

console.log('resultado de la suma de los valores dentro del array', acumulador);
