/********** Arreglos en ES6 *******/
/*
const ceviche = ['Pescado', 'mariscos', 'cebolla'];
console.log(ceviche);
ceviche[0] = 'Papas';
*/

/******Agregar-Quitar elementos al inicio-final */
/*
ceviche.unshift('Tomate'); //agrega un elemento al inicio del arreglo
ceviche.shift(); //Elimina el primer elemento del arreglo
ceviche.push('limon'); //agrega un elemento al final del arreglo
ceviche.pop(); //elimina el ultimo elemento del arreglo
console.log(ceviche);
*/

/********** Agregar-Quitar elementos con splice ********/
/*
ceviche.splice(1,1); //elimina uno o varios elemento en el arreglo según la pocision que le indiquemos
console.log(ceviche);
ceviche.splice(1,0,'Pimienta'); //agrega un elemento despues de la pocision que le indiquemos
console.log(ceviche);
*/

/*********** Bucles sobre matrices ********/
/*
ceviche.forEach(function(item, index){
    console.log(`${index}: ${item}`);
});

ceviche.forEach(item => {
    console.log(item);
});

for(let i = 0; i < ceviche.length; i++){
    console.log(`${i}: ${ceviche[i]}`);
}
*/

/*********** Busqueda en arreglos *********/
//console.log(ceviche.indexOf('cebolla')); //muestra el indice del objeto en el arreglo
const ceviche = [
    {
        codigo: 1,
        titulo: 'pescado'
    },
    {
        codigo: 2,
        titulo: 'mariscos',
        tipo: 'frescos'
    },
    {
        codigo: 3,
        titulo: 'cebolla'
    }
];

//findIndex nos sirve para buscar el indice de un objeto en un arreglo
const index = ceviche.findIndex(function(ing, index){
    //console.log(ing);
    return ing.titulo === 'cebolla';
});
//console.log(ceviche);
console.log(index);

/****** Ampliando la busqueda *****/

const buscarIngredientes = function(ceviche, titulo){
    const index = ceviche.findIndex(function(ing, index){
        return ing.titulo === titulo;
    });
    return index;

}

console.log(buscarIngredientes(ceviche, 'mariscos')); //devuelve el indice
console.log(ceviche[buscarIngredientes(ceviche, 'mariscos')]); //devuelve el objeto

/************* Filtrado ***************/
/*
//ejemplo sencillo
const paises = ['mexico', 'peru', 'ecuador', 'cuba', 'colombia'];
console.log(paises.filter(pais => pais.includes('u')));
console.log(paises.sort());
*/

const filtrarIngredientes = ceviche.filter(function(ing, index){
    const ingredientes = ing.titulo.includes('mar');
    return ingredientes;
});

console.log(filtrarIngredientes);

/************ Ordenacion de arreglos ******/
console.log(ceviche);
//la funcion sort sirve para ordenar elementos u objetos dentro de un arreglo
ceviche.sort(function(a, b){
    if (a.titulo > b.titulo){
        return 1;
    }
    if (a.titulo < b.titulo){
        return -1;
    }

    return 0;
});

console.log(ceviche);