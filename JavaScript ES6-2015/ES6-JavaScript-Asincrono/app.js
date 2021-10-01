/************ JavaScript Asíncrono ********/
// Funcion setTimeout 

// setTimeout(function() {
//     console.log('Aparece despues de 3 segundos');
// }, 3000 );

//setTimeout(() => { console.log('Aparece despues de 3 segundos'), 3000});

/*
const segundo = () => {
    setTimeout(() => {
        console.log('Llamando a segundo');
    }, 2000);
}

const primero = () => {
    console.log('Inicio de primero');
    segundo();
    console.log('fin de primero');
}

primero(); */

//CALLBACKS
/*
const getUsuarios = () => {
    setTimeout(() => {
        const userIDs = [102, 102, 103, 104, 105];
        console.log(userIDs);

        setTimeout((id) => {
            const usuario = {
                email: 'joseemilianococom@gmail.com',
                nombre: 'Emiliano'
            }
            console.log(`${id} - ${usuario.email} - ${usuario.nombre}`);

            setTimeout((idPermiso) => {
                const permisos = ['admin','creador'];
                console.log(permisos);

            }, 1500, userIDs[1])
        }, 1500, userIDs[1]);
    }, 1500);
}

getUsuarios(); */

/*********** DE CALLBACKS A PROMESAS **************/
const getUsuariosIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([102, 102, 103, 104, 105]);
    }, 1500);
});

const getUsuario = userID => {
    return new Promise((resolve, reject) => {
        setTimeout(id => {
            const usuario = {
                email: 'joseemilianococom@gmail.com',
                nombre: 'Emiliano'
            }
            resolve(`${id} - ${usuario.email} - ${usuario.nombre}`);
        }, 1500, userID);
    });
}

const getPermisos = id => {
    return new Promise((resolve, reject) => {
        setTimeout((id) => {
            const permisos = ['admin','creador'];
            resolve(permisos);
        }, 1500, id)
    });
}

/*
getUsuariosIDs
.then(IDs => {
    console.log(IDs);
    return getUsuario(IDs[1])
})
.then(usuario => {
    console.log(usuario);
    return getPermisos(usuario.id);
})
.then(permisos =>{
    console.log(permisos);
})
.catch(() => {
    console.log('Error');
});   */

//FUNCION CON ASYNC / AWAIT
async function getUsuariosAW(){
    const IDs = await getUsuariosIDs;
    console.log(IDs);
    const usuario = await getUsuario(IDs[1]);
    console.log(usuario);
    const permisos = await getPermisos(usuario.id);
    console.log(permisos)
    return usuario;
}

/*
getUsuariosAW().then(resultado => {
    console.log(`${resultado} es un usuario`);
});   */


//EJEMPLO DE UNA LLAMADA AJAX CON HTML REQUEST

const contenedor = document.querySelector('.row');

const request = new XMLHttpRequest();
request.addEventListener('readystatechange', (e) => {
    if(e.target.readyState === 4){
        const datos = JSON.parse(e.target.responseText);
        // console.log(datos);
        datos.forEach((dato) => {

            let card = document.createElement('div');
            card.className = 'card';
            card.style = 'width: 18rem;  margin: 2em;';
            let bodyCard = document.createElement('div');
            bodyCard.className = 'card-body';
            let h5 = document.createElement('h5');
            h5.className = 'card-title';
            let parrafo = document.createElement('p');
            parrafo.className = 'card-text';

            card.appendChild(bodyCard);
            bodyCard.appendChild(h5);
            bodyCard.appendChild(parrafo);
            contenedor.appendChild(card);

            h5.textContent = dato.name;
            parrafo.textContent = dato.email;
            
        });

        
    }
});
request.open('GET', 'https://jsonplaceholder.typicode.com/users');
request.send();


/*********** Ejemplo del uso de promesas ***********/
/*
//Ejemplo 1
let promesa = new Promise((resolve, reject) => {
    if(false){
        resolve('La operación fue exitosa');
    }
    else{
        reject('Hubo un error');
    }
});

promesa.then(response => {
    console.log('Response: ' + response);
}).catch( error => {
    console.log('Error ' + error);
});

//Ejemplo 2
let miPromesa = Promise.resolve('comida');
miPromesa.then(resp => console.log(resp));

//Ejemplo 3
let miPromesa2 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(4), 2000);
});
miPromesa2.then(resp => {
    resp += 5;
    console.log(resp);
});  */
