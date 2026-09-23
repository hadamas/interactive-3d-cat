import { render, screen } from '@testing-library/react'
import Loader from './Loader.jsx'

describe('Loader', () => {
  it('mostra o texto padrão', () => {
    render(<Loader />)
    expect(screen.getByRole('status')).toHaveTextContent('Carregando...')
  })

  it('aceita um texto customizado', () => {
    render(<Loader label="Carregando modelo" />)
    expect(screen.getByRole('status')).toHaveTextContent('Carregando modelo')
  })
})
