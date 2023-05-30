//template literal é um jeito mais facil de ""concatenar"" varias coisas, porem ao inves de usar o + no console.log por exemplo, usamos o ${codigo ou variavel};

let anoAtual = 2023;
let anoNascimento = 2003;
let nome = "casimiro";
let idade = anoAtual - anoNascimento;
let nacionalidade = "Brasil";

console.log("concatenção: ola, me chamo "+nome+" e tenho "+idade+" anos, e nasci no "+nacionalidade);
console.log(`template: ola, me chamo ${nome} e tenho ${idade} anos, e nasci no ${nacionalidade}`);