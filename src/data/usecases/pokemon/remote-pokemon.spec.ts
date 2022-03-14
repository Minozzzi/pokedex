import { RemotePokemon } from './remote-pokemon'
import { HttpGetClientSpy } from '@/data/test/mock-http-client'

type SutTypes = {
  sut: RemotePokemon
  httpGetClientSpy: HttpGetClientSpy
}

const makeSut = (url = 'any_url'): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy()
  const sut = new RemotePokemon(url, httpGetClientSpy)

  return {
    sut,
    httpGetClientSpy
  }
}

describe('RemotePokemon', () => {
  it('should call HttpGetClient with correct URL', async () => {
    const url = 'other_url'
    const { sut, httpGetClientSpy } = makeSut(url)
    await sut.findAll()
    expect(httpGetClientSpy.url).toBe(url)
  })
})
