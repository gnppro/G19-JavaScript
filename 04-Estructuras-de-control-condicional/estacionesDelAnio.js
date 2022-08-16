// Alerts: Primavera, Verano, Otoño, Invierno

// Otoño: Septiembre, Octubre, Noviembre
// Invierno: Diciembre, Enero, Febrero
// Primavera: Marzo, Abril, Mayo
// Verano: Junio, Julio, Agosto

// prompt Qué mes es?
// OR -> ||
// AND -> &&

var mesActual = promtp('Qué mes es?');

switch (mesActual) {
  case 'Septiembre':
  case 'Octubre':
  case 'Noviembre':
    alert('Es OTOÑO');
    break;
  case 'Diciembre':
  case 'Enero':
  case 'Febrero':
    alert('Es INVIERNO');
    break;
  case 'Marzo':
  case 'Abril':
  case 'Mayo':
    alert('Es PRIMAVERA');
    break;
  case 'Junio':
  case 'Julio':
  case 'Agosto':
    alert('Es VERANO');
    break;
  default:
    alert('ingresa un mes válido');
    break;
}

if (mes === 'Septiembre' || mes === 'Octubre' || mes === 'Noviembre') {
  alert('Es OTOÑO');
} else if (mes === 'Diciembre' || mes === 'Enero' || mes === 'Febrero') {
  alert('Es INVIERNO');
} else {
  alert('ingresa un mes válido');
}
// ...
