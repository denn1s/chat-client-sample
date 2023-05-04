import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import Eye from './Eye.jsx'

describe('Eye component', () => {
  it('Renders correctly', () => {
    render(<Eye />)
  })
  it('Renders an eye', () => {
    render(<Eye />)

    const element = screen.getByText('👁')
    expect(element).toBeInTheDocument()
  })
  it('Renders an open eye', () => {
    render(<Eye open />)

    const element = screen.getByText('👁')
    expect(element.style.color).toBe('rgb(17, 17, 17)')
  })
  it('Renders a closed eye', () => {
    render(<Eye />)

    const element = screen.getByText('👁')
    expect(element.style.color).toBe('rgb(221, 221, 221)')
  })
  it('Can be clicked', () => {
    const spy = vi.fn()
    render(<Eye onToggle={spy} />)

    const element = screen.getByText('👁')
    fireEvent.click(element)

    expect(spy).toHaveBeenCalled()
  })
  it('Can be clicked 5 times', () => {
    const spy = vi.fn()
    render(<Eye onToggle={spy} />)

    const element = screen.getByText('👁')
    fireEvent.click(element)
    fireEvent.click(element)
    fireEvent.click(element)
    fireEvent.click(element)
    fireEvent.click(element)

    expect(spy).toHaveBeenCalledTimes(5)
  })
})