/********* Manejo de Fecha y Hora *******/
/********* Unit Epoch - 01 Enero 1970 00:00:00 -0- Estandar base zona horaria **********/
const ahora = new Date(); //Obtener los datos de la fecha actual
const timestamp = ahora.getTime();
console.log(timestamp.toString());

const fechaActual = new Date(timestamp);
console.log(fechaActual.getFullYear());

const fecha1 = new Date("December 17, 1995, 06:20:00"); //asignar los datos de una fecha
console.log(ahora.toString());
console.log(fecha1.toString());

console.log(`Año: ${ahora.getFullYear()}`); //obtener el año
console.log(`Mes: ${ahora.getMonth()}`); //obtenemos el mes, los meses se empiezan a contar desde cero
console.log(`Día: ${ahora.getDate()}`); //obtener el dia, pero de la fecha del 1-31
console.log(`Día: ${ahora.getDay()}`); //obtener el dia, pero de la semana 0-6,los dias se empiezan a contar desde cero

//obtener horas, minutos y segundos
console.log(`Hora: ${fecha1.getHours()}`);
console.log(`Minutos: ${fecha1.getMinutes()}`);
console.log(`Segundos: ${fecha1.getSeconds()}`);

//obtener horas, minutos y segundos
console.log(`Hora: ${ahora.getHours()}`);
console.log(`Minutos: ${ahora.getMinutes()}`);
console.log(`Segundos: ${ahora.getSeconds()}`);

/************ Ejecicio de comparacion de fechas *********/
/* Crear dos objetos Date, uno con una fecha cualquiera y el siguiente
con la fecha actual, luego comparar ambos valores,
visualizar cual es la fecha menor a la otra */

//const fecha1 = new Date("December 17, 1995, 06:20:00");

const fechaUno = new Date(0);
const fechaDos = new Date();
const timestampFechaUno = fechaUno.getTime();
const timestampFechaDos = fechaDos.getTime();


if( timestampFechaUno < timestampFechaDos){
    console.log(fechaUno.toString());
}
else if(timestampFechaDos < timestampFechaUno){
    console.log(fechaDos.toString());
}

