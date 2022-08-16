// si (condicion) {intrucciones}
var num1 = 15;
var num2 = 10;
var num3;

if (num1 < num2) {
  // verdarero
  console.log('Sí se cumple la condición');
} else {
  // falso
  console.log('No se cumple la condición');
}

num3 = 15;

if (num1 < num2) {
  // verdarero
  console.log('Sí se cumple la primera condición');
} else if (num1 === num3) {
  // verdarero
  console.log('Sí se cumple la segunda condición');
} else {
  // falso
  console.log('No se cumple la condición');
}
