'use client'
import Image from 'next/image'
import picture from '@/images/profile_linkedin.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
export default function Header(){
    const handleButtonClick = (e) => {
        e.preventDefault()
        window.location = '#contact'
    }
    return (
        <header id='home' className='Header'>
            <section>
                <section>
                    <h1 className='gradient-text'>Jesse Piccione</h1>
                    <h2 className='gradient-text'>Software Engineer</h2>
                    <hr/>
                    <p>
                        Motivated and detail-oriented Software Engineer with hands-on experience in Full-Stack technologies,
                        software design, and project management. Proven track record of applying problem solving skills to 
                        deliver high-quality software solutions. Eager to contribute to a dynamic team while growing
                        professionally, and also looking to take on projects for small businesses--including website management,
                        cloud services, and IT support.
                    </p>
                    <button type='button' onClick={handleButtonClick}>
                        <FontAwesomeIcon icon={faPaperPlane} className='icon-md' /> Connect&nbsp;2&nbsp;Me
                    </button>
                </section>
                <aside>
                    <Image src={picture} alt='Jesse Piccione' loading='eager'/>
                </aside>
            </section>
        </header>
    )
}