import { render, screen } from '@testing-library/react'
import Header from './Header.jsx'

describe('Header', () => {
  it('renderiza o título principal', () => {
    render(<Header />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('3D Animated Project')
  })
})
