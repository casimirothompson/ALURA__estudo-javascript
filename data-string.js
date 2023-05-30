// o tipo string é basicamente um dado que fica entre aspas, seja dupla, simples ou com crase("", '', ``)

let string1 = "COM ASPAS DUPLAS";
let string2 = 'com aspas simples';
let string3 = `com crase`;
let nome = "casimiro";

// tambem é possível juntar strings umas com as outras atraves da concatenação.
// concatenação usamos o simbolo + para juuntar uma string com a outra;

console.log(string1 + string2);
console.log('meu nome é '+nome);

// tambem é possível manipular as strings de varias formas, como:

console.log(string1.toLowerCase()); // transforma as letras em minusculas;
console.log(string2.length) // mostra a quantidade de caracteres da tal string [e os espaços tbm...];