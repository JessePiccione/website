import Image from 'next/image'
import picture from '@/images/profile_linkedin.png'
export default function Header(){
    return (
        <header className='Header'>
            <section>
                <h1>Jesse Piccione</h1>
                <h2>Software Engineer</h2>
                <hr/>
                <p>Motivated and detail-oriented Software Engineer with hands-on experience in Full Stack technologies, software design, and project management. Proven track record of applying problem solving skills to deliver high quality software solutions. Eager to contribute to a dynamic team while growing professionally.</p>
                <button>Connect2Me</button>
            </section>
            <aside>
                <Image src={picture} alt='Jesse Piccione'/>
            </aside>
        </header>
    )
}