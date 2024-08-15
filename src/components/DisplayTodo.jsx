import { useSelector,useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { removeTodo } from "../feature/todoSlice";
import { toggleTask } from "../feature/todoSlice";

export default function DisplayTodo() {
  const todos = useSelector((state)=> state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <ul>
          {todos.map((todo, index) => (
            <div key={index} className="flex items-center border-b border-gray-200 py-5">
              <input 
                    type="checkbox" 
                    checked={todo.completed} 
                    value={todo.completed}  
                    className="mx-3 size-4 mt-1"
                    onChange={()=> dispatch(toggleTask(todo.id))}
                    ></input>
              <li className={`mr-auto text-2xl ${todo.completed? 'line-through': ''}`}>{todo.text}</li>
              <div className="bg-gray-100 rounded-full h-11 w-11 flex items-center justify-center">
                  <MdDelete className="text-red-500 text-2xl cursor-pointer" onClick={()=> dispatch(removeTodo(todo.id))}/>
              </div>
            </div>
          ))}
        </ul>
    </>
  )
}
