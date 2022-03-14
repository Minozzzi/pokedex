import { IPokemonProps, IPokemonsProps } from '@/domain/models/pokemon-model'

export interface IPokemon {
  findAll(): Promise<IPokemonsProps[]>
  findById(): Promise<IPokemonProps>
}
