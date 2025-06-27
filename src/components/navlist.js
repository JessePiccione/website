import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFileLines, faBlog, faUser, faEnvelope, faRightToBracket, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://portal.piccione.dev'

const NavList = React.forwardRef(function NavList(props, ref){
    return (
        <ul ref={ref} {...props}>
            <li>
                <a href='#home'>
                    <FontAwesomeIcon icon={faHouse} className='icon-md' />
                    <span>Home</span>
                </a>
            </li>
            <li>
                <a href='#eresume'>
                    <FontAwesomeIcon icon={faFileLines} className='icon-md' />
                    <span>eResume</span>
                </a>
            </li>
            <li>
                <a href='#blog'>
                    <FontAwesomeIcon icon={faBlog} className='icon-md' />
                    <span>Blog</span>
                </a>
            </li>
            <li>
                <a href='#about'>
                    <FontAwesomeIcon icon={faUser} className='icon-md' />
                    <span>About</span>
                </a>
            </li>
            <li>
                <a href='#contact'>
                    <FontAwesomeIcon icon={faEnvelope} className='icon-md' />
                    <span>Contact</span>
                </a>
            </li>
            <li>
                <a href={`${backendUrl}/admin/`}>
                    <FontAwesomeIcon icon={faRightToBracket} className='icon-md' />
                    <span>Portal</span>
                </a>
            </li>
            <li>
                <a href='https://www.paypal.com/donate/?hosted_button_id=8QNED3VCSZHYG'>
                    <FontAwesomeIcon icon={faCircleDollarToSlot} className='icon-md' />
                    <span>Donate</span>
                </a>
            </li>
        </ul>
    )
})

export default NavList
