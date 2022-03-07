import { render } from '@testing-library/react'

import { Navbar } from '.'

describe('Navbar', () => {
  it('should render', () => {
    render(<Navbar />)

    expect(true).toBe(true)
  })
})
