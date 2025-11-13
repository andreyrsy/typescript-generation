// (lista de parametros) => { expressao }

const numeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];
numeros.forEach(n => console.log(n))

const funcao = (n: number) => console.log(n);

const somar = (n1: number, n2: number) => n1 + n2;
// const impar = (n1: number) => n1 % 2 ==0;
// console.log(`É Par: ${impar(7)}`);
console.log(`Resultado da soma: ${somar(1, 2)}`);


numeros.forEach(n => {
    if(n % 2 == 0){
        console.log("É par!")
    }
})




