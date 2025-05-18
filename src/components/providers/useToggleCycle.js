"use client"
import { useReducer } from 'react'

export function toggleCycleReducer(previousState){
    switch(previousState){
        case 'open':
            return 'opened'
        case 'opened':
            return 'close'
        case 'close':
            return 'closed'
        case 'closed':
        default:
            return 'open'
    }
}

export default function useToggleCycle(initialState = 'closed'){
    return useReducer(toggleCycleReducer, initialState)
}
