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
    switch (command) {
        case 'open':
            return 'close'
        case 'close':
            return 'closed'
        default:
            return 'open'
    }
}
export const resumeState = () => useContext(FullResumeStateContext)
