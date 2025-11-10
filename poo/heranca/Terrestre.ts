import { Transporte } from "./Transporte";

export class Terrestre extends Transporte {
  private _numeroRoda: number;
  private _velocidade: number;

  constructor(capacidade: number, numeroRoda: number, velocidade: number) {
    super(capacidade);
    this._numeroRoda = numeroRoda;
    this._velocidade = velocidade;
  }

  public get numeroRoda() {
    return this._numeroRoda
  }

  public set numeroRoda(numeroRoda: number) {
    this._numeroRoda = numeroRoda;
  }

  public get velocidade() {
    return this._velocidade;
  }
  public set velocidade(velocidade: number) {
    this._velocidade = velocidade;
  }

  public visualizar(): void{
    super.visualizar();
    console.log(`Número de rodas: ${this._numeroRoda}`);
    console.log(`Velocidade: ${this._velocidade} km/h`);
  }
}