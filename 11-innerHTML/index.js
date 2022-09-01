const padre = document.getElementById('padre'); // necesitas defer en el html

let hijos = '';

function liComponente(contenido) {
  return `<li class="hijo">${contenido}</li>`;
}

function agregarHijo() {
  const input = document.getElementById('text');
  const texto = input.value;
  padre.innerHTML = hijos += liComponente(texto);
  input.value = '';
}
