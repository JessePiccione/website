"use client"
import {ResumeState} from '@/components/providers/fullresumestate'
export default function FullResumeButton(){
    const {toggleDisplay} = ResumeState()
    return (
        <button onClick={toggleDisplay} className='btn btn-primary'>
            See Full Resume
        </button>
    )
}