import { render, screen, waitFor } from '@testing-library/react'
import NavList from '@/components/navlist'
import AdminPage from '@/app/admin/page'
import { UserContext } from '@/components/providers/user'

describe('admin navigation link', () => {
  it('shows link for admin', () => {
    render(
      <UserContext.Provider value={{ role: 'admin' }}>
        <NavList />
      </UserContext.Provider>
    )
    expect(screen.getByText('Admin')).toBeInTheDocument()
  })

  it('hides link for non-admin', () => {
    render(
      <UserContext.Provider value={{ role: 'user' }}>
        <NavList />
      </UserContext.Provider>
    )
    expect(screen.queryByText('Admin')).toBeNull()
  })
})

describe('admin page access', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('denies access to non-admin', () => {
    render(
      <UserContext.Provider value={{ role: 'user' }}>
        <AdminPage />
      </UserContext.Provider>
    )
    expect(screen.getByText('Access Denied')).toBeInTheDocument()
  })

  it('shows user table and counts for admin', async () => {
    const users = [
      { id: 1, name: 'Alice', status: 'Pending', lastActivity: '2024-01-01' },
      { id: 2, name: 'Bob', status: 'Approved', lastActivity: '2024-01-02' },
      { id: 3, name: 'Carol', status: 'Posted', lastActivity: '2024-01-03' },
      { id: 4, name: 'Dave', status: 'Denied', lastActivity: '2024-01-04' }
    ]
    fetch.mockResponseOnce(JSON.stringify(users))
    render(
      <UserContext.Provider value={{ role: 'admin' }}>
        <AdminPage />
      </UserContext.Provider>
    )
    await waitFor(() => expect(screen.getByText('Alice')).toBeInTheDocument())
    expect(screen.getByText('Pending: 1')).toBeInTheDocument()
    expect(screen.getByText('Approved: 1')).toBeInTheDocument()
    expect(screen.getByText('Posted: 1')).toBeInTheDocument()
    expect(screen.getByText('Denied: 1')).toBeInTheDocument()
  })
})
