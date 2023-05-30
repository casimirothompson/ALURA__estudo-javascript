// existem operadores de comparação e operações matematicos tambem;
// entre os comparadores temos [==] e [===], onde:
// == compara valores, e === compara valores e tipos;

let var1 = "string";
let var2 = 12;
let var3 = "12345";
let var4 = 12345; 

console.log(var1 == var2) // var1 e var2 tem valores diferentes;
console.log(var1 == var3); // os 2 são strings porem tem valores diferentes.
console.log(var3 == var4); // apesar de serem tipos de dados diferentes, são valores iguais.
console.log(var3 === var4); // valores são iguais, porem o tipo não;

// temos tambem o != !==, onde:
// a != b --> campara se a é diferente de b [valores];
// a !== b --> compara se a é extritamente diferente de b [tanto em tipo quanto em valor]

let var5 = "string";
let var6 = 12;
let var7 = "12345";
let var8 = 12345; 

console.log(var7 != var8); // ve se var7 é diferente de var8, os dois tem valores 12345, porem de tipos diferentes, logo são iguais;
console.log(var7 !== var8); // ve se var7 é diferente de var8 em valores e tipos, ele retornara true

/*
temos opeardores matematicos que são:
soma: +
subtração: -
multiplicação: *
divisão: /
resto da divisão: %
*/

// operador de [e] é o [&&]
// operador de [ou] é o [||]
// 
// 

// console.log();
// console.log();
// console.log();