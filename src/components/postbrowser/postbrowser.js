'use client'
import {useEffect, useState} from 'react'
import getData from '@/components/api/getData'
import PostSmall from '@/components/postsmall'
import { PostBrowserDisplayContext } from '@/components/providers/postbrowserstate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
const fallbackPosts = [
    {
        title: 'Error Loading Posts',
        description: 'Unable to retrieve blog posts at this time.',
        URL: '#',
        id: 'error'
    }
]
export default function PostBrowser(){
    const {display, toggleDisplay} = PostBrowserDisplayContext()
    const [blogPosts, setBlogPosts] = useState([])
    const retrieveDataFromServer = async () => {
        try {
            setBlogPosts(await getData('api/home/'))
        } catch (error) {
            console.error(error)
            setBlogPosts(fallbackPosts)
        }
    }
    useEffect(()=>{retrieveDataFromServer()},[])
    const postsAreArray = Array.isArray(blogPosts)
    if(!postsAreArray){
        console.error('PostBrowser: blogPosts is not an array', blogPosts)
    }
    return (
        <section id='BlogPostBrowser' className={display} role='dialog' aria-modal='true' aria-labelledby='blogBrowserTitle'>
            <article onAnimationEnd={toggleDisplay}>
                <button className='CloseButton' onClick={toggleDisplay} aria-label='Close blog posts'>
                    <FontAwesomeIcon icon={faXmark} aria-hidden='true'/>
                </button>
                <h1 id='blogBrowserTitle' className='gradient-text'>Jesse's Blog</h1>
                <hr/>
                <ul>
                    {postsAreArray ? blogPosts.map(post => <PostSmall key={post.title+post.id} {...post}/>) : <li>No posts available</li>}
                </ul>
            </article>
        </section>
    )
}