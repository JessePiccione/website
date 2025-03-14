"use client"
import {resumeState} from '@/components/providers/fullresumestate'
export default function FullResumeButton(){
    const {toggleDisplay} = resumeState()
    return (
        <button onClick={toggleDisplay}>
            See Full Resume
        </button>
    )
}