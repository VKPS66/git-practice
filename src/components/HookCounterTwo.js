import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount)
    const incrementByFive = () => {
        for (let i = 0; i < 5; i ++) {
            setCount(previousCount => previousCount + 1)
        }
    }
    return (
        <div style={{display: "flex", flexDirection: 'column', width: '100px'}}>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(previousCount => previousCount + 1)}>Increment</button>
            <button onClick={() => setCount(previousCount => previousCount - 1)}>Decrement</button>
            <button onClick={incrementByFive}>Increment by 5</button>
        </div>
    )
}

export default HookCounterTwo
