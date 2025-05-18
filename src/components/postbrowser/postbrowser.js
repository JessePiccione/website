'use client'
import {useEffect, useState} from 'react'
import getData from '@/components/api/getData'
import PostSmall from '@/components/postsmall'
import { PostBrowserDisplayContext } from '@/components/providers/postbrowserstate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
export default function PostBrowser(){
    const {display, toggleDisplay} = PostBrowserDisplayContext()
    const [blogPosts, setBlogPosts] = useState([])
    const retrieveDataFromServer = async () => {
        setBlogPosts(await getData('api/home/'))
    }
    useEffect(()=>{retrieveDataFromServer()},[])
    const postsAreArray = Array.isArray(blogPosts)
    if(!postsAreArray){
        console.error('PostBrowser: blogPosts is not an array', blogPosts)
    }
    return (
        <section id='BlogPostBrowser' className={display}>
            <article onAnimationEnd={toggleDisplay}>
                <button className='CloseButton' onClick={toggleDisplay}>
                    <FontAwesomeIcon icon={faXmark}/>
                </button>
                <h1>Jesse's Blog</h1>
                <hr/>
                <ul>
                    {postsAreArray ? blogPosts.map(post => <PostSmall key={post.title+post.id} {...post}/>) : <li>No posts available</li>}
                </ul>
            </article>
        </section>
    )
}