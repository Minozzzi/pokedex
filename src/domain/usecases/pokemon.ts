import { IPokemonProps } from '@/domain/models/pokemon-model'

export interface IPokemon {
  findAll(): Promise<IPokemonProps[]>
}
