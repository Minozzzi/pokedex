import { HttpGetClient } from '../../protocols/http/http-get-client'
import { RemotePokemon } from './remote-pokemon'

describe('RemotePokemon', () => {
  it('should call HttpGetClient with correct URL', async () => {
    class HttpGetClientSpy implements HttpGetClient {
      url?: string
      async get(url: string): Promise<void> {
        this.url = url
      }
    }

    const url = 'any_url'
    const httpGetClientSpy = new HttpGetClientSpy()
    const sut = new RemotePokemon(url, httpGetClientSpy)
    await sut.findAll()
    expect(httpGetClientSpy.url).toBe(url)
  })
})
