import React,{useState} from 'react'
import { Todo } from '../model.ts'
import SingleTodo from './SingleTodo.tsx'
import {Droppable} from 'react-beautiful-dnd'

interface Props{
    todos:Todo[]
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
    handleDelete:(id:Todo['id'])=>void
    handleDone:(id:Todo['id'])=>void
    handleEdit:(id:Todo['id'],text:Todo["todo"])=>void
}

const TodoList:React.FC<Props>= ({todos, setTodos, handleDelete, handleDone, handleEdit}) => {


return (
  <div>
              <div className='bg-blue-400 mx-10 md:ms-10 py-10 rounded-3xl' >
                <h1 className=" ms-5 font-bold text-4xl w-full text-center underline">Todo Tasks Pending</h1>
                    {todos.slice(0).reverse().map((data,index)=>{
                        if(!data.isDone){
                        return <SingleTodo data={data} key={index} index={index} handleDelete={handleDelete} handleDone={handleDone} handleEdit={handleEdit}/>
                      }

                      })}
                      
              </div>
  </div>
  )
}

export default TodoList





