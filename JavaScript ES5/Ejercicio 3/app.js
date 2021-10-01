function calcularJubilacion(name, yearBorn){
	edad = 2019 - yearBorn;
	edadJubilacion = 65 - edad;
	mensaje = name +' te faltan '+ edadJubilacion + ' para jubilarte';
	return mensaje;

}

var persona1 = calcularJubilacion('Emiliano', 1999);

console.log(persona1);