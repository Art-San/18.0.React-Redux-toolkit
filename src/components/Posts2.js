import React from 'react'
import Post from './Post'


const Posts2 = ({posts}) => {
    if (!posts.length) return <p>нет постов</p>
    return (
        posts.map(post => <Post key={post} post={post}/>)
    )
}

export default Posts2
