'use client'
import Logo from '@/images/logo'
import NavList from './navlist'
import {useState, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Nav(){
    const [animation, setAnimation] = useState('')
    const menuRef = useRef(null)
    const toggleMenu = () => {
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
                <section className='menu-hamburger-container'>
                    <button
                        className='MenuToggle'
                        aria-label='Open navigation menu'
                        aria-controls='nav-list'
                        aria-expanded={(animation === 'open' || animation === 'opened') ? 'true' : 'false'}
                        onClick={toggleMenu}
                        onAnimationEnd={handleEndOfAnimation}
                    >
                        <FontAwesomeIcon
                            icon={(animation === 'open' || animation === 'opened') ? faXmark : faBars}
                            className='menu-icon icon-lg'
                            aria-hidden='true'
                        />
                    </button>
                </section>
                <NavList id='nav-list' ref={menuRef} className={`nav-list ${animation}`} onAnimationEnd={handleEndOfAnimation}/>
            </section>
        </nav>
    )
}