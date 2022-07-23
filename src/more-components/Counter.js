import React, { useMemo, useState } from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementCounterOne = () => setCounterOne(counterOne + 1)
    const incrementCounterTwo = () => setCounterTwo(counterTwo + 1)

    const isOneEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne])

    return (
        <>
            <div style={{ display: 'flex' }}>
                <button onClick={incrementCounterOne}>Update Counter One</button>
                <div>Counter One : {counterOne}</div>
                <div>{isOneEven ? ' -->Even' : ' -->Odd'}</div>
            </div>
            <div style={{ display: 'flex' }}>
                <button onClick={incrementCounterTwo}>Update Counter Two</button>
                <div>Counter Two : {counterTwo}</div>
                <div></div>
            </div>
        </>
    )
}

export default Counter