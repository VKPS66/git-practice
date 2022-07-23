import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('use effect')
        const timer = setInterval(() => setCount(p => p + 1), 1000);
        return () => clearInterval(timer)
    }, [])
    return (
        <div>{count}</div>
    )
}

export default IntervalHookCounter