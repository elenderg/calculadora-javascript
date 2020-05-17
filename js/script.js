var Memoria = 0;
var ResultadoCalculado = 0;
var Valor = 0;
var operacao ;
var previa;



var paragrafo = document.getElementById('resultado');
// innertext

function AlteraParagrafo(conteudo) {
    console.log("A função AlteraParagrafo foi chamada");
    document.getElementById("resultado").innerHTML = arguments[0];
}

function AlteraPrevia(conteudo) {
    console.log("A função AlteraPrevia foi chamada");
    document.getElementById("previa").innerHTML = arguments[0];
}

function Concatenar() {
    console.log("A função Concatenar foi chamada");
    //console.log(arguments[0]);
    if (!operacao) {
        console.log("Operação = false");
        Valor = Valor.toString() + arguments[0];                
        console.log(Valor);
        console.log(Number(Valor));
        paragrafo.innerText = Number(Valor);

    } else {
        console.log("Operação = true. Função Ainda não implementada");
        Valor = Valor.toString() + arguments[0];                
        console.log(Valor);
        console.log(Number(Valor));
        paragrafo.innerText = Number(Valor);
    }
    
}

function Limpar() {    
    Valor = Number(0);
    paragrafo.innerText = Number(0);
    console.clear();
    console.log("A função limpar foi chamada");
    AlteraPrevia("&nbsp;");
}

function LimparEntrada() {    
    Valor = Number(0);
    paragrafo.innerText = Number(0);
    console.clear();
    console.log("A função limpar foi chamada");
    
}

function InverterSinal() {
    Valor = Valor * -1;
    console.log(Valor);
    paragrafo.innerText = Number(Valor);
    console.log("A função Inverter sinal foi chamada")
}

function Somar() {
    if (!operacao) {
        
        Valor = Number(paragrafo.innerText);
        previa = Valor.toString() + "+";
        AlteraPrevia(previa)
        operacao = true;    
        /*while (cliclou == false) {
            
        }*/    
    }
    else{
        Valor = Number(paragrafo.innerText);
        paragrafo.innerText = Number(previa+Valor)
        operacao = false;


    }
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
