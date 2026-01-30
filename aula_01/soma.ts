'use strict'

import rs = require('readline-sync');
 
let numero1, numero2: number;

numero1 = rs.questionFloat('Digite o primeiro numero: ');
numero2 = rs.questionFloat('Digite o segundo numero: ');

console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`);