"use client"
import {createContext, useContext} from 'react'
import useToggleCycle from './useToggleCycle'
const PostBrowserContext = createContext()
export default function PostBrowserProvider({children}){
    const [display, toggleDisplay] = useToggleCycle('closed')
    return (
        <PostBrowserContext.Provider value={{display, toggleDisplay}}>
            {children}
        </PostBrowserContext.Provider>
    )
}
export const PostBrowserDisplayContext = () => useContext(PostBrowserContext)