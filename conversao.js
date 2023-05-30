// o JS as vezes faz uma conversão de valores, troca um tipo de valor para outro. por exemplo trocar uma string pra number.
// e ha duas formas que os js troca.
/* 
implicita{
    --quando o js muda valores sem você perceber, como esta no exemplo;    
}

explicita{
    --quando VOCÊ troca os tipos de valores com por exemplo uma função; como no exemplo
}
*/

let var1 = "1234";
let var2 = 5678;

console.log(var1 + var2); // aqui ha uma conversão implicita, pois o mudou o tipo var2 de number pra string, e o resultado vira 12345678;
console.log(var2 + var1); // muda o var1 de number pra string;

// explicita:
console.log(+var1 + +var2);
console.log(Number(var1) + var2);
console.log(var1 + String(var2));

//para identificar um tipo podemos usar o typeof, ex:

console.log(typeof var1, typeof var2);