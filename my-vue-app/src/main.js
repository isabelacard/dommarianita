// Paso 1: Selecciona el input y la lista

const input = document.getElementById('tarea')
const lista = document.getElementById('listaTareas')

// Paso 2: Escucha Enter en el input y agrega <li> con el texto + un botón "Eliminar"
input.addEventListener('keyup', (event) => {
  if (event.key === 'Enter' && input.value.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = input.value;

    const button = document.createElement('button');
    button.textContent = 'Eliminar';
    button.classList.add('eliminar'); // ← importante para el paso 4

    li.appendChild(button);
    lista.appendChild(li);

    input.value = ''; // ← corregido
  }
});

// Paso 3 y 4: Delegación de eventos para alternar completado o eliminar
lista.addEventListener('click', (event) => {
  const elemento = event.target;

  if (elemento.tagName === 'BUTTON' && elemento.classList.contains('eliminar')) {
    elemento.parentElement.remove(); // Elimina la tarea
  } else if (elemento.tagName === 'LI') {
    elemento.classList.toggle('completado'); // Alterna estado completado
  }
});
