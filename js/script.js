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
    // Aqui a variável Valor recebe o conteúdo digitado.
    console.log(Valor);
    if (Valor == null) {
        console.log("erro. valor do parágrafo estava indefinido");
        Valor = 0;
        // Se caso o valor seja nulo, a variável recebe o valor 0
    } else {
        console.log("verificando conteúdo do parágrafo");
        if (operacao > 0) {
            console.log("operação aritmética está em andamento");
            console.log("Operação > 0");
            paragrafo.innerHTML = arguments[0];
            // Já que uma operação está em execução, 
            // a calculadora irá limpar o conteúdo do parágrafo, 
            //colocando o novo valor digitado no lugar
        } else {
            console.log("tudo ok");
            console.log("Operacao = 0 ");
            paragrafo.innerHTML = Number(Valor.toString() + arguments[0].toString());
            // a linha acima serve para concatenar os dígitos
        }
    }
}

function Concatenar() {
    console.log("A função Concatenar foi chamada");
    if (operacao > 0) {
        console.log("Atenção: verificar qual operaração está em andamento. Recurso ainda não Implementado");
        AlteraParagrafo(arguments[0]); // envia o número para a função
        operacao = 0;
    } else {
        console.log("operacão = 0");
        AlteraParagrafo(arguments[0]);
    }
}



function Somar() {
    console.log("função soma chamada");
    operacao = operacao + 1;
    if (operacao < 2) {
        //caso o usuário tenha apertado mais de uma vez qualquer botão de operação
        console.log("sem repetição");
        conteudo = paragrafo.innerHTML + ' + ';
        AlteraPrevia(conteudo);
        console.log("A prévia no momento é");
        console.log(previa.innerText);
        let x = previa.innerText;
        x = x.slice(0, -1);
        console.log(x);
        paragrafo.innerText = eval(x); 
        // por um slice aqui
    } else {
        console.log("apertou o botão mais de uma vez");
        console.log("A prévia no momento é");
        console.log(previa.innerText);
        let x = previa.innerText;
        x = x.slice(0, -1);
        previa.innerHTML = x + " + ";       
    }
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
    console.log("A função Inverter sinal foi chamada");
    Valor = Number(paragrafo.innerText);
    console.log(Valor);
    if (Valor == null) {
        console.log("Valor = undefined");
        Valor = 0;
    }
    else {
    Valor = Valor * (-1);
    console.log(Valor);
    paragrafo.innerText = Number(Valor);
    }    
}

function Subtrair() {
    console.log("calculando subtração");
    operacao = operacao + 1;
    if (operacao < 2) {
        console.log("sem repetição");
        conteudo = paragrafo.innerHTML + ' - ';
        AlteraPrevia(conteudo);
        console.log("A prévia no momento é");
        console.log(previa.innerText);
        let x = previa.innerText;
        x = x.slice(0, -1);
        console.log(x);
        paragrafo.innerText = eval(x); 
        // por um slice aqui
    } else {
        console.log("apertou o botão mais de uma vez");
        console.log("A prévia no momento é")
        console.log(previa.innerText);
        let x = previa.innerText;
        x = x.slice(0, -1);
        previa.innerHTML = x + " - ";       
    }
}

function Multiplicar() {
    console.log("calculando multiplicação");    
    operacao = operacao + 1;
    if (operacao < 2) {
        console.log("sem repetição");
        conteudo = paragrafo.innerHTML + ' * ';
        AlteraPrevia(conteudo);
        console.log("A prévia no momento é");
        console.log(previa.innerText);
        let x = previa.innerText;
        x = x.slice(0, -1);
        console.log(x);
        paragrafo.innerText = eval(x); 
        // por um slice aqui
    } else {
        console.log("apertou o botão mais de uma vez");
        console.log("A prévia no momento é");
        console.log(previa.innerText);
        let x = previa.innerText;
        x = x.slice(0, -1);
        previa.innerHTML = x + " * ";       
    }
}

function Dividir() {
    console.log("calculando divisão");
    operacao = operacao + 1;
    if (operacao < 2) {
        console.log("sem repetição");
        conteudo = paragrafo.innerHTML + ' / ';
        AlteraPrevia(conteudo);
        console.log("A prévia no momento é")
        console.log(previa.innerText);
        let x = previa.innerText;
        x = x.slice(0, -1);
        console.log(x);
        paragrafo.innerText = eval(x); 
        // por um slice aqui
    } else {
        console.log("apertou o botão mais de uma vez");
        console.log("A prévia no momento é");
        console.log(previa.innerText);
        let x = previa.innerText;
        x = x.slice(0, -1);
        previa.innerHTML = x + " / ";       
    }
}

function Resultado() {
    console.log("calculando resultado");
    operacao = 0;
    let x = eval(previa.innerText + resultado.innerText);
    /*x = x.slice(0, -1);
    let res = eval(x);*/
    previa.innerHTML = "&nbsp;";
    resultado.innerText = x;
}

function ApagarDigito() {
    console.log("apagando dígito");
    // paragrafo = paragrafo - ultimo digito
    //str = str.substring(0, str.length - 1);
    //str = str.slice(0, -1); 
    paragrafo.innerText = paragrafo.slice(0, -1);
}

function Radiciar() {
    console.log("radiciando");
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
    console.log("invertendo valor");
    // valor = 1/valor;
}

function LimparMemoria() {
    console.log("limpando memória");
    Memoria = 0;
}

function Exibir() {
    console.log("Exibindo valor salvo na memória");
    // Exibe no paragafo o valor salvo na memoria
}

function SubtrairDaMemoria() {
    console.log("Subtraindo valor da memória");
    // memoria = memoria - valor;
}

function AdicionarNaMemoria() {
    console.log("Adicionando valor à memória");
    //memoria = memoria + valor;
}

function GuardarNaMemoria() {
    console.log("guardando valor na memória");
    // memoria = Number(paragrafo)
    
}

function ApagarDigito() {
    console.log("Apagando dígito");
    // paragrafo = paragrafo - ultimodigitodigitado
    //str = str.substring(0, str.length - 1);
    let texto = paragrafo.innerText;
    texto = texto.slice(0, -1);
    paragrafo.innerText = texto;
}

document.addEventListener('click', 
/* chama a função abaixo cada vez que um botão é clicado */
 function(e) {
      if(document.activeElement.toString() == '[object HTMLButtonElement]')
      /* caso algum elemento ativo seja um botão*/
      {document.activeElement.blur(); }
      /* tira o foco do botão*/
             }           );

document.onkeydown = function ChecaTecla(tecla) {
    console.log("verificando tecla");/*
    document.getElementById("myAnchor").blur();
    var list = document.getElementsByTagName("button")[0];
    list.getElementsByTagName("button").blur();*/
    // função "anônima" (termo técnico) para verificar qual tecla foi pressionada    
    if (event.keyCode == 8) {
        console.log("a tecla ← foi pressionada");
        // tecla ←
        ApagarDigito();
    }

    if (event.keyCode == 13) {
        console.log("a tecla ↩ ↵ ⏎ foi pressionada");
        // tecla ↩ ↵ ⏎
        Resultado();
    }

    if (event.keyCode > 47 && event.keyCode < 57) {
        console.log("a tecla faz parte do teclado !@#$%");
        // se foi pressionada algum número do teclado comum
        var x = event.keyCode - 48;
        // pega o valor do keycode e subtrai 48
        // 48 é o valor do keycode da tecla 0 do teclado comum
        Concatenar(x);
        //manda o valor para a função concatenar
    }

    if (event.keyCode > 95 && event.keyCode < 106) {
        console.log("a tecla faz parte do teclado numérico");
        // se foi pressionada algum número do teclado NUMÉRICO
        var x = event.keyCode - 96;
        // pega o valor do keycode e subtrai 96
        // 96 é o valor do keycode da tecla 0 do teclado NUMÉRICO
        Concatenar(x);
        //manda o valor para a função concatenar
    }

    if (event.keyCode == 106) {
        console.log("tecla * presssionada");
        Multiplicar();
    }
    if (event.keyCode == 107) {
        console.log("tecla + pressionada");
        Somar();
    }
    if (event.keyCode == 109) {
        console.log('tecla "-" pressionada');
        Subtrair();
    }
    if (event.keyCode == 111) {
        console.log("tecla ÷ pressionada");
        Dividir();
    }

    if (event.keyCode == 187) {
        console.log("a tecla = foi pressionada");
        // tecla =§
        Resultado();
    }
    if (event.keyCode == 189) {
        console.log('tecla "-" pressionada');
        Subtrair();
        // tecla hífen
    }
}

function negate(params) {
    return params * -1;
}