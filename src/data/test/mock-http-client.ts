import { HttpGetClient } from '../protocols/http/http-get-client'

export class HttpGetClientSpy implements HttpGetClient {
  url?: string
  async get(url: string): Promise<void> {
    this.url = url
  }
}
