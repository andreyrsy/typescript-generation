import { Queue } from "../../estrutura-dados/Queue";
import readlinesync = require("readline-sync")

const fila = new Queue<string>();

let option: number;

do {
  console.log("1 - Adicionar Cliente na fila");
  console.log("2 - Listar todos os Clientes");
  console.log("3 - Retirar Cliente da Fila");
  console.log("0 - Sair");
  console.log("--------------------------------------------")
  option = readlinesync.questionInt("Entre com a opcao desejada: ");

  switch (option) {
    case 1:
      let cliente = readlinesync.question("\nNome do cliente: ")
      fila.enqueue(cliente);
      fila.printQueue();
      console.log("\nCliente adicionado!\n")
      break;
    case 2:
      console.log("\nLista de clientes na fila: ")
      fila.printQueue();
      console.log("--------------------------------------------");
      break;
    case 3:
      fila.dequeue();
      fila.printQueue();
      console.log("--------------------------------------------\n");
      break;
    default:
      console.log("Programa Finalizado!")
      break;
  }

} while (option != 0);
