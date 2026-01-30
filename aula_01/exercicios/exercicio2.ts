'use stric'

import rs = require('readline-sync');

const numeros: Array<number> = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

console.table(numeros)

let index = numeros.indexOf(rs.questionInt('Pesquise um numero inteiro entre 1 e 10: '));

while (index < 0) {
  console.log('Número inválido!')
  index = numeros.indexOf(rs.questionInt('Pesquise novamente: '));
};

console.log(`A posção do seu número é: ${index}`);
