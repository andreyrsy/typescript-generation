import { Ciclista } from "./interfaces/Ciclista";
import { Corredor } from "./interfaces/Corredor";
import { Nadador } from "./interfaces/Nadador";
import { Pessoa } from "./Pessoa";

export class Triatleta extends Pessoa implements Ciclista, Corredor, Nadador {
  nadar(): void {
    console.log("Triatleta esta nadando")
  }
  correr(): void {
    console.log("Ciclista esta correndo.")
  }
  pedalar(): void {
    console.log("Ciclista esta pedalando")
  }
  aquecer(): void {
    console.log("Esta aquecendo.");

  }
  public alimentar(): void {
    console.log("Esta se alimentando")
  }

}