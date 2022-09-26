import { useEffect, useState } from "react";

export const ScrollPosition = () => {
    const [scrollPos, setScrollPos] = useState(0)
    useEffect(() => { 
        const setPosition = () => { 
            setScrollPos(window.scrollY)
        }
        window.addEventListener('scroll', setPosition)
        setPosition()
        return () => window.removeEventListener('scroll', setPosition)
    }, [])

    return scrollPos
}
