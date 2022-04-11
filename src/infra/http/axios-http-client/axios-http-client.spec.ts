import axios from 'axios'
import faker from 'faker'

import { AxiosHttpClient } from './axios-http-client'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedAxiosResponse = {
  data: faker.random.objectElement(),
  status: faker.datatype.number()
}
mockedAxios.get.mockResolvedValue(mockedAxiosResponse)

const makeSut = (): AxiosHttpClient => new AxiosHttpClient()

describe('AxiosHttpClient', () => {
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
