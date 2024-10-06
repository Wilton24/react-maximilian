import React, { useState, useRef, useEffect } from "react";
import InputField from "./InputField";
import { MdOutlineKeyboardArrowDown, MdDelete } from "react-icons/md";
import Todolists from "./Todolists";

type Todo = {
  id: number;
  task: string;
  completed: boolean;
};

export interface ITodoList{
  id: number | undefined
  title: string | undefined,
  description: string | undefined,
  date: string | undefined
};

const TodoList: React.FC = () => {


  const [todo, setTodo] = useState<ITodoList[]>([]);
  const titleRef = useRef<HTMLInputElement | null | any>();
  const descriptionRef = useRef<HTMLInputElement | null | any>();
  const dateRef = useRef<HTMLInputElement | null | any>();
  const [singleTodo, setSingleTodo] = useState<any>();

  useEffect(() => {
    console.log( singleTodo);
    console.log(todo);
    
  }, [singleTodo]);

  function clearTodo(){
    titleRef.current.value = '';
    descriptionRef.current.value = '';
    dateRef.current.value = '';
  };

  const handleAddTodo = () => {
    const todoObj: ITodoList = {
      id: todo.length +1,
      title: titleRef.current.value.trim(),
      description: descriptionRef.current.value.trim(),
      date: dateRef.current.value.trim()
    };
    setSingleTodo(todoObj);
    clearTodo();

    setTodo((prev:ITodoList[] ) => {
      return [...prev, todoObj]
    });
  };


  function handleAddingTodo(e:Event) {
    console.log(e.target);
  };

  function handleDeleteTask(){
    console.log('Task deleted')
  };

  return (
    <div className="w-[500px] mx-auto mt-10 p-5 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>

      <div className="button-container flex justify-end gap-3 mx-5">
        <button
          onClick={handleAddTodo}
          className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none"
        >Add
        </button>
      </div>
              
      <InputField
        type="text" 
        label="Title"
        placeholder="Enter Title" 
        ref={titleRef}
        />

      <InputField 
        type="textarea" 
        label="Description" 
        placeholder="Enter a description"
        ref={descriptionRef}
        />
      
      <InputField 
        type="date" 
        label="Due date" 
        placeholder="Enter due date"
        ref={dateRef}
        />    

        {/* key={task.id} className="p-3 mb-2 border-b list-none border-gray-300 cursor-pointer hover:bg-blue-100 rounded-lg transition-all duration-200 ease-in-out" */}

      <section>
        {todo.map((task: ITodoList)=>{
          return  <Todolists task={task} key={task.id} />          
        })}
      </section>

      {todo.length === 0 && (
        <p className="text-gray-500 text-center">No tasks available.</p>
      )}
    </div>
  );
};

export default TodoList;
