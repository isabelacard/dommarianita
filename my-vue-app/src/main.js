// Paso 1: Inicializa una variable para el valor del contador

let contador = 0

// Paso 2: Selecciona los botones y el span

const span = document.getElementById ('valor')
const aumentar = document.getElementById ('incrementar')
const bajar = document.getElementById ('decrementar')

// Paso 3: Agrega listeners a los botones para modificar el valor

aumentar.addEventListener ('click', () => {
  span.textContent = contador ++
})


// Paso 4: Asegúrate de que el valor no sea negativo


bajar.addEventListener ('click', () => {
if (contador > 0) {
  span.textContent = contador --
} else {
  span.textContent = 0
}
})


