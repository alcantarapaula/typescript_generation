'use stric'

import rs = require('readline-sync');
import Stack = require('./stack');

const stack = new Stack<string>();


stack.push('Rafael');
stack.push('Aimee');
stack.push('Vitória');
// stack.push(rs.question('Digite um nome: '));
console.log('Pilha original: ');
stack.printStack();

stack.pop();
console.log('Nova pilha: ')
stack.printStack();

console.log('Tamanho da stack: ', stack.count());

console.log('A Vitória está na stack? ', stack.contains('Vitória'));