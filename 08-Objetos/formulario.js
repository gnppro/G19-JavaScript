let usuarioActual;

const usuarios = [
  {
    email: 'b@b.com',
    contrasenia: 'bbbaaaccc',
    estaDentro: false,
    saldo: 100,
  },
  {
    email: 'a@a.com',
    contrasenia: 'aaabbbccc',
    estaDentro: false,
    saldo: 100,
  },
  {
    email: 'c@c.com',
    contrasenia: 'cccbbbaaa',
    estaDentro: false,
    saldo: 100,
  },
];

function obtenerUsuarioPorEmail(correo) {
  for (let index = 0; index < usuarios.length; index++) {
    const elemento = usuarios[index];
    console.log('elemento', elemento.email);
    if (correo === elemento.email) {
      return elemento;
    }
  }
  return undefined;
}

function login() {
  // obtener password del input password
  const password = document.getElementById('password').value;
  // obtener email del input email
  const email = document.getElementById('email').value;
  // find/encontrar al usuario con el mismo email
  usuarioActual = obtenerUsuarioPorEmail(email);
  // evaluar sí existe el usuario con ese email
  if (usuarioActual) {
    // usuario encontrado obtines el password
    // condicional password del input vs password usuario que encontraste en este archivo
    if (usuarioActual.contrasenia === password) {
      // mostrar/ocultar elementos o // redireccionar window.location
      window.location = 'home.html';
    } else {
      alert('La contraseña o el password son incorrectos');
    }
  } else {
    alert('La contraseña o el password son incorrectos');
  }
}

function loginConFind() {
  // obtener password del input password
  const password = document.getElementById('password').value;
  // obtener email del input email
  const email = document.getElementById('email').value;
  // find/encontrar al usuario con el mismo email
  // usuarioActual = obtenerUsuarioPorEmail(email);
  // evaluar sí existe el usuario con ese email
  usuarioActual = usuarios.find(function (elemento) {
    return email === elemento.email;
  });

  if (usuarioActual) {
    // usuario encontrado obtines el password
    // condicional password del input vs password usuario que encontraste en este archivo
    if (usuarioActual.contrasenia === password) {
      // mostrar/ocultar elementos o // redireccionar window.location
      window.location = 'home.html';
    } else {
      alert('La contraseña o el password son incorrectos');
    }
  } else {
    alert('La contraseña o el password son incorrectos');
  }
}

// consultar saldo

const MIN = 5;
// retirar // validacion de minimos
// crear una funcion que reste
// obtener valores del DOM de input
// obtener valor del usuario actual (saldo inicial)
// resultado saldo final
// mostrar al usuario el saldo actualizado
// Extra localStorage

const MAX = 456;
// depositar // validacion de maximos
// crear una funcion que sume
// obtener valores del DOM de input
// obtener valor del usuario actual (saldo inicial)
// resultado saldo final
// mostrar al usuario el saldo actualizado
// Extra localStorage

// validaciones
// saldo inicial parametro
// pasar valores min/max
// validarMontos tiene que regrasar true/false
