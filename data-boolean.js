// os dados booleanos são usados para saber se determinação "situalção" é real ou não.
// seus valores são [true (verdadeiro)] e [false (falso)]
let boleano1 = true;
let boleano2 = false;

console.log(boleano1, boleano2);

// os boleanos são usados muitas vezes com os operadores de comparação;

function mostraTRUE(){
    if(boleano1){
        console.log('mostra mensagem');
    }
};

function mostraFALSE(){
    if(boleano2){
        console.log('não mostra mensagem');
    };
};

console.log(mostraTRUE(), mostraFALSE());

// tambem ha 2 termos chamados de truthy e falsy, são usados para saber se algum valor sera retornado como true ou false;