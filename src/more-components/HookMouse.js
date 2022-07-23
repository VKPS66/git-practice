import React, { useEffect, useState } from 'react'

function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePisition = e => {
        console.log('logMousePosition handler')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useeffect called')
        window.addEventListener('mousemove', logMousePisition)
        return () => window.removeEventListener('mousemove', logMousePisition)
    }, [])

    return (
        <div>{x}, {y}</div>
    )
}

export default HookMouse