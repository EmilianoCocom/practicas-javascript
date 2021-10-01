/************** ES6 - ECMAScript 6 - 2015 *************/
/*En ES6 a variables con declaración const no se le pude cambiar el valor,
si deseamos cambiar el valor a la variable durante la secuencia en el codigo
tenemos que utilizar let*/
/*
const nombre = 'Emiliano';
let edad =  21;
console.log(nombre);
nombre = 'José'; */

/*************** Bloque y alcance de las variables *****************/
/*En ES5 se puede acceder a una variable que esta dentro de una función
o dentro de un bloque de codigo*/
/* En ES6 si una variable esta dentro de un bloque de codigo o 
función no se puede acceder a ella, la función tendria que retornar el valor 
de la variable */
/*************** Template string  **************************/
/*let nombre = 'Emiliano';
let apellido = 'Cocom';
const ciudad = 'maxcanu';
const yearBorn = 1999;

function calcularEdad(year){
    return 2019 - year;
}

console.log(`${nombre} ${apellido}, nació en ${ciudad}, y su edad es ${calcularEdad(yearBorn)}`); //template string
*/

/************* Funciones de cadenas ES6 *************************/
/*
let nombre = 'Emiliano';
let apellido = 'Cocom';
let nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);
console.log(`${nombre} `.repeat(5)); //repeat repite el valor de la variable 
console.log(nombreCompleto.includes('mi')); //para ver si un caracter esta dentro del valor de la variable
console.log(nombreCompleto.startsWith('Emi')); //permite saber con que comienza la cadena
console.log(nombreCompleto.endsWith('com')); //compara la terminación de la cadena 
*/

/*************** Funciones flechas ****************/
/*
const years = [2000, 2005, 2008, 2012];

let edad = years.map(el => 2019 - el);
console.log(edad);
edad = years.map((el, index) => `Edad ${index + 1}: ${2019 - el}`);
console.log(edad);

edad = years.map(
    (el, index) => {
        const yearActual = new Date().getFullYear();
        const edad = yearActual - el;
        return `Edad ${index + 1}: ${edad}`;
    }
);
console.log(edad);

// function cuadrado(num){
//     return num * num;
// }

// console.log(cuadrado(5));

// const cuadrado = (num) => {
//     return num * num;
// }

const cuadrado = (num) => num * num;
console.log(cuadrado(6));

const personas = [
    {
        nombre: 'Emiliano',
        edad: '21'
    },
    {
        nombre: 'Carlos',
        edad: 25
    },
    {
        nombre: 'Ana',
        edad: 45
    }
];
// const menores30 = personas.filter(function(persona){
//     return persona.edad < 30;
// });

const menores30 = personas.filter((persona) => persona.edad < 30);
console.log(menores30); 
*/

/*********** Destructuración - Destrucción - Destructuring  ********/
/*
//ES5 
var datos = ['pablo', 25];

//var nombre = datos[0];
//var edad = datos[1];

//ES6
const [nombre1, edad1] = ['Pablo', 25];
console.log(nombre1);
console.log(edad1);

const persona1 = {
    nombre2: 'Carlos',
    edad2: 22
}

const {nombre2, edad2} = persona1;
console.log(nombre2)
console.log(edad2);

//Alias
const {nombre2: n, edad2: e} = persona1;
console.log(n)
console.log(e);
*/
/************ Ejemplo de Destructuración *************/
/*
const calMayoriaEdad = (year) => {
    const edad = new Date().getFullYear() - year;
    const mayoria = edad >= 18 ? true : false;
    return [edad, mayoria];
}

const [edad2, mayoria] = calMayoriaEdad(1999);
console.log(edad2);
console.log(`Es mayor de edad: ${mayoria}`); */

/*********** Mapas ***********/
/*
const datos = new Map();
datos.set('nombre', 'Emiliano');
datos.set('edad', 21);
datos.set(1, 'joseemilianococom@gmail.com');
datos.set(2, 'emilianoTEC2017@gmail.com');
datos.set('movil', 9995330418);

// console.log(datos.get('nombre'));
// console.log(datos.get(2));
// console.log(datos.size);

// datos.delete(2);
// datos.clear();

datos.forEach((value, key) => {
    console.log(`${key} : ${value}`);
}); */

/*************** Spread Operator **************/
/*El spread operator nos sirve para juntar valores de forma mas simple,
e igual para juntar arreglos o matrices */
const suma = (a, b, c, d) => a+b+c+d;
const valores = [10, 20, 30, 40];
const open = suma(...valores);
console.log(open);

const rh = ['Pedro', 'Pablo', 'Ana'];
const contabilidad = ['Felipe', 'Carlos', 'Maria'];
const empresa = [...rh, ...contabilidad];
console.log(empresa);