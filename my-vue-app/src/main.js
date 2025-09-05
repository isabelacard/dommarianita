
// Paso 1: Selecciona el botón con document.getElementById

const boton = document.getElementById ('btnColor')
let Pink = false

// Paso 2: Agrega un event listener al botón para detectar el click

boton.addEventListener('click', () => {
  if (Pink) {
    document.body.style.backgroundColor = "pink"
  } else {
    document.body.style.backgroundColor = 'white'
  }
  Pink = !Pink
})

// Paso 3: Cambia el color de fondo de body dinámicamente