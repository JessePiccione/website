'use client'
import {useState, useEffect} from 'react'

export default function ThemeToggle(){
    const [theme, setTheme] = useState('light')
    useEffect(() => {
        const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
        const prefersDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
        const initial = saved || (prefersDark ? 'dark' : 'light')
        setTheme(initial)
        if (typeof document !== 'undefined') document.documentElement.setAttribute('data-theme', initial)
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        if (typeof document !== 'undefined') document.documentElement.setAttribute('data-theme', newTheme)
        if (typeof window !== 'undefined') localStorage.setItem('theme', newTheme)
    }

    return (
        <button className='theme-toggle' onClick={toggleTheme} aria-label='Toggle theme'>
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
    )
}
