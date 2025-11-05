import { Stack } from "../../estrutura-dados/Stack";
import readlinesync = require("readline-sync")

let option: number;

const pilha = new Stack<string>();

do {
  console.log("--------------------------------------------");
  console.log("1 - Adicionar livro na pilha");
  console.log("2 - Listar todos os livros");
  console.log("3 - Retirar um livro da pilha");
  console.log("0 - Sair");
  console.log("--------------------------------------------");
  option = readlinesync.questionInt("Entre com a opcao desejada: ");

  switch (option) {
    case 1:
      let livro = readlinesync.question("\nDigite o nome: ");
      pilha.push(livro);
      console.log("\n")
      pilha.printStack();
      console.log("\nLivro adicionado!");
      break;
    case 2:
    case 2:
      console.log("\nLista de Livros na Pilha:");
      pilha.printStack();
      break;
    case 3:
      console.log("\nPilha:")
      pilha.pop();
      pilha.printStack();
      console.log("\nUm livro foi retirado da pilha!")
      break;
    default:
      console.log("Programa finalizado!")
      break;
  }

} while (option != 0);