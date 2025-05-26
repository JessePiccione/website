'use client'
import {useRef, useEffect} from 'react'

export default function Reveal({ as: Component = 'div', className = '', children, ...props }){
    const ref = useRef(null)
    useEffect(() => {
        const node = ref.current
        if(!node) return
        node.classList.add('reveal')
        const obs = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add('reveal-visible')
                    obs.unobserve(entry.target)
                }
            })
        }, { threshold: 0.1 })
        obs.observe(node)
        return () => obs.disconnect()
    }, [])
    return <Component ref={ref} className={className} {...props}>{children}</Component>
}

