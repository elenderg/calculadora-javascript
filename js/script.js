var Memoria = 0;
var ResultadoCalculado = 0;
var Valor;
var operacao = false;
var previa;

var paragrafo = document.getElementById('resultado');
// innertext

function AlteraParagrafo(conteudo) {
    console.log("A função AlteraParagrafo foi chamada");
    Valor = Number(paragrafo.innerText);
    if (Valor === undefined) {
        Valor = 0;
    }
    if (operacao) {        
        paragrafo.innerHTML = arguments[0];
               
    }
    else {
        paragrafo.innerHTML = Number(Valor.toString() + arguments[0]);
    }
    
    
}

function Concatenar() {
    
    AlteraParagrafo(arguments[0]);
    
    /*
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
    }*/

}



function Somar() {
    if (operacao) {
        var a = previa.toString() + paragrafo.innerHTML.toString();        
        paragrafo.innerHTML = eval(a);        
        operacao = false;
    }
    if (paragrafo.innerText === undefined) {
        console.log("Valor indefinido")
    }
    previa = Number(paragrafo.innerText).toString() + " + ";
    AlteraPrevia(previa);
    operacao = true;
    /*
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
    else {
        Valor = Number(paragrafo.innerText);
        console.log(Number(paragrafo.innerText));
        console.log(Valor);
        paragrafo.innerText = Number(previa + Valor) // É isso aqui que está gerando o NaN
*/
    
}



function LimparParagrafo() {
    document.getElementById("resultado").innerHTML = "";
}
function AlteraPrevia(conteudo) {
    console.log(conteudo);
    if (conteudo === undefined) {
        document.getElementById("previa").innerHTML = "&nbsp;";
    }
    else {
        console.log("A função AlteraPrevia foi chamada");
        var x = document.getElementById("previa").innerHTML;
        document.getElementById("previa").innerHTML = x + arguments[0];
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

function ApagarDigito() {
    // paragrafo = paragrafo - ultimo digito
    
}
function Radiciar() {
    // sqrt(valor);
}
function Porcentagem() {
    if (operacao) {
        // pega o valor anterior
        //pega o valor atual
        // multiplica um pelo outro
        //divide por 100        
    } else {
        // caso seja a primeira operação da calculadora
        // paragrafo = 0
        // previa = 0
        // caso não seja
        // pega o valor atual e multiplica com ele mesmo
        // depois divide por 100
    }
    
}
function InverterValor() {
    // valor = 1/valor;
}
function LimparMemoria() {
    // memoria = "";
}
function Exibir() {
    // Exibe no paragafo o valor salvo na memoria
}
function SubtrairDaMemoria() {
    // memoria = memoria - valor;
}
function AdicionarNaMemoria() {
    //memoria = memoria + valor;
}
function GuardarNaMemoria() {
    // memoria = Number(paragrafo)
}
function ApagarDigito() {
    // paragrafo = paragrafo - ultimodigitodigitado
}


document.onkeydown = function ChecaTecla(tecla) {
    // função "anônima" (termo técnico) para verificar qual tecla foi pressionada    
    if (event.keyCode == 8) {
        // tecla ←
        ApagarDigito();
    }
    
    if (event.keyCode == 13) {
        // tecla enter
        Resultado();
    }

    if (event.keyCode > 47 && event.keyCode < 57) {
        // se foi pressionada algum número do teclado comum
        var x = event.keyCode - 48;
        // pega o valor do keycode e subtrai 48 que é o valor do keycode da tecla 0 do teclado comum
        Concatenar(x);
        //manda o valor para a função concatenar
    }

    if (event.keyCode > 95 && event.keyCode < 106) {
        // se foi pressionada algum número do teclado NUMÉRICO
        var x = event.keyCode - 96;
        // pega o valor do keycode e subtrai 96 que é o valor do keycode da tecla 0 do teclado NUMÉRICO
        Concatenar(x);
        //manda o valor para a função concatenar
    }

    if (event.keyCode == 106) {
        Multiplicar();
    }
    if (event.keyCode == 107) {
        Somar();
    }
    if (event.keyCode == 109) {
        Subtrair();
    }
    if (event.keyCode == 111) {
        Dividir();
    }
    
    if (event.keyCode == 187) {
        // tecla =§
        Resultado();
    }
    if (event.keyCode == 189) {
        Subtrair();
        // tecla hífen
    }

        


}  