/*********** Examinando el DOM ********
//console.dir(document);
console.log(document.URL);
console.log(document.title);
document.title = 'prueba';
console.log(document.title);  */

/***************** Obtener un elemento por id ********** 
console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
//console.log(header);
headerTitle.textContent = 'Hola';  //cambia el contenido del elemento
headerTitle.innerText = 'Adios';   //Cambia el contenido del elemento
headerTitle.innerHTML = '<h3>Prueba 3</h3>' //cambiar el contenido del elemento, pero utiliza HTML
*/

/******* Obtener elementos por clase **********
var items = document.getElementsByClassName('list-group-item');
console.log(items);
items[0].textContent = 'prueba';  */

/************** Obtener elementos por la etiqueta *******
var items = document.getElementsByTagName('Li');
items[2].textContent = 'prueba 2';  */

/************* querySelector ********
var header = document.querySelector('#main-header'); //Selecciona un elemento por id
//header.style.borderBottom = 'solid 4px #000'; //cambia el color del borde inferior

var input = document.querySelector('input'); //seleccionar un elemento input
input.value = 'hola mundo'; //cambiar el valor

var submit = document.querySelector('input[type = "submit"]'); //encontrar un elemento por type
submit.value = "Enviar"; //cambiar el valor al botton

var item = document.querySelector('.list-group-item');
item.style.color = 'red';   */

/************* querySelectorAll ********

var items = document.querySelectorAll('.list-group-item');
items[0].style.color = 'red';

var title = document.querySelectorAll('.title');
console.log(title);

title[0].textContent = 'Prueba';

var impar = document.querySelectorAll('li:nth-child(odd)');
var par = document.querySelectorAll('li:nth-child(even)');

for(i = 0; i < impar.length; i++){
    impar[i].style.backgroundColor = '#ccc';
    par[i].style.backgroundColor = '#f4f4f4';
}       */

/************** ParentNode  ********
var itemList = document.querySelector('#items');
console.log(itemList.parentNode); //
var main = itemList.parentNode;
main.style.backgroundColor = '#f4f4f4';
console.log(main.parentNode.parentNode);  */

/************** ParentElement  ********

var itemList = document.querySelector('#items');
console.log(itemList.parentElement); //
var main = itemList.parentElement;
main.style.backgroundColor = '#f4f4f4';
console.log(main.parentElement.parentElement);  */

//var itemList = document.querySelector('#items');

/*************** childNodes ****************/
//console.log(itemList.childNodes);

/*************** children *****************/
//console.log(itemList.children);

/*************** firstChild and firsElementChild *****************/
//console.log(itemList.firstChild);
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = 'Prueba';

/*************** lastChild and lastElementchild *****************/
//console.log(itemList.lastChild);
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = 'Prueba';

//var itemList = document.querySelector('#items');

/*************** previousSibling *******************/
//console.log(itemList.previousSibling);
/*************** previousElementSibling *******************/
//console.log(itemList.previousElementSibling);
/*************** nextSibling *******************/
//console.log(itemList.nextSibling);
/*************** nextElementSibling *******************/
//console.log(itemList.nextElementSibling);

/*************** createElement ***************
//tagName
var nuevoDiv = document.createElement('div');
nuevoDiv.className = 'hola';
nuevoDiv.id = 'div-hola';
nuevoDiv.setAttribute('title', 'hola mundo');  */

/*************** createTextNode ***************
var nuevoNodoText = document.createTextNode('Hola mundo');
nuevoDiv.appendChild(nuevoNodoText);
console.log(nuevoDiv);
var contenedor = document.querySelector('header .container');
console.log(contenedor);
var h1 = document.querySelector('h1');
console.log(h1);
contenedor.insertBefore(nuevoDiv, h1);   */

/************ Agregar eventos **************/

// document.getElementById('botton1').addEventListener('click', function (){
//     console.log('Click 2');
// });

/*document.getElementById('botton1').addEventListener('click', hacerClick);

function hacerClick(){
    //console.log('Usted hizo clik');
    document.getElementById('header-title').textContent = 'Texto Camabiado';
} */

/************ Agregar Elemento a la lista */

var form = document.getElementById('formAgregar');
var lista = document.getElementById('items');
var filtro = document.getElementById('filtro');
//evento submit del formulario
form.addEventListener('submit', agregarItem);
//evento click de la lista
lista.addEventListener('click', eliminarItem);
//evento del teclado en el campo de filtro
filtro.addEventListener('keyup', filtrarItem);

//creamos la funcion agregarItem y le pasamos el parametro de e = Evento
function agregarItem(e){
    e.preventDefault(); //para que el evento pueda ser llamado de nuevo
    var newItem = document.getElementById('item').value; //buscamos el elemento por id y obtenemos el valor

    var li = document.createElement('li'); //creamos un nuevo elemento
    li.className = 'list-group-item'; //le agregamos una clase al nuevo elemento
    li.appendChild(document.createTextNode(newItem));

    var bottonDel = document.createElement('button'); //creamos un nuevo elemento
    bottonDel.className = 'btn btn-danger btn-sm float-right eliminar'; //le agregamos una clase al nuevo elemento
    bottonDel.appendChild(document.createTextNode('X')); //agregamos el elemento al documento y le creamos un texto
    li.appendChild(bottonDel); //agregamos al boton dentro del elemento li
    lista.appendChild(li); //agregamos el elemento li a la lista.
    //console.log(li);
    document.getElementById('item').value = '';

}

//funcion para eliminar item
function eliminarItem(e){
    if(e.target.classList.contains('eliminar')){ //buscamos al elemento que contenga la clase eliminar
        if(confirm('¿Seguro que desea eliminar el elemento?')){ //preguntamos si desea eliminar el elemento
            var li = e.target.parentElement; //Selecciona todo el elemento de la lista
            lista.removeChild(li); //eliminamos al elemento de la lista
        }     
    }
}

//funcion filtrar un elemento
function filtrarItem(e){
    var texto = e.target.value.toLowerCase();
    var items = lista.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemNombre = item.firstChild.textContent;
        if (itemNombre.toLocaleLowerCase().indexOf(texto) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
    //console.log(items)
}