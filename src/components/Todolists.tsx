import { MdOutlineKeyboardArrowDown, MdDelete } from "react-icons/md";
import { GiBulletBill } from "react-icons/gi";
import { ITodoList } from "./TodoList";

interface TodolistsProps {
  task: ITodoList;
  key: number;
};

let passiveClassname = "flex justify-between items-center p-3 mb-2 border-b list-none border-gray-300 cursor-pointer hover:bg-blue-100 rounded-lg transition-all duration-200 ease-in-out"

const Todolists: React.FC<TodolistsProps> = ({ task, key }) => {

  return (<>
          <li className="list-none border-gray-300 cursor-pointer hover:bg-blue-100 rounded-lg" key={key}>
            <div className={passiveClassname}>
              <h2 className="max-w-1/2 w-max truncate">{task.title}</h2>
                <div className="btn-container">
                  <button>
                    <MdOutlineKeyboardArrowDown />
                  </button>
                  <button onClick={()=> console.log(`Deleting task with the id ${task.id}`)
                  }>
                    <MdDelete className="text-red-500"/>
                  </button>
                </div>
              </div>

            <div className="task-details flex items-center ms-5">
              <span><GiBulletBill /></span> 
              <p className="ml-4"> {task.description}</p>              
            </div>  
            
          </li>
          {/* <p className="ml-4"> <span><GiBulletBill /></span> {task.description}</p> */}
       </>)
};




export default Todolists;