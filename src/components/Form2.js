import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../features/post/postSlice'

const Form2 = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState({ title: '', id: ''})

    const submitHendler = (event) => {
        // console.log('event', event)
        event.preventDefault()
        const {title} = state
        const newPost = {
            id: Date.now().toString(),
            title,
            completed: true
        }
        console.log(newPost)
        dispatch(addPost(newPost))
        setState( {title: ''})
        
    }

    const chengeInputHandler = ({ target }) => {
        setState(prev => ({
            ...prev,
            [target.name]: target.value
        }))
    }
    return (
        <form className='w-full flex' onSubmit={submitHendler}>
            
                <input
                type='text'
                id='title'
                value={state.title}
                name='title'
                onChange={chengeInputHandler}
                className='w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
            />
            <button
                type='submit'
                className='shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm'
            >
                Создать
            </button>
        </form>
    )
}

export default Form2
