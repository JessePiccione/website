"use client"
import {useContext, createContext} from 'react'
import useToggleCycle from './useToggleCycle'
const FullResumeStateContext = createContext()
export default function FullResumeState({children}){
    const [display, toggleDisplay] = useToggleCycle('closed')
    
    return (
        <FullResumeStateContext.Provider value={{display, toggleDisplay}}>
            {children}
        </FullResumeStateContext.Provider>
    )
}

export const ResumeState = () => useContext(FullResumeStateContext)
