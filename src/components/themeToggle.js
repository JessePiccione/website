'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'

function applyTheme(theme) {
    const isDark = theme === 'dark'
    document.documentElement.classList.toggle('dark', isDark)
    document.body.classList.toggle('dark', isDark)
}

export default function ThemeToggle({ className = '' }) {
    const [theme, setTheme] = useState('light')
    const btnRef = useRef(null)
    const isAnimating = useRef(false)

    useEffect(() => {
        const saved = localStorage.getItem('theme')
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const initial = saved || (prefersDark ? 'dark' : 'light')
        setTheme(initial)
        applyTheme(initial)
    }, [])

    const toggleTheme = useCallback(() => {
        if (isAnimating.current || !btnRef.current) return
        isAnimating.current = true

        const newTheme = theme === 'dark' ? 'light' : 'dark'

        // Add spinning class to trigger CSS animation
        btnRef.current.classList.add('spinning')

        // Swap icon + apply theme at the midpoint (button is invisible at 50%)
        setTimeout(() => {
            setTheme(newTheme)
            applyTheme(newTheme)
            localStorage.setItem('theme', newTheme)
        }, 200)

        // Remove spinning class when animation finishes
        const onEnd = () => {
            btnRef.current?.classList.remove('spinning')
            isAnimating.current = false
            btnRef.current?.removeEventListener('animationend', onEnd)
        }
        btnRef.current.addEventListener('animationend', onEnd)
    }, [theme])

    return (
        <button
            ref={btnRef}
            className={`theme-toggle ${className}`}
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {theme === 'dark'
                ? <FontAwesomeIcon icon={faSun} className='icon-md' />
                : <FontAwesomeIcon icon={faMoon} className='icon-md' />
            }
        </button>
    )
}
