import axios from 'axios'

import { HttpGetClient } from '@/data/protocols/http/http-get-client'
import { HttpResponse } from '@/data/protocols/http/http-response'

export class AxiosHttpClient implements HttpGetClient<unknown> {
  async get(url: string): Promise<HttpResponse<unknown>> {
    const httpResponse = await axios.get(url)
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data
    }
  }
}
