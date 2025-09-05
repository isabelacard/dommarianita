// Paso 1: Selecciona el input y los <li>


const input = document.getElementById('buscador');
const items = document.querySelectorAll('li');

// Paso 2: Escucha el evento input

input.addEventListener('input', () => {
  const texto = input.value.toLowerCase();
  items.forEach(li => {
    if (li.textContent.toLowerCase().includes(texto)) {
      li.style.display = '';
    } else {
      li.style.display = 'none';
    }
  });
});

// Paso 3: Filtra los nombres mostrando solo los que coincidan con lo escrito