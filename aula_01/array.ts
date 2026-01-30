'use strict'

import rs = require('readline-sync');

const numeros: Array<number> = new Array<number>();

numeros.push(5);
numeros.push(1, 5, 7, 9);
numeros.push(rs.questionInt('Digite um numero:'));

// console.table(numeros);

for(let numero of numeros) {
  console.log(numero)
};

// console.log('O número 5 existe?', numeros.includes(5));
// console.log('O índice do número 7', numeros.indexOf(5));

numeros.splice(numeros.indexOf(7), 2);
console.table(numeros);



