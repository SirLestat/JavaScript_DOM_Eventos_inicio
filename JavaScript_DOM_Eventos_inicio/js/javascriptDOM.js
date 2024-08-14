//query selector

//todos los selectores empiezan con la palabra reservada document

// querySelector retorna 0 o 1 elementos 
const heading = document.querySelector('#heading'); 
heading.textContent = 'Nuevo heading';

//query selector all retorna de 0 hasta todos los elementos que concuerden con el selector CSS
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo texto para enlaces'

enlaces[0].classList.add = 'NuevaClaseEnmlace';


// Generar un nuevo enlace 
const nuevoEnlace = document.createElement('A');

/* *Es recomendable usar mayúsculas en la etiqueta del elemento
que se quiere crear con el método 'createElement' * */

// 1. Agregar el href
nuevoEnlace.href='nuevo-enlace.html';

// 2. Agregar el texto
nuevoEnlace.textContent = 'Un Nuevo Enlacee';

// 3. Agregar la clase 
nuevoEnlace.classList.add('navegacion__enlace');
console.log(nuevoEnlace);

//4. Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);
