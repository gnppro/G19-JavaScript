const img = document.createElement('img')
img.src = 'https://static6.depositphotos.com/1030334/671/i/600/depositphotos_6716219-stock-photo-kitten.jpg'
img.alt = 'imagen de un gatito asustado'
console.log(img)
const elementoli = document.querySelector('#elemeto-1')
// elementoli.appendChild(img)
// isConnected es un boolean que nos dicen si el elemento que creamos esta conectado al dom
// elementoli.appendChild(img)

console.log(img.isConnected)