'use client'
import Logo from '@/images/logo'
import NavList from './navlist'
import Chevron from '@/images/chevron.svg'
import Image from 'next/image'
import {useState, useRef} from 'react'
import ThemeToggle from '@/components/themeToggle'

export default function Nav(){
    const [animation, setAnimation] = useState('')
    const menuRef = useRef(null)
    const chevronRef = useRef(null)
    const toggleMenu = () => {
        if(chevronRef.current) chevronRef.current.classList.remove('opened')
        if(menuRef.current) menuRef.current.classList.remove('opened')
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
                    <button
                        className='MenuToggle'
                        aria-label='Open navigation menu'
                        aria-controls='nav-list'
                        aria-expanded={(animation === 'open' || animation === 'opened') ? 'true' : 'false'}
                        onClick={toggleMenu}
                    >
                        <Image
                            loading='eager'
                            src={Chevron}
                            alt=''
                            aria-hidden='true'
                            className={`menu-chevron ${animation}`}
                            onAnimationEnd={handleEndOfAnimation}
                            ref={chevronRef}
                        />
                    </button>
                    <ThemeToggle />
                </section>
                <NavList id='nav-list' ref={menuRef} className={`nav-list ${animation}`} onAnimationEnd={handleEndOfAnimation}/>
            </section>
        </nav>
    )
}