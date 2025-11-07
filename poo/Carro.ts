export class Carro{
  // atributos
  private _fabricante: string = "";
  private _modelo: string = "";
  private _cor: string = "";
  private _tipoCombustivel: string = "";
  private _valorDeMercado: number = 0;

  constructor(fabricante: string, modelo: string, cor: string, tipoCombustivel: string, valorDeMercado: number){
    this._fabricante = fabricante;
    this._modelo = modelo;
    this._cor = cor;
    this._tipoCombustivel = tipoCombustivel;
    this._valorDeMercado = valorDeMercado;
  }

  public get fabricante(): string{
    return this._fabricante;
  }
  public get modelo(): string{
    return this._modelo;
  }
  public get cor(): string{
    return this._cor;
  }
  public get tipoCombustivel(): string{
    return this._tipoCombustivel;
  }
  public get valorDeMercado(): number{
    return this._valorDeMercado;
  }

  public set fabricante(fabricante: string){
    this._fabricante = fabricante;
  }
  public set modelo(modelo: string){
    this._modelo = modelo;
  }
  public set cor(cor: string){
    this._cor = cor;
  }
  public set tipoCombustivel(tipoCombustivel: string){
    this._tipoCombustivel = tipoCombustivel;
  }
  public set valorDeMercado(valorDeMercado: number){
    this._valorDeMercado = valorDeMercado;
  }
  
  public ligar(): void{
    console.log(`${this._modelo}`)
  }

  public acelerar(velocidade: number): void{
    console.log(`${this._modelo} está acelerando para ${velocidade} km/h`)
  }

  public freiar(): void{
    console.log(`${this._modelo} está freiando`)
  }

  public abastecer(litros: number, precoPorLitro: number): number{
    return litros * precoPorLitro
  }

  public desligar(): void{
    console.log(`${this._modelo} está desligado`)
  }

  public exibirDetalhes(): void{
    console.log("******* Detalhes do Carro *******")
    console.log(`Fabricante: ${this._fabricante}`);
    console.log(`Modelo: ${this._modelo}`);
    console.log(`Cor: ${this._cor}`);
    console.log(`Tipo de combustível: ${this._tipoCombustivel}`);
    console.log(`Valor de mercado: R$ ${this._valorDeMercado}`);
    console.log("**********************************")
  }

}
