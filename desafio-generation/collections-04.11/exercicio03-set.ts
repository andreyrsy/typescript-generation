import readlinesync = require("readline-sync");

const numeros: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

const numeroProcurado: number = readlinesync.questionInt("Digite o numero que você deseja encontrar:");

if (numeros.has(numeroProcurado)) {
    console.log("O número " + numeroProcurado + " foi encontrado!");
} else {
    console.log("O número " + numeroProcurado + " não foi encontrado!");
}
