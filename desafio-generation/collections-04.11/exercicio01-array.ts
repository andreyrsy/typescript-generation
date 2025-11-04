import readlinesync = require("readline-sync");

const colecao = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

const numeroProcurado: number = readlinesync.questionInt("Digite o numero que voce deseja encontrar:");

const posicao = colecao.indexOf(numeroProcurado);

if (posicao !== -1) {
  console.log(`O número ${numeroProcurado} está localizado na posição: ${posicao}`);
} else {
  console.log(`O número ${numeroProcurado} não foi encontrado!`);
}