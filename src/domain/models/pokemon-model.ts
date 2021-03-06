type Abilities = {
  ability: {
    name: string
  }
  slot: number
}[]

type Types = {
  slot: number
  type: {
    name: string
  }
}[]

type Stats = {
  base_stat: number
  effort: number
  stat: {
    name: string
  }
}[]

export type ListPokemons = {
  count: number
  next: string | null
  previous: string | null
  result: {
    name: string
    url: string
  }
}

export type PokemonDetails = {
  height: number
  weight: number
  abilities: Abilities
  types: Types
  stat: Stats
}
