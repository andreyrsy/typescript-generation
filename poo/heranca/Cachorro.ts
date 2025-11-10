import { Animal } from "./Animal";

export class Cachorro extends Animal {

  constructor(nome: string, idade: number) {
    super(nome, idade);
  }

  public emitirSom(): void {
    console.log(`${this._nome} está latindo: Au Au Au!`);
  }

  public correr(): void {
    console.log(`${this._nome} está correndo!`);
  }
}