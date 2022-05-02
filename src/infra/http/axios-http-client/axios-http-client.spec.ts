import { faker } from '@faker-js/faker'
import axios from 'axios'

import { AxiosHttpClient } from './axios-http-client'
import { mockAxios } from '@/infra/test'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()

  return {
    sut,
    mockedAxios
  }
}

describe('AxiosHttpClient', () => {
  it('should call axios with correct URL and verb', async () => {
    const url = faker.internet.url()
    const { sut, mockedAxios } = makeSut()
    await sut.get(url)
    expect(mockedAxios.get).toHaveBeenCalledWith(url)
  })

  it('should return the correct status code and body', () => {
    const { sut, mockedAxios } = makeSut()
    const promise = sut.get(faker.internet.url())
    const [resolvedValue] = mockedAxios.get.mock.results

    expect(promise).toEqual(resolvedValue.value)
  })
})
