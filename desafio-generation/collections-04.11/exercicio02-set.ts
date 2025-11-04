import readlinesync = require("readline-sync");

let numerosSet: Set<number> = new Set<number>();

for (let i = 0; i < 10; i++) {
    let numero: number = readlinesync.questionInt("Digite um numero inteiro nao repetido:");
    numerosSet.add(numero);
}

console.log("Listar dados do Set:");
for (let item of numerosSet) {
    console.log(item);
}
