'use client'
import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'

export default function ThemeToggle({className = ''}){
    const [theme, setTheme] = useState('light')
    const [spinning, setSpinning] = useState(false)
    useEffect(() => {
        const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
        const prefersDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
        const initial = saved || (prefersDark ? 'dark' : 'light')
        setTheme(initial)
        if (typeof document !== 'undefined') document.documentElement.classList.toggle('dark', initial === 'dark')
    }, [])

    const toggleTheme = () => {
        setSpinning(true)
        setTimeout(() => setSpinning(false), 500)
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        if (typeof document !== 'undefined') document.documentElement.classList.toggle('dark', newTheme === 'dark')
        if (typeof window !== 'undefined') localStorage.setItem('theme', newTheme)
    }

    return (
        <button
            className={`theme-toggle ${className} ${spinning ? 'theme-toggle-spinning' : ''}`}
            onClick={toggleTheme}
            aria-label='Toggle theme'
        >
            {theme === 'dark' ? (
                <FontAwesomeIcon icon={faSun} className='icon-md' />
            ) : (
                <FontAwesomeIcon icon={faMoon} className='icon-md' />
            )}
        </button>
    )
}
