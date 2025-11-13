interface Pessoa {
    nome: string,
    peso: number,
    altura: number
}

const pessoas: Pessoa[] = [
    { nome: "Ana", peso: 55, altura: 1.60 },
    { nome: "Andrey", peso: 80, altura: 1.76 },
    { nome: "Jeferson", peso: 70, altura: 1.68 }
]

const calcularIMC = (peso: number, altura: number): number =>
    peso / (altura*altura);

pessoas.forEach((pessoa: Pessoa) => {
    const imc = calcularIMC(pessoa.peso, pessoa.altura)
    console.log(`${pessoa.altura} - IMC ${imc.toFixed(2)}`)
})
