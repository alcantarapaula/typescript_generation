import { Jogador } from "./Jogador";
import { TriAtleta } from "./TriAtleta";

const triatleta = new TriAtleta('Bianca');

triatleta.visualizar();
triatleta.aquecer();
triatleta.cansar();
triatleta.correr();
triatleta.nadar();
triatleta.pedalar();
triatleta.dormir();

console.log('-------------------');

const jogador = new Jogador('Jeaninny');

jogador.visualizar();
jogador.aquecer();
jogador.correr();
jogador.cansar();
jogador.dormir();