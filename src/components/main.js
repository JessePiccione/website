import EResume from '@/components/eresume'
import Blog from '@/components/blog'
export default function Main(){
    return (
        <main className='Main'>
            <EResume/>
            <Blog/>
            <About/>
            <section id='contact' className='contact'>
                <article>
                    this is going to be where the contact me for is going to be
                </article>
            </section>
        </main>
    )
}