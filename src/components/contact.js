import ContactForm from '@/components/contactform'
export default function Contact(){
    return (
        <section id='contact' className='contact'>
            <article>
                <h1>Contact Me</h1>
                <h2>Ask Me Anything</h2>
                <hr/>
                <ContactForm/>
            </article>
        </section>
    )
}