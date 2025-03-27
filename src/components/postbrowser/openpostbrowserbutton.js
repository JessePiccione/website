'use client'
import { PostBrowserDisplayContext } from '@/components/providers/postbrowserstate'
export default function OpenPostBrowserButton(){
    const {toggleDisplay} = PostBrowserDisplayContext()
    return (
        <button onClick={toggleDisplay}>
            Browse Posts
        </button>
    )
}