// prompt ? Qué clima hay
var clima = prompt('¿Qué clima hay donde vives?');

// switch case + alerts
switch (clima.toLocaleLowerCase()) {
  case 'nublado':
    alert('nublado');
    break;
  case 'lluvioso':
    alert('lluvioso');
    break;
  case 'soleado':
    alert('soleado');
    break;
  case 'nevando':
    alert('nevando');
    break;
  default:
    alert('ninguna de las anteriores');
    break;
}
