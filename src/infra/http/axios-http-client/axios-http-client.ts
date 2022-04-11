import axios from 'axios'

export class AxiosHttpClient {
  async get(url: string): Promise<void> {
    await axios.get(url)
  }
}
