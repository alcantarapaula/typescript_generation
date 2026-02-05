import { Ciclista } from "./ICiclista";
import { Corredor } from "./ICorredor";
import { Nadador } from "./INadador";
import { Pessoa } from "./Pessoa";

export class TriAtleta extends Pessoa implements Ciclista, Corredor, Nadador{

  public aquecer(): void {
    console.log('Triatleta Aquecendo');
  }
  public cansar(): void {
    console.log('Triatleta Cansou');
  }
  public dormir(): void {
    console.log('Triatleta Dormiu')
  }

  pedalar(): void {
    console.log('Triatleta Pedalando');
  }
  correr(): void {
    console.log('Triatleta Correndo');
  }
  nadar(): void {
    console.log('Triatleta Nadando');
  }

};