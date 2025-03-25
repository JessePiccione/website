"use client"
import {ResumeState} from '@/components/providers/fullresumestate'
export default function FullResumeButton(){
    const {toggleDisplay} = ResumeState()
    return (
        <button onClick={toggleDisplay}>
            See Full Resume
        </button>
    )
}