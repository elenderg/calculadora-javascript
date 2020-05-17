var Memoria = 0;
var ResultadoCalculado = 0;
var Valor;
var operacao = false;
var previa;



var paragrafo = document.getElementById('resultado');
// innertext

function AlteraParagrafo(conteudo) {
    console.log("A função AlteraParagrafo foi chamada");
    document.getElementById("resultado").innerHTML = arguments[0];
}

function LimparParagrafo(){
    document.getElementById("resultado").innerHTML = "";
}
function AlteraPrevia(conteudo) {
    console.log(conteudo);
    if(conteudo === undefined){
        document.getElementById("previa").innerHTML = "&nbsp;";
    }
    else{
    console.log("A função AlteraPrevia foi chamada");
    var x = document.getElementById("previa").innerHTML;
    document.getElementById("previa").innerHTML = x + arguments[0];
    }
}

function Concatenar() {
    console.log("A função Concatenar foi chamada");
    //console.log(arguments[0]);
    if (!operacao) {
        console.log("Operação = false. Concatenando...");
        if (Valor === undefined) {
            Valor = 0;
        } 
        Valor = Valor.toString() + arguments[0];
        console.log(Valor);
        console.log(Number(Valor));
        paragrafo.innerText = Number(Valor);

    } else {
        if (Valor === undefined) {
            Valor = 0;
        }
        console.log("Operação = true");
        console.log(Valor);
        Valor = arguments[0];
        LimparParagrafo()
        console.log(Valor);
        console.log(Number(Valor));
        paragrafo.innerText = Number(Valor);
        operacao = false;
    }
    
}

function Limpar() {    
    Valor = Number(0);
    paragrafo.innerText = Number(0);
    console.clear();
    console.log("A função limpar foi chamada");
    AlteraPrevia();
}

function LimparEntrada() {    
    Valor = Number(0);
    paragrafo.innerText = Number(0);
    console.clear();
    console.log("A função limpar foi chamada");
    
}

function InverterSinal() {
    if (Valor === undefined) {
        Valor = 0;
    }
    Valor = Valor * (-1);
    console.log(Valor);
    paragrafo.innerText = Number(Valor);
    console.log("A função Inverter sinal foi chamada")
}

function Somar() {
    // colocar para exibir o resultado se operacao == true
    console.log("A função somar foi chamada.")
    console.log(operacao);
    if (!operacao) {                
        Valor = Number(paragrafo.innerText);
        console.log(Valor);
        previa = Valor.toString() + " + ";
        AlteraPrevia(previa);
        operacao = true;
        
    }
    else{        
        Valor = Number(paragrafo.innerText);
        console.log(Number(paragrafo.innerText));
        console.log(Valor);
        paragrafo.innerText = Number(previa+Valor) // É isso aqui que está gerando o NaN
        
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
