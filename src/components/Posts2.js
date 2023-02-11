import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'


const Posts2 = () => {
    const posts = useSelector((state) => state.post.posts)
    console.log('posts', posts)
    if (!posts.length) return <p>нет постов</p>
    return (
        <>
        <h1>hgjgj</h1>
        {/* {posts.map(post => console.log('post', post))} */}
        {posts.map(post => <Post key={post.id} post={post}/>)}
        </>
    )
}

export default Posts2
