import React, { useState, useRef } from "react";
import InputField from "./InputField";

type Todo = {
  id: number;
  task: string;
  completed: boolean;
};

interface ITodoList{
  title: string | undefined,
  description: string | undefined,
  date: string | undefined
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const [task, setTask] = useState<string>("");
  // const taskRef = useRef<HTMLInputElement | null>(null);

  const [todo, setTodo] = useState<ITodoList[]>([]);
  const titleRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLInputElement | null>(null);
  const dateRef = useRef<HTMLInputElement | null>(null);
  const [singleTodo, setSingleTodo] = useState<ITodoList | null>(null);


  const handleAddTodo = () => {
    const todoObj: ITodoList = {
      title: titleRef.current?.value,
      description: descriptionRef.current?.value,
      date: dateRef.current?.value
    };
    console.log(todoObj);

  };



  const handleToggleComplete = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
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

      {/* Todo List */}
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center mb-2 p-2 border-b border-gray-300"
          >
            <div
              className={`cursor-pointer ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
              onClick={() => handleToggleComplete(todo.id)}
            >
              {todo.task}
            </div>
            <button
              onClick={() => handleDelete(todo.id)}
              className="text-red-500 hover:text-red-700 focus:outline-none"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* No Todos Message */}
      {todos.length === 0 && (
        <p className="text-gray-500 text-center">No tasks available.</p>
      )}
    </div>
  );
};

export default TodoList;
