'use strict'

/* 
Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string, para organizar uma fila por ordem de chegada dos Clientes de um Banco. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
2: Listar todos os Clientes na fila
3: Chamar (retirar) uma pessoa da fila 
0: O programa deve ser finalizado. 
Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar retirar (chamar) um cliente da fila.
*/

import rs = require('readline-sync');
import Queue = require('../queue');

const clientes = new Queue<string>();
let sair: boolean = false;

while (!sair) {
  console.log('----- SELECIONE UMA OPÇÃO -----');
  console.log('1 - Adicionar Cliente na Fila -');
  console.log('2 - Listar todos os Clientes --');
  console.log('3 - Retirar Cliente da Fila ---');
  console.log('0 - Sair ----------------------');

  let botao = rs.questionInt('Digite uma opcao: ', {limitMessage: 'Opcao invalida, tente novamente: '});

  if(botao === 1) {
    clientes.enqueue(rs.question('Digite o nome do cliente: '));
    console.log('Fila: ');
    clientes.printQueue();
    console.log('Cliente adicionado!');
  } else if(botao === 2) {
    console.log('Lista de clientes na fila: ');
    clientes.printQueue();
  } else if (botao === 3) {
    if(clientes.isEmpty()) {
      console.log('A fila está vazia.');
    } else {
      clientes.dequeue();
      console.log('Fila: ');
      clientes.printQueue();
    }
  } else if (botao === 0) {
    console.log('Programa finalizado!')
    sair = true;
  } else (
    botao = rs.questionInt('Opcao invalida, tente novamente: ')
  )
}