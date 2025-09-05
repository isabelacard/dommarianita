
// Paso 1: Selecciona el input y la lista

const input = document.getElementById('entrada')
const lista = document.getElementById('lista')

// Paso 2: Agrega un listener al input para detectar Enter (keyup o keydown)

input.addEventListener ('keyup', (Enter) => {
  if (Enter.key === 'Enter') {
    // Paso 3: Crea un nuevo <li> con el valor del input y agrégalo al ul
    const li = document.createElement('li')
    li.textContent = entrada.value;
    lista.appendChild(li)
    // Paso 4: Limpia el input después de agregar
    entrada.value = '';
  }
})