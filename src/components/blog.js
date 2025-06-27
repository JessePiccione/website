import Post from '@/components/postsmall'
import OpenPostBrowserButton from '@/components/postbrowser/openpostbrowserbutton'
import Reveal from '@/components/reveal'
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://portal.piccione.dev'
export default async function Blog(){
    let posts = []
    try {
        const res = await fetch(`${backendUrl}/api/home/`)
        posts = await res.json()
    } catch (err) {
        console.error('Blog: failed to fetch posts', err)
    }
    const postsAreArray = Array.isArray(posts)
    if(!postsAreArray){
        console.error('Blog: posts is not an array', posts)
    }
    return (
        <Reveal as='section' id='blog' className='blog'>
            <article>
                <h1 className='gradient-text'>Blog Posts</h1>
                <h2 className='gradient-text'>Featured Posts</h2>
                <hr/>
                <ul>
                    {postsAreArray ? posts.map(post => <Post key={post.title+post.id} {...post}/>) : <li>No posts available</li>}
                </ul>
                <OpenPostBrowserButton/>
            </article>
        </Reveal>
    )
}