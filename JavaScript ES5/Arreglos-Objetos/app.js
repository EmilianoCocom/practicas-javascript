// console.log('ok');
/***** Arreglos ************
var nombres = ["Pablo", "Teresa", "Anna"];
var vegetales = new Array("Tomate", "Lechuga", "Zanahoria");

console.log(nombres[1]);
console.log(vegetales[0]);

nombres[1] = 'Claudia';
console.log(nombres[1]);
console.log(nombres.length);
*/

/******** Operaciones con Arreglos ***
var frutas = ["Pera", "Uva", "Manzana", "Sandia"];
console.log(frutas);

*/
// i = 0;
// for (i; i <= frutas.length; i++){
// 	console.log(frutas[i]);
// }

// frutas.forEach(function (elemento, indice, array ){
// 	console.log(elemento, indice);
// });

// frutas.push("naranja"); //Agregar un elemento al final
// console.log(frutas);
// frutas.unshift("fresa"); //Agrega un elemnto al principio
// console.log(frutas);
// frutas.pop(); //Elimina el ultimo elemento
// console.log(frutas);
// frutas.shift(); //Elimina el primer elemento
// console.log(frutas);

// var posicion = frutas.indexOf('Uva'); //muestra la posicion del elemento
// console.log(posicion);

// frutas.splice(1,2) //Eliminar en elemento en una pocision determinada,
// 					//El primer numero indica la pocision el elemento
// 					//El segundo numero, los elementos a eliminar
// console.log(frutas);

//var persona = ['Pablo', 'Vazquez', 34, '9995330418', 1.65];
//console.log(persona);

/********** Objetos literales 

var persona = {
    nombre: 'Pablo',
    apellido: 'Vazquez',
    gustos: ['Futbol', 'Peliculas', 'Ingles'],
    trabajo: 'Instructor',
    esCasado: true
};

console.log(persona.apellido);
console.log(persona['trabajo']);
persona.esCasado = false;
console.log(persona.esCasado);
*/


/* ********** Objetos con la sintaxis object

var persona2 = new Object();
persona2.nombre = 'Anna';
persona2.apellido = 'pinedo';
persona2['trabajo']= 'webdeveloper';

console.log(persona2);

 */

/* Objetos y metodos */

var persona = {
    nombre: 'Pablo',
    apellido: 'Vazquez',
    gustos: ['Futbol', 'Peliculas', 'Ingles'],
    trabajo: 'Instructor',
    esCasado: true,
    yearBorn: 1990,

    //metodos
    calcularEdad: function(yearBorn){
        this.edad = 2019 - this.yearBorn;
    }
};

persona.calcularEdad();
console.log(persona);
//var edad = persona.calcularEdad(1999);
//console.log(edad);