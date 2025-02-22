'use client'
import Logo from '@/images/logo'
import NavList from './navlist'
import Chevron from '@/images/chevron.svg'
import Image from 'next/image'
import {useState, useRef} from 'react'

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
            <Logo/>
            <Image
                loading='eager'
                src={Chevron}
                alt='Chevron'
                className={`menu-chevron ${animation}`}
                onClick={toggleMenu}
                onAnimationEnd={handleEndOfAnimation}
            />
            <NavList className={`nav-list ${animation}`} onAnimationEnd={handleEndOfAnimation}/>
        </nav>
    )
}