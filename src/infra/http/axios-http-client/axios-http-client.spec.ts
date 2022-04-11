import axios from 'axios'

import { AxiosHttpClient } from './axios-http-client'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => new AxiosHttpClient()

describe('AxiosHttpClient', () => {
  it('should call axios with correct URL and verb', async () => {
    const sut = makeSut()
    sut.get('any_url')
    expect(mockedAxios.get).toHaveBeenCalledWith('any_url')
  })
})
