import { useEffect, useState } from "react";

function HookCounter() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('useEffect being executed')
        document.title = `Clicked ${count} times`
    }, [count])

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Click</button>
        </div>
    )
    
}

export default HookCounter