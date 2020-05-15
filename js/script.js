var Memoria = 0;
var ResultadoCalculado = 0;
var Valor = "";
console.log(Valor);



var paragrafo= document.getElementById('resultado');
// innertext

function AlteraParagrafo(valor) {
    document.getElementById("resultado").innerHTML = this.valor;
}

function Concatenar() {
    //console.log(arguments[0]);
    Valor = Valor + arguments[0];
    console.log(Valor);
    paragrafo.innerText = Number(Valor);
}

function Limpar() {
    Valor = Number(0);
    paragrafo.innerText = Number(0);
}

function InverterSinal() {
    Valor = Valor * -1;
    paragrafo.innerText = Number(Valor);
}

function Somar() {
    Valor = Number(paragrafo.innerText);
    /*while (cliclou == false) {
        
    }*/
}
function Subtrair() {
    
}
function Multiplicar() {
    
}
function Dividir() {
    
}
function Resultado(params) {
    
}
