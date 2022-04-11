import { HttpResponse } from './http-response'

export interface HttpGetClient<T> {
  get(url: string): Promise<HttpResponse<T>>
}
