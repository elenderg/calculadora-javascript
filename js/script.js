var Memoria = 0;
var ResultadoCalculado = 0;
var Valor;
var operacao = 0;
var previa = document.getElementById('previa');

var paragrafo = document.getElementById('resultado');

// innertext

function AlteraParagrafo(conteudo) {
    console.log("A função AlteraParagrafo foi chamada");
    Valor = Number(paragrafo.innerText);
    if (Valor == null) {
        console.log("erro. valor do parágrafo estava indefinido");
        Valor = 0;
    } else {
        console.log("verificando conteúdo do parágrafo");
        if (operacao > 0) {
            console.log("já havia sido chamado uma operação anteriormente");
            console.log("Operação > 0");
            paragrafo.innerHTML = arguments[0];
        } else {
            console.log("tudo ok");
            console.log("Operacao = 0 ");
            paragrafo.innerHTML = Number(Valor.toString() + arguments[0].toString());
        }
    }

}

function Concatenar() {
    console.log("A função Concatenar foi chamada");

    if (operacao > 0) {
        console.log("tem que somar essa parada aqui depois");
        AlteraParagrafo(arguments[0]); // envia o número para a função
        operacao = 0;

    } else {
        console.log("operacão = 0");
        AlteraParagrafo(arguments[0]);
    }
    /*
    console.log("A função Concatenar foi chamada");
    //console.log(arguments[0]);
    if (!operacao) { 
 	 console.log("esta linha foi chamada");
        console.log("Operação = false. Concatenando...");
        if (Valor == null) { 
 	 console.log("esta linha foi chamada");
            Valor = 0;
        }
        Valor = Valor.toString() + arguments[0];
        console.log(Valor);
        console.log(Number(Valor));
        paragrafo.innerText = Number(Valor);

    } else { 
 	 console.log("esta linha foi chamada");
        if (Valor == null) { 
 	 console.log("esta linha foi chamada");
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
    console.log("função soma chamada");
    operacao = operacao + 1;

    if (operacao < 2) {
        console.log("sem repetição");
        conteudo = paragrafo.innerHTML + ' + ';
        AlteraPrevia(conteudo);
        console.log("A prévia no momento é")
        console.log(previa.innerText);
        paragrafo.innerText = Nubmer(previa.innerText); 
    } else {
        console.log("apertou o botão mais de uma vez");
        console.log("A prévia no momento é")
        console.log(previa.innerText);
        let x = previa.innerText;
        x = x.slice(0, -1);
        previa.innerHTML = x + " + ";       
    }




    /*
    if (operacao) { 
 	 console.log("esta linha foi chamada");
        var a = previa.toString() + paragrafo.innerHTML.toString();        
        paragrafo.innerHTML = eval(a);        
        operacao = false;
    }
    if (paragrafo.innerText == null) { 
 	 console.log("esta linha foi chamada");
        console.log("Valor indefinido")
    }
    previa = Number(paragrafo.innerText).toString() + " + ";
    AlteraPrevia(previa);
    operacao = true;*/
    /*
    // colocar para exibir o resultado se operacao == true
    console.log("A função somar foi chamada.")
    console.log(operacao);
    if (!operacao) { 
 	 console.log("esta linha foi chamada");
        Valor = Number(paragrafo.innerText);
        console.log(Valor);
        previa = Valor.toString() + " + ";
        AlteraPrevia(previa);
        operacao = true;

    }
    else { 
 	 console.log("esta linha foi chamada");
        Valor = Number(paragrafo.innerText);
        console.log(Number(paragrafo.innerText));
        console.log(Valor);
        paragrafo.innerText = Number(previa + Valor) // É isso aqui que está gerando o NaN
*/

}



function LimparParagrafo() {
    console.log("esta linha foi chamada");
    document.getElementById("resultado").innerHTML = "";
}

function AlteraPrevia(conteudo) {
    console.log("a função altera prévia foi chamada");    
    if (conteudo == null) {
        console.log("conteúdo indefinido ou nulo, restaurando o padrão");
        document.getElementById("previa").innerHTML = "&nbsp;";
    } else {
        console.log("com sucesso. O conteúdo recebido foi:");
        console.log(conteudo);
        var x = document.getElementById("previa").innerHTML;
        document.getElementById("previa").innerHTML = x + arguments[0];
    }
}

function Limpar() {
    console.log("esta linha foi chamada");
    Valor = Number(0);
    paragrafo.innerText = Number(0);
    console.clear();
    console.log("A função limpar foi chamada");
    AlteraPrevia();
}

function LimparEntrada() {
    console.log("esta linha foi chamada");
    Valor = Number(0);
    paragrafo.innerText = Number(0);
    console.clear();
    console.log("A função limpar foi chamada");

}

function InverterSinal() {
    console.log("esta linha foi chamada");
    if (Valor == null) {
        console.log("esta linha foi chamada");
        Valor = 0;
    }
    Valor = Valor * (-1);
    console.log(Valor);
    paragrafo.innerText = Number(Valor);
    console.log("A função Inverter sinal foi chamada")
}

function Subtrair() {
    console.log("esta linha foi chamada");
    operacao = true;
}

function Multiplicar() {
    console.log("esta linha foi chamada");
    operacao = true;
}

function Dividir() {
    console.log("esta linha foi chamada");
    operacao = true;
}

function Resultado(tipodeoperacao) {
    console.log("calculando resultado");
    operacao = 0;
    let x = previa.innerText;
        x = x.slice(0, -1);
    let resultado = eval(x);
    return resultado;
}

function ApagarDigito() {
    console.log("esta linha foi chamada");
    // paragrafo = paragrafo - ultimo digito
    //str = str.substring(0, str.length - 1);
    //str = str.slice(0, -1); 

}

function Radiciar() {
    console.log("esta linha foi chamada");
    // sqrt(valor);
}

function Porcentagem() {
    console.log("esta linha foi chamada");
    if (operacao) {
        console.log("esta linha foi chamada");
        // pega o valor anterior
        //pega o valor atual
        // multiplica um pelo outro
        //divide por 100        
    } else {
        console.log("esta linha foi chamada");
        // caso seja a primeira operação da calculadora
        // paragrafo = 0
        // previa = 0
        // caso não seja
        // pega o valor atual e multiplica com ele mesmo
        // depois divide por 100
    }

}

function InverterValor() {
    console.log("esta linha foi chamada");
    // valor = 1/valor;
}

function LimparMemoria() {
    console.log("esta linha foi chamada");
    // memoria = "";
}

function Exibir() {
    console.log("esta linha foi chamada");
    // Exibe no paragafo o valor salvo na memoria
}

function SubtrairDaMemoria() {
    console.log("esta linha foi chamada");
    // memoria = memoria - valor;
}

function AdicionarNaMemoria() {
    console.log("esta linha foi chamada");
    //memoria = memoria + valor;
}

function GuardarNaMemoria() {
    console.log("esta linha foi chamada");
    // memoria = Number(paragrafo)
}

function ApagarDigito() {
    console.log("esta linha foi chamada");
    // paragrafo = paragrafo - ultimodigitodigitado
    //str = str.substring(0, str.length - 1);
    let texto = paragrafo.innerText;
    texto = texto.slice(0, -1);
    paragrafo.innerText = texto;
}


document.onkeydown = function ChecaTecla(tecla) {
    console.log("esta linha foi chamada");
    // função "anônima" (termo técnico) para verificar qual tecla foi pressionada    
    if (event.keyCode == 8) {
        console.log("esta linha foi chamada");
        // tecla ←
        ApagarDigito();
    }

    if (event.keyCode == 13) {
        console.log("esta linha foi chamada");
        // tecla ↩ ↵ ⏎
        Resultado();
    }

    if (event.keyCode > 47 && event.keyCode < 57) {
        console.log("esta linha foi chamada");
        // se foi pressionada algum número do teclado comum
        var x = event.keyCode - 48;
        // pega o valor do keycode e subtrai 48
        // 48 é o valor do keycode da tecla 0 do teclado comum
        Concatenar(x);
        //manda o valor para a função concatenar
    }

    if (event.keyCode > 95 && event.keyCode < 106) {
        console.log("esta linha foi chamada");
        // se foi pressionada algum número do teclado NUMÉRICO
        var x = event.keyCode - 96;
        // pega o valor do keycode e subtrai 96
        // 96 é o valor do keycode da tecla 0 do teclado NUMÉRICO
        Concatenar(x);
        //manda o valor para a função concatenar
    }

    if (event.keyCode == 106) {
        console.log("esta linha foi chamada");
        Multiplicar();
    }
    if (event.keyCode == 107) {
        console.log("esta linha foi chamada");
        Somar();
    }
    if (event.keyCode == 109) {
        console.log("esta linha foi chamada");
        Subtrair();
    }
    if (event.keyCode == 111) {
        console.log("esta linha foi chamada");
        Dividir();
    }

    if (event.keyCode == 187) {
        console.log("esta linha foi chamada");
        // tecla =§
        Resultado();
    }
    if (event.keyCode == 189) {
        console.log("esta linha foi chamada");
        Subtrair();
        // tecla hífen
    }




}