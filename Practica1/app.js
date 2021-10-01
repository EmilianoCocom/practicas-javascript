let boton = document.getElementById('button1');
let numero = document.getElementById('numero');

boton.addEventListener('click', function(e){
    e.preventDefault();
    let valorNumero = numero.value;
    let cuadrado = valorNumero * valorNumero;
    let cubo = valorNumero * valorNumero * valorNumero;

    let input2 = document.getElementById('cuadrado');
    input2.value = cuadrado;
    let input3 = document.getElementById('cubo');
    input3.value = cubo;
    
    
});