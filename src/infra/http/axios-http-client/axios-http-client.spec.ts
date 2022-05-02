import { faker } from '@faker-js/faker'
import axios from 'axios'

import { AxiosHttpClient } from './axios-http-client'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedAxiosResponse = {
  data: {
    email: faker.internet.email(),
    password: faker.internet.password()
  },
  status: faker.random.numeric()
}

const makeSut = (): AxiosHttpClient => new AxiosHttpClient()

describe('AxiosHttpClient', () => {
  beforeEach(() => mockedAxios.get.mockResolvedValue(mockedAxiosResponse))
  afterEach(() => jest.clearAllMocks)

  it('should call axios with correct URL and verb', async () => {
    const url = faker.internet.url()
    const sut = makeSut()
    await sut.get(url)
    expect(mockedAxios.get).toHaveBeenCalledWith(url)
  })

  it('should return the correct status code and body', async () => {
    const sut = makeSut()
    const httpResponse = await sut.get(faker.internet.url())
    expect(httpResponse).toEqual({
      statusCode: mockedAxiosResponse.status,
      body: mockedAxiosResponse.data
    })
  })
})
