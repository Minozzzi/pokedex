import axios from 'axios'

import { AxiosHttpClient } from './axios-http-client'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => new AxiosHttpClient()

describe('AxiosHttpClient', () => {
  it('should call axios with correct URL and verb', async () => {
    const url = 'http://any_url'
    const sut = makeSut()
    sut.get(url)
    expect(mockedAxios.get).toHaveBeenCalledWith(url)
  })
})
