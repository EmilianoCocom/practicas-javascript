var calcularPorcentaje = function(cantidad){
	porcentaje = (cantidad * 100)/100;
	return porcentaje;
}

// console.log(calcularPorcentaje(40));

function evaluarScore(nombre, resPositivas, resNegativas){
	porcentajePositivo = calcularPorcentaje(resPositivas);
	porcentajeNegativo = calcularPorcentaje(resNegativas);
	var score = '';

	if (porcentajePositivo >= 90){
		score = 'A';
	}else if (porcentajePositivo >= 70){
		score = 'B';
	}else if (porcentajePositivo >= 45){
		score = 'C';
	}else if (porcentajePositivo < 45){
		score = 'D';
	}

	return `${nombre} tienes un score ${score}, Positivas: ${porcentajePositivo}%, Negativas: ${porcentajeNegativo}%`;
}


var score1 = evaluarScore('Emiliano', 40 , 60);
console.log(score1);
