/*++++++++++ LocalStorage ++++++++++++*/
/********** Guardar y leer datos ***********/
/*
localStorage.setItem('nombredeusuario', 'Emiliano');
localStorage.setItem('ubicacion', 'SanFernando');
console.log(localStorage.getItem('nombredeusuario'));
console.log(localStorage.getItem('ubicacion'));
*/

/********** Remover y limpiar datos **********/
/*
localStorage.removeItem('nombredeusuario'); //Elimina el item que le indiquemos
localStorage.clear(); //limpia el localStorage
*/

/************* Notación JSON ***************/
const usuario = {
    nombre: 'Emiliano',
    edad: 21
}

//JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON
const usuarioJSON = JSON.stringify(usuario); 
localStorage.setItem('usuario', usuarioJSON);
//console.log(usuarioJSON);
const userJSON = localStorage.getItem('usuario');
//JSON.parse() convierte un string a formato JSON
const usuarioObject = JSON.parse(userJSON);
console.log(`${usuarioObject.nombre}: ${usuarioObject.edad}`);
