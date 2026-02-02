'use strict'

import rs = require('readline-sync');

const participantes: Map<number, string> = new Map<number,string>();

participantes.set(1, 'Ana');
participantes.set(2, 'Bianca');
participantes.set(3, 'Jeaninny');
participantes.set(4, 'Paula');

let matricula = rs.questionInt('Digite o numero da matricula: ');
let nome = rs.question('Digite o nome do participante: ');

participantes.set(matricula, nome);


for (let [matrícula, nome] of participantes) {
  console.log(`Matrícula: ${matrícula} - Nome: ${nome}`)
};

console.log('Existe a matrícula 2?', participantes.has(2));

console.log(participantes.values());

console.log('Existe a participante Ana?', Array.from(participantes.values()).includes('Ana'));

for(let matricula of participantes.keys()){
  console.log(matricula)
};

console.log('Qual o participante com matrícula 3?', participantes.get(3));


