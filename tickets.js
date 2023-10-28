$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        $("#navbarNav").toggleClass("show");
    });

    $(".nav-link").click(function(){
        $("#navbarNav").removeClass("show");
    });
});

// ELEMENTOS DOM
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let correo = document.getElementById('correo');
let cantidad = document.getElementById('cantidad');
let categoria = document.getElementById('categoria');
let totalPagar = document.getElementById('totalPagar');
let botonResumen = document.getElementById('botonResumen');
let botonBorrar = document.getElementById('botonBorrar');

// VARIABLES
const PRECIO = 200;
let totalConDescuento;
let totalSinDescuento;
const DESCUENTO_ESTUDIANTE = 0.8;
const DESCUENTO_TRAINEE = 0.5;
const DESCUENTO_JUNIOR = 0.15;
// funcion de borrar entradas 
botonBorrar.addEventListener('click', limpiar)
function limpiar() {
    nombre.value = '';
    apellido.value = '';
    correo.value = '';
    cantidad.value = 0;
    categoria.value = 'estudiante';
    totalPagar.value = '';
}
// funcion de aplicar descuento y mostrarlo
botonResumen.addEventListener('click', aplicarDescuento);

function aplicarDescuento(){
    if(nombre.value == '' && apellido.value == '' && correo.value == '' && cantidad.value == '' && cantidad.value == 0 ){
        alert('No podemos darte el resumen porque no llenaste todos tus datos')
    }
    else if(cantidad.value > 0 && categoria.value == 'estudiante'){
        totalSinDescuento = cantidad.value * PRECIO;
        totalConDescuento = totalSinDescuento - (totalSinDescuento * DESCUENTO_ESTUDIANTE);
        totalPagar.value = totalConDescuento;
    }
    else if(cantidad.value > 0 && categoria.value == 'trainee'){
        totalSinDescuento = cantidad.value * PRECIO;
        totalConDescuento = totalSinDescuento - (totalSinDescuento * DESCUENTO_TRAINEE);
        totalPagar.value = totalConDescuento;
    }
    else if(cantidad.value > 0 && categoria.value == 'junior'){
        totalSinDescuento = cantidad.value * PRECIO;
        totalConDescuento = totalSinDescuento - (totalSinDescuento * DESCUENTO_JUNIOR);
        totalPagar.value = totalConDescuento;
    }
}

