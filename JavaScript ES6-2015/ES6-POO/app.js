/************* Manejo de clases en JavaScript *********/

//Clase Padre 
class Persona{
    //el contructor es el primer metodo que se inicia en la clase
    constructor(nombre, edad, profesiones = []){
        this.nombre = nombre;
        this.edad = edad;
        this.profesiones = profesiones;
    }
    
    getBiografia(){
        let boigrafia = `${this.nombre}, tiene ${this.edad}. Profesiones: `;
        this.profesiones.forEach((profesion) => {
            boigrafia += `${profesion}, `;
        });

        return boigrafia;
    }
}

//Clase Hija
class Empleado extends Persona{
    constructor(nombre, edad, profesiones = [], sueldo, puesto){
        //utilizamos super para definir los parametros que recibimos de la clase padre
        super(nombre, edad, profesiones);
        this.sueldo = sueldo;
        this.puesto = puesto;
    }

    //Redefinicion de metodos: utilizar un metodo existente en la clase padre
    getBiografia(){
        return super.getBiografia()+` Puesto: ${this.puesto}, Salario: ${this.sueldo}`;

    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

}

//instanciamos la clase
const persona1 = new Empleado('Emiliano', 21, ['Arquitecto', 'Doctor'], 3000, 'Desarrollador');
const persona2 = new Empleado('Claudia', 26, ['ingeniero', 'Instructor'], 2000, 'Secretaria del desarrollador');
//cambiamos el valor de sueldo
persona2.sueldo = 2500;

console.log(persona1.getBiografia());
console.log(persona2.getBiografia());
console.log(persona1.sueldo);

/************* Getter and Setter  **********/
/*los getter and setter nos sirven para cambiar datos dentro de los objetos
sin afectar los demas metodos como el constructor*/
/*
const datos = {
    get ubicacion(){
        return this._ubicacion;
    },
    set ubicacion(valor){
        this._ubicacion = valor;
    }
}

datos.ubicacion = 'Mexico';
console.log(datos.ubicacion);
console.log(datos);
*/