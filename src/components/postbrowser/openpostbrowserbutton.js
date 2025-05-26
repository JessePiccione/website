'use client'
import { PostBrowserDisplayContext } from '@/components/providers/postbrowserstate'
export default function OpenPostBrowserButton(){
    const {toggleDisplay} = PostBrowserDisplayContext()
    return (
        <button onClick={toggleDisplay} className='btn btn-primary'>
            Browse Posts
        </button>
    )
}