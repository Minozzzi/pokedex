import axios from 'axios'

import { AxiosHttpClient } from './axios-http-client'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('AxiosHttpClient', () => {
  it('should call axios with correct url', async () => {
    const sut = new AxiosHttpClient()
    sut.get('any_url')
    expect(mockedAxios).toHaveBeenCalledWith('any_url')
  })
})
