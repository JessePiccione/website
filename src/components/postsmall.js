"use client"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import {useReducer} from 'react'

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
export default function Post({technologies, title, description, URL}){
    const [postSize, togglePostSize] = useReducer(toggleSizeState, toggleSizeState())
    const handleClick = (e) => {
        e.preventDefault()
        togglePostSize()
    }
    return (
        <section className={`blog-post ${postSize}`}>
            <article>
                <iframe title={title} src={URL}></iframe>
                <section>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p>
                        <button onClick={handleClick}>
                            {(postSize==='big')?'See More':'See Less'}
                            <FontAwesomeIcon className='fontAwesomeIcon' icon={(postSize==='small')?faAngleDown:faAngleUp} />
                        </button>
                    </p>
                </section>
            </article>
        </section>
    )
}