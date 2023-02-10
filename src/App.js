import React from 'react'
import Form from './components/Form'
import TodoItem from './components/TodoItem'
import User from './components/User'
import Posts from './components/Posts'
import { useSelector } from 'react-redux'
// import Posts2 from './components/Posts2'
// import FetchPosts from './components/FetchPosts'
// import Form2 from './components/Form2'

function App() {
    const todos = useSelector((state) => state.todo.todos)
    console.log('todos', todos)
    return (
        <>
        <div className='min-h-screen h-full w-screen bg-indigo-200'>
            <div className='container mx-auto px-4'>
                <header className='flex gap-20 '>
                    <div className='w-1/3'>
                        <h1 className='font-bold my-5'>Redux Toolkit State Change</h1>
                        <User />
                    </div>
                    <div className='w-1/3'>
                        <h1 className='font-bold my-5'>Redux Toolkit Todo App</h1>
                        <Form name='form1' />
                        {todos?.map((todo) => (
                            <TodoItem 
                                key={todo.id}
                                todo={todo}
                            />
                        ))}
                    </div>
                    <div className='w-1/3'>
                        <h1 className='font-bold my-5'>Redux Toolkit Async Thunk</h1>
                        <Posts />
                    </div>
                </header>
            </div>
        </div>
        {/* <div className='min-h-min h-full w-screen bg-blue-300'>
            <div className='container mx-auto px-4'>
            <footer className='flex gap-20 '>
                    <div className='w-1/3'>
                        <Form2/>
                    </div>
                    <div className='w-1/3'>
                        <div>Синхронные посты</div>
                        <Posts2 posts={[1, 2, 3]}/>
                        
                    </div>
                    <div className='w-1/3'>
                    <div>Асинхронные посты</div>
                        <FetchPosts posts={[]}/>
                    </div>
                </footer>
            </div>
        </div> */}
        
        </>
    )
}

export default App
