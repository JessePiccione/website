'use client'
import Logo from '@/images/logo'
import NavList from './navlist'
import Chevron from '@/images/chevron.svg'
import Image from 'next/image'
import {useState} from 'react'
export default function Nav(){
    const [animation, setAnimation] = useState('close')
    const toggleMenu = (e) => {
        if(animation === 'close') setAnimation('open')
        else if (animation ==='open') setAnimation('close')
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
            />
            <NavList />
        </nav>
    )
}