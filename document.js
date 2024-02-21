
document.getElementById("miBoton").addEventListener("click", function() {
        console.log("¡Haz hecho clic en el botón!");
});

//linea selectora de etiquetas de html 
console.log(document.querySelector('h3'))
//linea selectora de clases de html
console.log(document.querySelector('.h3-danger'))
//linea selectora de id de html con querySelector se puede usar el getElementById tambien sin el #
console.log(document.querySelector('#miParrafo'));
//linea selectora de id de html
console.log(document.getElementById('miParrafo'));
// linea de selecion de todas las claes 
console.log(document.querySelectorAll('.h3-danger'));


// como adceder a los metodos del dom 
const parrafo = document.querySelector('#miParrafo');
parrafo.style.color = 'red';
// como cambiar el texto del dom
parrafo.textContent = 'Hola mundo desde el js';
parrafo.innerHTML = 'Hola mundo <span>desde el js</span>'

// se accede al elemento del dom
const lista = document.getElementById('lista');
console.log(lista);

// como crear un elemento para ser incorporado al dom 
const li = document.createElement('li');
li.textContent = 'primer elemento';
lista.appendChild(li);
//por cada elemento que se crea se debe agregar una nueva constante 
const lis= document.createElement('li');
lis.textContent = 'segundo elemento';
lista.appendChild(lis);





