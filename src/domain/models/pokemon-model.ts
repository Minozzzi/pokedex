export type IPokemonProps = {
  count: number
  next: string | null
  previous: string | null
  result: {
    name: string
    url: string
  }[]
}
