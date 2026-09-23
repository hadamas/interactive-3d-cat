import { render, screen } from '@testing-library/react'
import Footer from './Footer.jsx'

describe('Footer', () => {
  it('credita o autor do modelo 3D', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'SOBOL' })).toHaveAttribute(
      'href',
      'https://sketchfab.com/sbl-cool',
    )
  })
})
