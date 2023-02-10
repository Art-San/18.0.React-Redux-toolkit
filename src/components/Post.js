import React from 'react'

const Post = ({ post }) => {
  return (
    <div className='card bg-blue-100'>
        <div className='card-body'>
            <div>Tatle here {post}</div>
        </div>
    </div>
  )
}

export default Post