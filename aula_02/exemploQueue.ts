'use stric'

import rs = require('readline-sync');
import Queue = require('./queue');

const fila = new Queue<string>();

fila.enqueue('Rafael');
fila.enqueue('Aimee');
fila.enqueue('Vitória');
// fila.enqueue(rs.question('Digite um nome: '));

fila.printQueue();

fila.dequeue();

fila.printQueue();

console.log('Tamanho da fila: ', fila.count());

console.log('A Vitória está na fila? ', fila.contains('Vitória'));