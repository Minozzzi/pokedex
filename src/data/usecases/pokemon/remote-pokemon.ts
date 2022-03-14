import { HttpGetClient } from '@/data/protocols/http/http-get-client'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { UnexpectedError } from '@/domain/errors/unexpected-error'

export class RemotePokemon {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient
  ) {}

  async findAll(): Promise<void> {
    const httpResponse = await this.httpGetClient.get(this.url)

    if (httpResponse.statusCode === HttpStatusCode.ok) {
      return
    }

    throw new UnexpectedError()
  }
}
