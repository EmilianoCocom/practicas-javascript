/* **************************
+ Tienes dos alumnos Pablo y María 
+ Pablo tiene las siguientes notas en el curso de Javascript: 14, 8, 16
+ María tiene las siguientes notas en el mismo curso: 12, 18, 10

+ Calcular el promedio de cada alumno, además indicar quien tiene el promedio superior
+ Indicar si el alumno esta aprobado para ello su promedio debe ser superior a trece
*/

var califUnoPablo = 14;
var califDosPablo = 8;
var califTresPablo = 16;

var califUnoMaria = 12;
var califDosMaria = 18;
var califTresMaria = 10;

var promedioPablo = (califUnoPablo+califDosPablo+califTresPablo)/3; 
var promedioMaria = (califUnoMaria+califDosMaria+califTresMaria)/3;

console.log('Promedio de Pablo '+promedioPablo);
console.log('Promedio de Maria '+promedioMaria);

if (promedioPablo > promedioMaria){
    console.log('Pablo tiene el promedio más alto');
}else if (promedioMaria > promedioPablo){
    console.log('Maria tiene el promedio más alto');
}else{
    console.log('Pablo y Maria tienen el mismo promedio');
}

if (promedioPablo > 13){
    console.log('Pablo esta aprobado')
 }else{
     console.log('Pablo esta reprobado')
 }

 if (promedioMaria > 13){
    console.log('Maria esta aprobado')
 }else{
     console.log('Maria esta reprobada')
 }