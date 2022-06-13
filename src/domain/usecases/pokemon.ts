import { PokemonDetails, ListPokemons } from '@/domain/models/pokemon-model'

export interface IPokemon {
  findAll(): Promise<ListPokemons[]>
  findById(): Promise<PokemonDetails>
}
