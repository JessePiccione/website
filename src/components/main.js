import EResume from '@/components/eresume'
import Blog from '@/components/blog'
import About from '@/components/about'
import Contact from '@/components/contact'
export default function Main(){
    return (
        <main className='Main'>
            <EResume/>
            <Blog/>
            <About/>
            <Contact/>
        </main>
    )
}