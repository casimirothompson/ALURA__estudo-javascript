//operador ternario é um tipo de dado como se fosse o if(){}else{} escrito em 1 linha.
/*
no if temos:
if (condição pra verdadeiro){
    codigo
}else {
    codigo
}

no operador ternario é:
    condição ? se for verdade faz : senão for faz

*/

const nome = "Leo";
let idade = 23;
// idade = 16;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";
const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)