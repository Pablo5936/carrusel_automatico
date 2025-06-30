const IMG = document.getElementById('imagen')
const NOMBRE = document.getElementById('nombreImagen')
const DESCRIPCION = document.getElementById('descripcionImagen')
const BTN_PAUSA = document.getElementById('btnPausa')
//const nombres = [
'Barcelona',
  'Estambul',
  'Kuala Lumpur',
  'Londres',
  'New York',
  'Oporto',
  'Paris',
  'Rio de Janeiro',
  'Sidney'
//]

let posicion = 0
let intervalo
let enPausa = false

function mostrarImagen() {
  const imagen = RUTA + IMAGENES[posicion].archivo
  DESCRIPCION.innerHTML = IMAGENES[posicion].descripción
  IMG.src = imagen
  IMG.title = IMAGENES[posicion].tooltip
  NOMBRE.innerHTML = IMAGENES[posicion].nombre
  NOMBRE.style.fontSize = '2.5em'
  NOMBRE.style.color = '#B8860B'
  IMG.style.borderRadius = '10px'
}

function avanza() {
  posicion = (posicion + 1) % IMAGENES.length // vuelve al inicio automáticamente
  mostrarImagen()
}

// Iniciar el carrusel al cargar la página

function iniciarCarrusel() {
  console.log('iniciarCarrusel')
  intervalo = setInterval(avanza, 4000) // cambia cada 4 segundos
  enPausa = false
  BTN_PAUSA.innerText = 'PAUSAR'
}

function detenerCarrusel() {
  console.log('detenerCarrusel')
  clearInterval(intervalo)
  enPausa = true
  BTN_PAUSA.innerText = 'REANUDAR'
}

function pausarCarrusel() {
  if (enPausa) {
    iniciarCarrusel()
  } else {
    detenerCarrusel()
  }
}

function recargar() {
  location.reload()
}

mostrarImagen()
iniciarCarrusel()
