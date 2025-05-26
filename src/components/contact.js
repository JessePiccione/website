import ContactForm from '@/components/contactform'
import Reveal from '@/components/reveal'
export default function Contact(){
    return (
        <Reveal as='section' id='contact' className='contact'>
            <article>
                <h1 className='gradient-text'>Contact Me</h1>
                <h2 className='gradient-text'>Ask Me Anything</h2>
                <hr/>
                <ContactForm/>
            </article>
        </Reveal>
    )
}