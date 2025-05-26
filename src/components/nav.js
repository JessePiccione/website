'use client'
import Logo from '@/images/logo'
import NavList from './navlist'
import Chevron from '@/images/chevron.svg'
import Image from 'next/image'
import {useState} from 'react'
import ThemeToggle from '@/components/themeToggle'

export default function Nav(){
    const [animation, setAnimation] = useState('')
    const toggleMenu = (e) => {
        e.target.classList.remove('opened')
        if(animation === 'close' || animation === '') setAnimation('open')
        else if (animation === 'open' ) setAnimation('close')
    }
    const handleEndOfAnimation = (e) => {
        e.target.classList.remove(animation)
        e.target.style.animation = null
        if (animation === 'open') e.target.classList.add('opened')
    }
    return (
        <nav className='Nav'>
            <section>
                <section className='menu-logo-container'>
                    <Logo/>
                </section>
                <section className='menu-chevron-container'>
                    <Image
                        loading='eager'
                        src={Chevron}
                        alt='Chevron'
                        className={`menu-chevron ${animation}`}
                        onClick={toggleMenu}
                        onAnimationEnd={handleEndOfAnimation}
                    />
                    <ThemeToggle />
                </section>
                <NavList className={`nav-list ${animation}`} onAnimationEnd={handleEndOfAnimation}/>
            </section>
        </nav>
    )
}