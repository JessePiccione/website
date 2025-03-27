"use client"
import {createContext, useContext, useReducer} from 'react'
const PostBrowserContext = createContext()
export function displayReducer(previousState, args){
    switch(previousState){
        case 'open':
            return 'opened'
        case 'opened':
            return 'close'
        case 'close':
            return 'closed'
        default:
            return 'open'
    }
}
export default function PostBrowserProvider({children}){
    const [display, toggleDisplay] = useReducer(displayReducer, '')
    return (
        <PostBrowserContext.Provider value={{display, toggleDisplay}}>
            {children}
        </PostBrowserContext.Provider>
    )
}
export const PostBrowserDisplayContext = () => useContext(PostBrowserContext)