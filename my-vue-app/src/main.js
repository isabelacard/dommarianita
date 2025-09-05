

const contenedor = document.getElementById('app')

//h1

const titulo = document.createElement('h1')
titulo.textContent = 'Gatos'
titulo.style.display = 'flex'
titulo.style.textAlign = 'center'
titulo.style.justifyContent = 'center'
titulo.style.marginTop = '50px'
titulo.style.margin = '20px'
titulo.style.color = 'pink'

//lista

const div = document.createElement('div')
const ul = document.createElement('ul')
const razas = [
	"Maine Coon 🦁: Son enormes y con cuerpo alargado, la raza de gato doméstico más grande.",
	"Oriental de pelo corto 🐾: Muy delgados, largos de patas, cola y cuerpo.",
	"Sphynx (sin pelo) 🐉: Su cuerpo es alargado y musculoso.",
	"Bengala 🐆: Aunque son medianos, tienen cuerpo largo y estilizado, como mini leopardos.",
	"Savannah 🌿: Cruce de serval africano y gato doméstico, muy altos y alargados."
];

razas.forEach(texto => {
	const li = document.createElement('li');
	li.textContent = texto;
	ul.appendChild(li);
});



contenedor.appendChild(titulo);


//parrafo

const texto = document.createElement('p')
texto.textContent = 'Los gatos son animales mamíferos domésticos pertenecientes a la familia de los félidos, conocidos por su agilidad, independencia y comportamiento curioso. Se caracterizan por su cuerpo flexible, garras retráctiles y sentidos muy desarrollados, lo que los convierte en excelentes cazadores. A lo largo de la historia, han sido valorados tanto como compañeros en el hogar como por su capacidad para controlar plagas. Existen numerosas razas con diferentes tamaños, colores y temperamentos, pero en general los gatos destacan por su carácter juguetón y cariñoso, aunque también disfrutan de su espacio personal y de largos momentos de descanso.'
texto.style.padding = '20px'
texto.style.margin = '20px 400px 0px 400px';
texto.style.display = 'flex'
texto.style.textAlign = 'center'
contenedor.appendChild(texto);

contenedor.appendChild(div);
div.appendChild(ul);



div.style.backgroundColor = 'pink'
div.style.padding = '20px'

ul.style.margin = '20px 400px 0px 400px';
ul.style.display = 'flex'
ul.style.flexDirection = 'column'
ul.style.textAlign = 'align'
ul.style.gap = '10px'
ul.style.justifyContent = 'center'
ul.style.color = 'black'


//boton

const divboton = document.createElement('div')
divboton.style.display = 'flex'
divboton.style.textAlign = 'center'
divboton.style.justifyContent = 'center'

const boton = document.createElement('button')
boton.textContent = 'Click para conocer gatos'
boton.style.border = '0'
boton.style.backgroundColor = 'pink'
boton.style.padding = '10px'
boton.style.color = 'black'
boton.style.borderRadius = '30px'
boton.style.cursor = 'pointer'
boton.style.margin = '60px'


contenedor.appendChild(divboton)
divboton.appendChild(boton)

boton.addEventListener ('mouseenter', () => {
  boton.style.background = 'orange'
})

boton.addEventListener ('mouseout', () => {
  boton.style.backgroundColor = "pink"
})

//form

const divform = document.createElement('div')

const form = document.createElement('form')

const label = document.createElement('label')
label.textContent = 'nombre del miaumiau';

const input = document.createElement('input')
input.type = 'text';
input.nombre = 'nombreGato';

const button = document.createElement('button');
button.type = 'submit';
button.textContent = 'Enviar';

divform.appendChild(form)
form.appendChild(label);
form.appendChild(input);
form.appendChild(button);


label.style.textAlign = 'center';
label.style.alignContent = 'center'
label.style.margin = '10px'
input.style.textAlign = 'justify';


divform.style.display = 'flex'
divform.style.alignItems = 'center'
divform.style.justifyContent = 'center'

contenedor.appendChild(divform);

button.style.padding = '10px'
button.style.border = '0px'
button.style.borderRadius = '20px'
button.style.cursor = 'pointer'
button.style.backgroundColor = 'pink'
button.style.margin = '10px'
button.style.color = 'black'
button.style.marginBottom = '50px'

button.addEventListener ('mouseenter', () => {
  button.style.backgroundColor = 'orange'
})

button.addEventListener ('mouseout', () => {
  button.style.backgroundColor = 'pink'
})

input.style.margin = '10px'
input.style.padding = '10px'
input.style.border = '0px'
input.style.borderRadius = '20px'


form.style.display = 'flex'
form.style.textAlign = 'center'
form.style.justifyContent = 'center'
form.style.margin = '20px'

form.style.flexDirection = 'column'


