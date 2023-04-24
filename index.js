const pantallaValorAnterior = document.getElementById("valor-anterior"); 
const pantallaValorActual = document.getElementById("valor-actual");
const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperador = document.querySelectorAll(".operador");

const pantalla = new Pantalla(pantallaValorAnterior, pantallaValorActual)

botonesNumeros.forEach(boton => {
    boton.addEventListener("click", () => {
        pantalla.agregarNumero(boton.innerHTML)
    })
})

botonesOperador.forEach(boton => {
    boton.addEventListener("click", () => {
        pantalla.computar(boton.value)
    })
})