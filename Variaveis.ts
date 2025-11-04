// let identificador_da_variavel: tipo = valor;
let variavel: any = "Chapée"
variavel = 123
variavel = true;

let aprovado: boolean = true;

let peso: number = 75.50;
let idade: number = 25;
let nome: string = "Andrey";

console.log(`Bom dia ${nome}! Seu peso é ${peso} e a sua idade é ${idade} anos`)
let sobrenome = "Rosa";
let anoNascimento = 2004;

console.log(`Tipo da variavel sobrenome: ${typeof sobrenome}`)
console.log(`Tipo da variavel anoNascimento: ${typeof anoNascimento}`)

// Null e undefined
let cliente: any = null;

let ano: number | undefined;
console.log(ano);

// NaN
let numero = Number("123");
console.log(numero)
// Infinity
let a = 1 / 0;
console.log(a)
// Constantes
const QUANTIDADE: number = 10;
const PORT: number = 3000;
