"use client"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import {useReducer, useEffect} from 'react'

export function toggleSizeState(previousState, args){
    switch (previousState){
        case 'small':
            return 'big'
        case 'big':
            return 'small'
        default:
            return 'small'
    }
}
export default function Post({technologies, title, description, URL, ...props}){
    const [postSize, togglePostSize] = useReducer(toggleSizeState, toggleSizeState())
    const handleClick = (e) => {
        e.preventDefault()
        document.body.style.overflowY = (postSize!=="small")?'scroll':'hidden'
        togglePostSize()
    }
    return (
        <section className={`blog-post ${postSize}`} {...props}>
            <article>
                <iframe title={title} src={URL} sandbox="allow-scripts allow-same-origin"></iframe>
                <section>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p onClick={handleClick}>
                            {(postSize!=='big')?'See More':'See Less'} <FontAwesomeIcon icon={(postSize!=='big')?faAngleDown:faAngleUp} className='icon-md' />
                    </p>
                </section>
            </article>
        </section>
    )
}