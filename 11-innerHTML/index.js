const padre = document.getElementById('padre'); // necesitas defer en el html

let hijos = '';

function liComponente(contenido) {
  return `<li class="hijo">${contenido}</li>`;
}

function agregarHijo() {
  const input = document.getElementById('text');
  const texto = input.value;
  padre.innerHTML = hijos += liComponente(texto);
  // array o objeto JSON.stringify para convertirlo en string
  localStorage.setItem('hijos', hijos);
  input.value = '';
}

addEventListener('DOMContentLoaded', function(){
  // para pasar de un string a un array o objeto JSON.parse
  const hijosGuardados = localStorage.getItem('hijos')
    if (hijosGuardados) {
      hijos = hijosGuardados
      padre.innerHTML = hijos
    }
})