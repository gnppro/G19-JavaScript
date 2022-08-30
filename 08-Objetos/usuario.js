let usuarioActual = {};

const usuario = {
  email: 'asdfasdf',
  contrasenia: 'asdfasdfasdf',
  estaDentro: false,
  saldo: 100,
  historialDeTransacciones: [
    {
      monto: 50,
      tipo: 'abono',
    },
  ],
};

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

// te regresa un indice nùmerico de la posiciòn
// usuarios.findIndex

// te regresa el elmento(objeto) completo dentro del array
// const callback = function (params) {}
function callback(elemento) {
  // return elemento.email === emailUsuarioActual
  return elemento.email === 'a@a.com';
}

// es un mètodo de arrays para encontrar un elemento que cumpla una condiciòn
usuarioActual = usuarios.find(callback);
