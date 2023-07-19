import React,{useRef} from 'react'
interface Props{
  todo:string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd:()=>void;
}



const InputField: React.FC <Props> = ({todo,setTodo, handleAdd})=> {
  const inputRef = useRef<HTMLInputElement>(null);


  return (
    <div className='p-10 flex justify-center relative md:w-1/2 h-36 mx-auto'>
        <input 
        ref={inputRef}
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        type="text" 
        className=" h-full w-full rounded-full shadow-sm focus:shadow-MainInput min-w-[50%] " 
        placeholder='Enter Your Task' />
        <button 
        onClick={()=>{
          handleAdd()
          inputRef.current?.blur()
        }}
        className=" bg-green-600   rounded-full absolute right-12 py-3 px-4 my-2 text-white hover:bg-green-500 active:scale-90">
          Go</button>
    </div>
  )
}

export default InputField
