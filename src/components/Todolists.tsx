import { MdOutlineKeyboardArrowDown, MdDelete } from "react-icons/md";
import { ITodoList } from "./TodoList";

interface TodolistsProps {
  task: ITodoList;
}

const Todolists: React.FC<TodolistsProps> = ({ task }) => {
  return (<>
          <li className="flex justify-between items-center p-3 mb-2 border-b list-none border-gray-300 cursor-pointer hover:bg-blue-100 rounded-lg transition-all duration-200 ease-in-out">
          <h2 className="max-w-1/2 w-max truncate">{task.title}</h2>
          <div className="btn-container">
            <button>
              <MdOutlineKeyboardArrowDown />
            </button>
            <button>
              <MdDelete />
            </button>
          </div>
          </li>
       </>)
};




export default Todolists;