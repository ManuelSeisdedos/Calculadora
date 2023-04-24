class Pantalla {
    constructor(pantallaValorAnterior, pantallaValorActual ) {
        this.pantallaValorActual = pantallaValorActual;
        this.pantallaValorAnterior = pantallaValorAnterior;
        this.calculadora = new Calculadora();
        this.operacion = undefined;
        this.valorActual = "";
        this.valorAnterior = "";
        this.signos = {
            sumar: '+',
            dividir: '%',
            multiplicar: 'x',
            restar: '-', 
            exponente: "^"
        }
    }

    hacerNegativo() {
        this.valorActual = this.valorActual - (this.valorActual*2)
        this.imprimirValor()
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        /* Slice arranca en index = 0, y termina en el array de string sacando el último caracter (-1) */
        this.imprimirValor();
    }
    
    borrarTodo() {
        this.valorActual = "";
        this.valorAnterior = "";
        this.operacion = undefined;
        this.imprimirValor();
    }
    computar(tipo){
        this.operacion !== "igual" && this.calcular()
        this.operacion = tipo;  
        console.log("esto primero?")
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = "";
        this.imprimirValor()
    }
    
    agregarNumero(numero) {
        if (numero === "." && this.valorActual.includes(".")) return 
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValor()
    }

    imprimirValor() {
        this.pantallaValorActual.textContent = this.valorActual;
        this.pantallaValorAnterior.textContent =  `${this.valorAnterior} ${this.signos[this.operacion] || ''}`
    }

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);
        if(isNaN(valorAnterior) || isNaN(valorActual)) return /* Si valorAnterior o valorActual son NaN se retorna sin realizar ninguna operacion*/
        this.valorActual = this.calculadora[this.operacion](valorAnterior,valorActual)
        console.log(this.valorActual)
    }

    calcularExponente() {
        if(this.valorActual === "") return 
        const valorActual = parseFloat(this.valorActual);
        this.operacion = "exponente"
        this.valorActual = this.calculadora[this.operacion](valorActual)
        this.valorAnterior = this.valorActual
        this.valorActual = ""
        this.signos = "";
        this.imprimirValor()
    }
}