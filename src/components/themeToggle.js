'use client'
import {useState, useEffect, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'

export default function ThemeToggle({className = ''}){
    const [theme, setTheme] = useState('light')
    const component = useRef(null)
    async function effect(){
        const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
        const prefersDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
        const initial = saved || (prefersDark ? 'dark' : 'light')
        setTheme(initial)
        if (typeof document !== 'undefined') document.documentElement.classList.toggle('dark', initial === 'dark')
    }
    useEffect(() => {effect()}, [])
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        if (typeof document !== 'undefined') document.documentElement.classList.toggle('dark', newTheme === 'dark')
        if (typeof window !== 'undefined') localStorage.setItem('theme', newTheme)
    }

    return (
        <button ref={component} className={`theme-toggle ${className}`} onClick={toggleTheme} aria-label='Toggle theme'>
            {theme === 'dark' ? (
                <FontAwesomeIcon icon={faSun} className='icon-md' />
            ) : (
                <FontAwesomeIcon icon={faMoon} className='icon-md' />
            )}
        </button>
    )
}
