import { IPokemonProps } from '../models/pokemon-model'

export interface IPokemon {
  findAll(): Promise<IPokemonProps[]>
}
