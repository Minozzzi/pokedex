import { faker } from '@faker-js/faker'

import { RemotePokemon } from './remote-pokemon'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { HttpGetClientSpy } from '@/data/test/mock-http-get-client'
import { UnexpectedError } from '@/domain/errors/unexpected-error'
type SutTypes = {
  sut: RemotePokemon
  httpGetClientSpy: HttpGetClientSpy
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy()
  const sut = new RemotePokemon(url, httpGetClientSpy)

  return {
    sut,
    httpGetClientSpy
  }
}

describe('RemotePokemon', () => {
  it('should call HttpGetClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpGetClientSpy } = makeSut(url)
    await sut.findAll()
    expect(httpGetClientSpy.url).toBe(url)
  })

  it('should throw UnexpectedError if HttpGetClient returns 400', async () => {
    const { httpGetClientSpy, sut } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }
    const promise = sut.findAll()
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  it('should throw UnexpectedError if HttpGetClient returns 500', async () => {
    const { httpGetClientSpy, sut } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }
    const promise = sut.findAll()
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  it('should throw UnexpectedError if HttpGetClient returns 404', async () => {
    const { httpGetClientSpy, sut } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }
    const promise = sut.findAll()
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
})
