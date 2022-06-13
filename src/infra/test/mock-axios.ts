import { faker } from '@faker-js/faker'
import axios from 'axios'

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.get.mockResolvedValue({
    data: {
      email: faker.internet.email(),
      password: faker.internet.password()
    },
    status: faker.random.numeric() // ToDo: change to faker.internet.httpStatusCode()
  })

  return mockedAxios
}
