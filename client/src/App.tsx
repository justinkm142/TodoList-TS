import { useEffect, useState} from "react"
import InputField from "./components/InputField"
// import TodoList from "./components/TodoList"
// import TodoList1 from "./components/TodoList1"
import DropableComponent from "./components/DropableComponent"
import {Todo} from './model'
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import {DragDropContext, DropResult} from 'react-beautiful-dnd'


const App : React.FC = ()=> {
  
const [todo, setTodo] =useState<string>("")
const [todos, setTodos] = useState<Todo[]> ([])



useEffect(()=>{
if(localStorage.getItem("userId")){
  void getData()
  
}else{
  localStorage.setItem("userId", uuidv4());
  void getData()
}
},[])

const handleAdd = ()=>{
  if(todo){
    const newTasks = [...todos, {id: Date.now(), todo:todo,isDone:false}]
    void setData(newTasks)
    setTodo("")
  }
};

const handleDone = (id:Todo["id"])=>{
    const tempArray = todos.map((data)=>{
      if(data.id===id){
        data.isDone = !data.isDone
      }
      return data
      })
    void setData(tempArray)

};

const handleDelete = (id:Todo["id"])=>{
    const tempArray = todos.filter((data)=>{return data.id!==id})
    void setData(tempArray)
};

const handleEdit = (id:Todo["id"],text:Todo["todo"])=>{

  const tempArray = todos.map((data)=>{
    if(data.id===id){
      data.todo=text;
    }
    return data
  })
  void setData(tempArray)
};

const setData = async (newTasks:Todo[]) => {
  try {
    
    const serverRespose = await axios({
      method: "put",
      url: "http://localhost:4000/",
      data: {
          userId: localStorage.getItem("userId"),
          tasks:newTasks
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (serverRespose.data.message === "success") {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      setTodos(serverRespose.data.userData.tasks)
      toast.success("task updated");
    
    } else {
      toast.error("Somthing Went Wrong!");
      console.log(serverRespose.data)
    }
  } catch (error) {
    console.log(error);
    toast.error("Somthing Went Wrong!");
  }
};



const getData = async () => {
  try {
    
    const serverRespose = await axios({
      method: "get",
      url: "http://localhost:4000/",
      params: {
          userId: localStorage.getItem("userId"),
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (serverRespose.data.message === "success") {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      setTodos(serverRespose.data.userData.tasks)
      console.log(serverRespose.data)
    
    } else {
      toast.error("Somthing Went Wrong!");
      console.log(serverRespose.data)
    }
  } catch (error) {
    console.log(error);
    toast.error("Somthing Went Wrong!");
  }
};


const onDragEnd = (result:DropResult)=>{

  console.log(result)

}


  return (
    <div>
    <DragDropContext onDragEnd={onDragEnd}> 
      <div className=" p-5 bg-blue-900">
      
          <h1 className=" font-bold text-4xl flex justify-center text-white ">All in on one App</h1>
         
      </div>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />



      <DropableComponent todos={todos} setTodos={setTodos} handleDelete={handleDelete} handleDone={handleDone} handleEdit={handleEdit}/>
      
      {/* <div className="grid grid-cols-0 md:grid-cols-2 gap-4 ">
        
          <TodoList todos={todos} setTodos={setTodos} handleDelete={handleDelete} handleDone={handleDone} handleEdit={handleEdit}/>
          <TodoList1 todos={todos} setTodos={setTodos} handleDelete={handleDelete} handleDone={handleDone} handleEdit={handleEdit}/>
      </div> */}
     
      <Toaster />
      </DragDropContext>
    </div>
  )
}

export default App
