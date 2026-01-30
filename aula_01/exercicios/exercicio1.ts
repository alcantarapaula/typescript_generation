'use stric'

import rs = require('readline-sync');

const cores: Array<string> = new Array<string>;

for(let i = 0; i < 5; i++) {
  cores[i] = rs.question('Digite o nome de uma cor: ');
};

console.log('Tabela de cores original:')
console.table(cores);

cores.sort();

console.log('Tabela de cores organizada:')
console.table(cores);

