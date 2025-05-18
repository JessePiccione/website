import Post from '@/components/postsmall'
import OpenPostBrowserButton from '@/components/postbrowser/openpostbrowserbutton'
export default async function Blog(){
    let posts =  await fetch('https://portal.piccione.dev/api/home/').then(res=>res.json())
    const postsAreArray = Array.isArray(posts)
    if(!postsAreArray){
        console.error('Blog: posts is not an array', posts)
    }
    return (
        <section id='blog' className='blog'>
            <article>
                <h1>Blog Posts</h1>
                <h2>Featured Posts</h2>
                <hr/>
                <ul>
                    {postsAreArray ? posts.map(post => <Post key={post.title+post.id} {...post}/>) : <li>No posts available</li>}
                </ul>
                <OpenPostBrowserButton/>
            </article>
        </section>
    )
}