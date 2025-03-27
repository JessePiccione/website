"use client"
import {useContext, createContext, useReducer} from 'react'
const FullResumeStateContext = createContext()
export default function FullResumeState({children}){
    const [display, toggleDisplay] = useReducer(toggleDrawer,'closed')
    
    return (
        <FullResumeStateContext.Provider value={{display, toggleDisplay}}>
            {children}
        </FullResumeStateContext.Provider>
    )
}
function toggleDrawer(previousState, {command}){
    switch (previousState) {
        case 'open':
            return 'opened'
        case 'opened':
            return 'close'
        case 'close':
            return 'closed'
        case 'closed':
            return 'open'
    }
}
export const ResumeState = () => useContext(FullResumeStateContext)
