import { HttpGetClient } from '@/data/protocols/http/http-get-client'

export class RemotePokemon {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient
  ) {}

  async findAll(): Promise<void> {
    await this.httpGetClient.get(this.url)
  }
}
