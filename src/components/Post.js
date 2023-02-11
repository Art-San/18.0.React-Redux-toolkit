import React from 'react'
import { useDispatch } from 'react-redux'
import { removePost, toggleReadPost } from '../features/post/postSlice'

const Post = ({post}) => {
  const dispatch = useDispatch()

  const togglePostRead = (id) => {
    dispatch(toggleReadPost(id))
  }

  const deletePost = (id) => {
    console.log(id)
    dispatch(removePost(id))
  }


  return (

    <div className='flex justify-between items-center my-2'>
            <div
                onClick={() => togglePostRead(post.id)}
                className='text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400'>
                Прочитанно
            </div>
            <div className={`text-sm ${post.completed ? 'line-through font-medium text-lime-400' : ''}`}>
              {post.title}
            </div>
            <div
                onClick={() => deletePost(post.id)}
                className='text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer'>
                Delete
            </div>
        </div>
    // <div className='card bg-blue-100'>
    //     <div
    //         className='text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400'>
    //         Complete
    //     </div>
    //     <div className='card-body'>
    //         <div>Tatle here {post.title}</div>
    //     </div>
    // </div>
  )
}

export default Post