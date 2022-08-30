console.log(typeof []);
console.log(typeof new Date());
console.log(typeof {});

// Objeto Literal
const utilesEscolares = {
  libreta: true,
  lapiz: 50,
};

// Obtener el valor de las propiedades dentro de un objeto
console.log(utilesEscolares.libreta);
console.log(utilesEscolares['lapiz']);

utilesEscolares.pluma = 10;
utilesEscolares.libreta = 70;
console.log('utilesEscolares', utilesEscolares);

// Destructuraciòn
const { libreta, lapiz } = utilesEscolares;
console.log(libreta);
console.log(lapiz);
