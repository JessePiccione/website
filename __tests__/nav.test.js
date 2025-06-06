import { render, fireEvent } from '@testing-library/react'
import Nav from '@/components/nav'

it('toggles menu button aria-expanded attribute', () => {
  const { getByLabelText } = render(<Nav />)
  const button = getByLabelText('Open navigation menu')
  expect(button).toHaveAttribute('aria-expanded', 'false')
  fireEvent.click(button)
  expect(button).toHaveAttribute('aria-expanded', 'true')
})
