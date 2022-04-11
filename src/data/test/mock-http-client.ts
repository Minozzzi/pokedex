import { HttpGetClient } from '@/data/protocols/http/http-get-client'
import {
  HttpResponse,
  HttpStatusCode
} from '@/data/protocols/http/http-response'

export class HttpGetClientSpy implements HttpGetClient<unknown> {
  url?: string
  response: HttpResponse<unknown> = {
    statusCode: HttpStatusCode.ok
  }

  async get(url: string): Promise<HttpResponse<unknown>> {
    this.url = url
    return Promise.resolve(this.response)
  }
}
