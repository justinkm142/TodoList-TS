import React from 'react'
import { Todo } from '../model.ts'

import TodoList from "./TodoList.tsx"
import TodoList1 from "./TodoList1.tsx"
import {Droppable} from "react-beautiful-dnd"

interface Props{
    todos:Todo[]
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
    handleDelete:(id:Todo['id'])=>void
    handleDone:(id:Todo['id'])=>void
    handleEdit:(id:Todo['id'],text:Todo["todo"])=>void
}


const DropableComponent:React.FC<Props> = ({todos, setTodos, handleDelete, handleDone, handleEdit}) => {
  return (
    <div className="grid grid-cols-0 md:grid-cols-2 gap-4">
            <Droppable droppableId='todolist1'> 
                  {(provided)=>(
                      <div ref={provided.innerRef} {...provided.droppableProps}>
                      <TodoList todos={todos} setTodos={setTodos} handleDelete={handleDelete} handleDone={handleDone} handleEdit={handleEdit}/>
                {provided.placeholder}
                </div>
                )} 
            </Droppable>

            <Droppable droppableId='todolist2'> 
                  {(provided)=>(
                      <div ref={provided.innerRef} {...provided.droppableProps}>
                      <TodoList1 todos={todos} setTodos={setTodos} handleDelete={handleDelete} handleDone={handleDone} handleEdit={handleEdit}/>
                      {provided.placeholder}
                      </div>
                  )} 
            </Droppable>
    </div>
  )
}

export default DropableComponent
