'use strict'

import rs = require('readline-sync');

const cores: Set<string> = new Set<string>();

cores.add('Azul');
cores.add('Anil');
cores.add('Índigo');
cores.add('Cobalto');
cores.add('Turquesa');

console.table(cores);

console.log('A cor Cobalto existe?', cores.has('Cobalto'));

cores.delete('Anil');

for (let cor of cores) {
  console.log(cor)
};