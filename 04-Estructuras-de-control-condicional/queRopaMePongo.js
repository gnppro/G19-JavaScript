// ropas
// var ropa1 = 'falda'

var ropaHombre1 = 'playera manga larga';
var ropaHombre2 = 'short';
var ropaHombre3 = 'tennis';
var ropaHombre4 = 'gorra';
var ropaMujer1 = 'falda';
var ropaMujer2 = 'blusa';
var ropaMujer3 = 'sandalias';
var ropaMujer4 = 'bolsa';

// prompt
var valorDeEntrada = prompt('¿De que te quieres vestir?');
var colorFavorito = prompt('¿Cuál es tu color favorito?');
var siQuireVestirseDeMujer = valorDeEntrada.toLowerCase() === 'mujer';
var siQuireVestirseDeHombre = valorDeEntrada.toLowerCase() === 'hombre';

// Conjunto de ropa
// if else

if (siQuireVestirseDeHombre) {
  if (colorFavorito === 'azul') {
    alert(
      `Te recomiendo usar: ${ropaHombre1} azul ${ropaHombre2} azul ${ropaHombre3} ${ropaHombre4}`
    );
  } else {
    alert(
      `Te recomiendo usar: ${ropaHombre1} ${ropaHombre2} ${ropaHombre3} ${ropaHombre4}`
    );
  }
} else if (siQuireVestirseDeMujer) {
  if (colorFavorito === 'azul') {
    alert(
      `Te recomiendo ponerte: ${ropaMujer1} azul ${ropaMujer2} azul ${ropaMujer3} ${ropaMujer4}`
    );
  } else {
    alert(
      `Te recomiendo ponerte: ${ropaMujer1} ${ropaMujer2} ${ropaMujer3} ${ropaMujer4}`
    );
  }
} else {
  alert('No es un valor válido');
}
