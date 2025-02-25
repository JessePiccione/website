import Post from '@/components/postsmall'
export default async function Blog(){
    let posts =  await fetch('https://jessepiccione-info-backend.ue.r.appspot.com/api/home/').then(res=>res.json())
    return (
        <section id='blog' className='blog'>
            <article>
                <h1>Blog Postings</h1>
                <h2>Featured Posts</h2>
                <hr/>
                <ul>
                    {posts.map(post=><Post key={post.title} {...post}/>)}
                </ul>
                <button>Browse Posts</button>
            </article>
        </section>
    )
}