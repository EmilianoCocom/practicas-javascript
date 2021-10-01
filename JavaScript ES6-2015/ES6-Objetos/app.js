/******** Objetos lo basico **********/
/*
let miLibroA = {
    titulo: 'El libro de Javascript',
    autor: 'Emiliano Cocom',
    paginas: 400,
    publicado: false
}

let miLibroB = {
    titulo: 'El libro de Javascript',
    autor: 'Emiliano Cocom',
    paginas: 400,
    publicado: false
}

let getResumen = (libro) => {
    return {
        resumen: `${libro.titulo} creado por ${libro.autor}`,
        resumenPaginas: `${libro.titulo} tiene ${libro.paginas} paginas`
    }
}

let getResumenA = getResumen(miLibroA);
let getResumenB = getResumen(miLibroB);


console.log(getResumenA.resumen);
console.log(getResumenA.resumenPaginas); */

// console.log(`${miLibro.titulo} creado por ${miLibro.autor}`);
// miLibro.paginas = 500;
// console.log(miLibro.paginas);

/********** Ejercicio  ***********
Crear un objeto persona que tenga las siguientes propiedades:
-nombre, edad, ciudad
-cambiar la edad
-mostrar datos de la persona*/

// let persona = {
//     nombre: 'Emiliano',
//     edad: 21,
//     ciudad: 'Merida'
// }

// persona.edad = 22;
// console.log(`${persona.nombre} tiene ${persona.edad} años y vive en ${persona.ciudad}`);
//console.log(persona);

/**************** Referencia de objetos ***************/
/*
let persona = {
    nombre: 'Emiliano',
    edad: 21,
    sueldo: 1200
}
let otraPersona = persona;
otraPersona.sueldo = 1500;
console.log(otraPersona);

let cambiarSueldo = (p, monto) => {
    p.sueldo = p.sueldo + monto;
    //console.log(p)

}

cambiarSueldo(persona, 500);
console.log(persona);
console.log(otraPersona);
*/

/************* Metodos ************/
/*********** Uso de this ************/
/*
let persona = {
    nombre: 'Emiliano',
    edad: 21,
    sueldo: 1200,
    metodoPrueba: function(){
        //console.log('Este es un metodo dentro de persona');
        return 'Metodo desde el objeto persona';
    },
    cambiarEdad: function(edad){
        this.edad = edad;

    }
}

let resultado = persona.metodoPrueba();
console.log(resultado);

persona.cambiarEdad(24);
console.log(persona.edad);
*/

/************ Objetos String ********/
/*
let nombre = ' Emiliano ';
let clave = '122334clave1233.e'
console.log(nombre.length);
console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());
console.log(nombre.trim());
console.log(clave.includes('clave',5));
*/

/************** Destructuracion de objetos ******************/
const getPersonaDatos = () => {
    const respuesta = [
        {
            codigo: 200,
            data: {
                persona: {
                    nombre: 'Emiliano',
                    direccion: {
                        ciudad: 'Maxcanu',
                        pais: 'Mexico'
        
                    },
                }
            }
        },
        {
            codigo: 300,
            data: {
                persona: {
                    nombre: 'Pablo',
                    direccion: {
                        ciudad: 'Merida',
                        pais: 'Mexico'
        
                    },
                }
            }
        },
        {
            codigo: 500,
            data: {
                persona: {
                    nombre: 'Anna',
                    direccion: {
                        ciudad: 'Bogota',
                        pais: 'Colombia'
        
                    },
                }
            }
        }
    ];

    return respuesta;

}


for( {data: { persona : {nombre : n}}} of getPersonaDatos()){
    console.log(n);
}
//let { codigo: status } = getPersonaDatos()[2];
// let { data: { persona: { nombre : n }} } = getPersonaDatos()[2];
// let { data: { persona: { direccion: { ciudad: c}}}} = getPersonaDatos()[2];

//console.log(status);
// console.log(n);
// console.log(c);






