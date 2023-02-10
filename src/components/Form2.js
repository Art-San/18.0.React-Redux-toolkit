import React, { useState } from 'react'

const Form2 = () => {
    const [state, setState] = useState('')

    const submitHendler = (event) => {
        event.preventDefault()
        const {title} = state
        const newPost = {
            title, id: Date.now().toString()
        }
        setState( {title: ''})
        console.log(newPost)
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
