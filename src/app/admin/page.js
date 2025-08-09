"use client"
import { useEffect, useState } from 'react'
import { useUser } from '@/components/providers/user'

export default function AdminPage() {
    const user = useUser()
    const [users, setUsers] = useState([])
    const [counts, setCounts] = useState({ Pending: 0, Approved: 0, Posted: 0, Denied: 0 })

    useEffect(() => {
        if (user?.role !== 'admin') return
        async function fetchUsers() {
            try {
                const res = await fetch('/api/users')
                if (res.ok) {
                    const data = await res.json()
                    setUsers(data)
                    const newCounts = { Pending: 0, Approved: 0, Posted: 0, Denied: 0 }
                    data.forEach(u => {
                        const status = u.status
                        if (status && newCounts.hasOwnProperty(status)) {
                            newCounts[status] += 1
                        }
                    })
                    setCounts(newCounts)
                }
            } catch (err) {
                // ignore errors
            }
        }
        fetchUsers()
    }, [user])

    if (!user) return null
    if (user.role !== 'admin') return <p>Access Denied</p>

    return (
        <main>
            <h1>Admin Dashboard</h1>
            <div>
                <p>Pending: {counts.Pending}</p>
                <p>Approved: {counts.Approved}</p>
                <p>Posted: {counts.Posted}</p>
                <p>Denied: {counts.Denied}</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Last Activity</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(u => (
                        <tr key={u.id}>
                            <td>{u.name}</td>
                            <td>{u.status}</td>
                            <td>{u.lastActivity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}
