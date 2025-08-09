"use client"
import { createContext, useContext, useEffect, useState } from 'react'

export const UserContext = createContext(null)

export function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    useEffect(() => {
        async function fetchUser() {
            try {
                const res = await fetch('/api/users/me')
                if (res.ok) {
                    const data = await res.json()
                    setUser(data)
                }
            } catch (err) {
                // ignore errors
            }
        }
        fetchUser()
    }, [])
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)
