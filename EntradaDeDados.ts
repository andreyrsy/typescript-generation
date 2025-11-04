import readlinesync = require("readline-sync");


let quantidade: number;
let altura: number;
let nome: string;

quantidade = readlinesync.questionInt("\nDigite a quantidade: ",
    {limitMessage: "digite um numero inteiro!"}
);

console.log(`A quantidade é ${quantidade}`)

altura = readlinesync.questionFloat("Digite a sua altura: ",
    {limitMessage: "Digite um numero decimal!"}
);
console.log(`A sua altura é ${altura}`);

nome = readlinesync.question("\nDigite o seu nome: ")
console.log(`Seu nome é ${nome}`);