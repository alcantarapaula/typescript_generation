'use stric'

import rs = require('readline-sync');

const numerosArr: Array<number> = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
const numerosSet: Set<number> = new Set(numerosArr);

console.table(numerosSet);

let numero: number = rs.questionInt('Pesquise um numero inteiro: ');
let check: boolean = numerosSet.has(numero);

if(!check) {
  console.log(`O número ${numero} não foi encontrado. =(`)
} else {
  console.log(`O número ${numero} foi encontrado!`)
};