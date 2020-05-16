var Memoria = 0;
var ResultadoCalculado = 0;
var Valor = "";
var operacao = false;



var paragrafo= document.getElementById('resultado');
// innertext

function AlteraParagrafo(conteudo) {
    document.getElementById("resultado").innerHTML = arguments[0];
}

function AlteraPrevia(conteudo) {
    document.getElementById("previa").innerHTML = arguments[0];
}

function Concatenar() {
    //console.log(arguments[0]);
    if (!operacao) {
        Valor = Valor + arguments[0];
        console.log(Valor);
        paragrafo.innerText = Number(Valor);
    } else {
        
    }
    
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
    operacao = true;    
    Valor = Number(paragrafo.innerText);
    var previa = Valor.toString() + "+";
    AlteraPrevia(previa)
    /*while (cliclou == false) {
        
    }*/
}
function Subtrair() {
    operacao = true;
}
function Multiplicar() {
    operacao = true;
}
function Dividir() {
    operacao = true;
}
function Resultado(params) {
    operacao = true;
}
