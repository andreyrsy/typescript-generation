import { Carro } from "./Carro";

const carro = new Carro("Toyota", "Corolla", "Prata", "Flex", 95000);

carro.fabricante = "Toyota";
// carro.modelo = "Corolla";
// carro.cor = "Prata";
// carro.tipoCombustivel = "Flex";
carro.valorDeMercado = 95000;

// console.log(`Fabricante: ${carro.fabricante}`);
// console.log(`Modelo: ${carro.modelo}`);
// console.log(`Cor: ${carro.cor}`);
// console.log(`Tipo de combustível: ${carro.tipoCombustivel}`);
// console.log(`Valor de mercado: R$ ${carro.valorDeMercado}`);

carro.ligar();
carro.acelerar(150);
carro.freiar();
carro.acelerar(80);
let preco = carro.abastecer(30, 6.50);
console.log(`Abastecido com R$${preco.toFixed(2)}`);
carro.exibirDetalhes();




