import EResume from '@/components/eresume'
import Blog from '@/components/blog'
export default function Main(){
    return (
        <main className='Main'>
            <EResume/>
            <Blog/>
            <section id='about' className='about'>
                <article>
                    This is going to be the about section is
                </article>
            </section>
            <section id='contact' className='contact'>
                <article>
                    this is going to be where the contact me for is going to be
                </article>
            </section>
        </main>
    )
}