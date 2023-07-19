import React, {useState} from 'react'
import { Todo } from '../model'
import {CiEdit} from 'react-icons/ci'
import {AiOutlineDelete} from 'react-icons/ai'
import {MdDone, MdOutlineCancel} from 'react-icons/md'
import {Draggable} from 'react-beautiful-dnd'
 
interface Props{
    index:number
    data:Todo
    handleDelete:(id:Todo["id"])=>void
    handleDone:(id:Todo['id'])=>void
    handleEdit:(id:Todo['id'],text:Todo["todo"])=>void
}

const SingleTodo:React.FC<Props> = ({data,handleDelete, handleDone, handleEdit,index }) => {

  const [edit, setEdit] = useState<boolean>(false)
  const [text, setText] =useState<string>("")

  return (
    <>  
  
    <Draggable draggableId={data.id.toString()} index={index}> 




    {(provided)=>(



<div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>


  
{edit ? 
  <div className='flex justify-between bg-yellow-300 w-3/4 mt-5 p-2  rounded-3xl mx-auto hover:scale-105 '>
    <input 
    onChange={(e)=>{
      setText(e.target.value)
    }}
    type="text" className="bg-yellow-300 rounded-3xl w-full " placeholder={data.todo} />
    
  <div className="flex">
    <p 
      onClick={()=>{
        setEdit(false)
      }}
      className="px-2 cursor-pointer hover:scale-125 active:scale-95 my-auto "><MdOutlineCancel size={30} /></p>

    <p 
      onClick={()=>{
        setEdit(false)
        handleEdit(data.id,text)}}
      className="px-2 cursor-pointer hover:scale-125 active:scale-95 my-auto"><MdDone size={30} /></p>
    </div>      
    </div>
  
  
  :
  
  <div className='flex justify-between bg-yellow-300 w-3/4 mt-5 p-2  rounded-3xl mx-auto hover:scale-105 transition duration-200 ease-in-out'>
    <p className="ms-3">{data.todo}</p> 
    <div className="flex">
      <p 
        onClick={()=>{
          console.log("edit clicked ")
          setEdit(true)
          }}
        className="px-2 cursor-pointer hover:scale-125 active:scale-95 "><CiEdit size={30} /> </p>
        
      <p 
        onClick={()=>handleDelete(data.id)}
        className="px-2 cursor-pointer hover:scale-125 active:scale-95"><AiOutlineDelete size={30} /></p>
      <p 
        onClick={()=>handleDone(data.id)}
        className="px-2 cursor-pointer hover:scale-125 active:scale-95"><MdDone size={30} /></p>
  </div>
    
  </div>





}
</div>








    )}  
  

  </Draggable>
  </>
  )
}

export default SingleTodo
