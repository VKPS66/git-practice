import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'

function DataFetching() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        (async () =>{
            const pos = await axios.get('https://jsonplaceholder.typicode.com/posts')
            console.log(pos.data);
            setPosts(pos.data)
        })()
        // fetchData()
    }, [])
    
    return (
        <>
            {posts.length > 0 && <div>{JSON.stringify(posts)}</div>}
        </>
    )
}

export default DataFetching