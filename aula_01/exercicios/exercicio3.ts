'use stric'

import rs = require('readline-sync');

const numeros: Set<number> = new Set<number>();

while(numeros.size < 10) {
  numeros.add(rs.questionInt('Digite um numero inteiro: '));
};

console.table(numeros);