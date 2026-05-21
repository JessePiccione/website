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

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && display === 'opened') {
                toggleDisplay()
            }
        }
        if (display === 'opened') {
            window.addEventListener('keydown', handleKeyDown)
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [display, toggleDisplay])

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget && display === 'opened') {
            toggleDisplay()
        }
    }

    const postsAreArray = Array.isArray(blogPosts)
    if(!postsAreArray){
        console.error('PostBrowser: blogPosts is not an array', blogPosts)
    }
    return (
        <section 
            id='BlogPostBrowser' 
            className={display} 
            role='dialog' 
            aria-modal='true' 
            aria-labelledby='blogBrowserTitle'
            onClick={handleBackdropClick}
        >
            <article onAnimationEnd={toggleDisplay}>
                <button className='CloseButton' onClick={toggleDisplay} aria-label='Close blog posts'>
                    <FontAwesomeIcon icon={faXmark} aria-hidden='true' className='icon-lg'/>
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