import React, { useEffect, useState } from 'react'

function TitleUpdateFunction() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `You clicked ${count} times`
    }, [count])

    const clickHandler = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={clickHandler}>
                Clicked {count} times
            </button>
        </div>
    )
}

export default TitleUpdateFunction