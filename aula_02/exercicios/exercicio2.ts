'use strict'

/* 
Escreva um programa contendo uma Collection Stack (Pilha) de Objetos string, para organizar a retirada de livros de uma pilha. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
2: Listar todos os livros da Pilha
3: Retirar um livro da pilha 
0: O programa deve ser finalizado. 
Caso a pilha esteja vazia, ao tentar retirar um livro da pilha, o programa deverá informar que a pilha está vazia.

*/

import rs = require('readline-sync');
import Stack = require('../stack');

const livros = new Stack<string>();
let sair: boolean = false;

while (!sair) {
  console.log('----- SELECIONE UMA OPÇÃO ---');
  console.log('1 - Adicionar Livro a Pilha -');
  console.log('2 - Listar todos os Livros --');
  console.log('3 - Retirar Livro da Pilha --');
  console.log('0 - Sair --------------------');

  let botao = rs.questionInt('Digite uma opcao: ', {limitMessage: 'Opcao invalida, tente novamente: '});

  if(botao === 1) {
    livros.push(rs.question('Digite o nome do livro: '));
    console.log('Pilha: ');
    livros.printStack();
    console.log('Livro adicionado!');
  } else if(botao === 2) {
    console.log('Lista de livros na pilha: ');
    livros.printStack();
  } else if (botao === 3) {
    if(livros.isEmpty()) {
      console.log('A pilha está vazia.');
    } else {
      livros.pop();
      console.log('Pilha: ');
      livros.printStack();
    }
  } else if (botao === 0) {
    console.log('Programa finalizado!')
    sair = true;
  } else (
    botao = rs.questionInt('Opcao invalida, tente novamente: ')
  )
}