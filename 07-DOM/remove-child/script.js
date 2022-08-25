// el primero elemento en el DOM de tipo <li></li>
const elementoABorrar = document.querySelector('li:first-child')
console.log(elementoABorrar)

// romoveChild remueve el elemento si es un elemento hijo
document.querySelector('.menu').removeChild(elementoABorrar)