import Post from '@/components/postsmall'
import OpenPostBrowserButton from '@/components/postbrowser/openpostbrowserbutton'
export default async function Blog(){
    let posts =  await fetch('https://portal.piccione.dev/api/home/').then(res=>res.json())
    return (
        <section id='blog' className='blog'>
            <article>
                <h1>Blog Posts</h1>
                <h2>Featured Posts</h2>
                <hr/>
                <ul>
                    {posts.map(post=><Post key={post.title+post.id} {...post}/>)}
                </ul>
                <OpenPostBrowserButton/>
            </article>
        </section>
    )
}