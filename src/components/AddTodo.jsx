import { BiSolidPlusCircle } from "react-icons/bi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todoSlice"

export default function AddTodo() {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    function handleChange(event) {
        const { value } = event.target;
        setTask(value);
      }

    function handleSubmit(e) {
        e.preventDefault();
        if (task.trim() !== '') {
          dispatch(addTodo(task))  
          setTask('');
        } else {
          console.log('wrong input');
        }
      }
  return (
     <div className="pt-32">
         <h1 className="text-6xl text-gray-200 font-bold text-center my-4">todos</h1>
            <form className="relative" onSubmit={handleSubmit}>
            <div className="flex items-center">
                <input
                className="block w-full shadow-xl text-gray-700 border border-gray-200 py-3 px-4 mb-3 focus:outline-none focus:bg-white focus:border-none rounded-2xl"
                type="text"
                placeholder="Add todo..."
                name="addTask"
                onChange={handleChange}
                value={task}
                />
                <button type="submit" className="absolute right-6 top-2">
                <BiSolidPlusCircle className="text-3xl text-green-800" />
                </button>
            </div>
            </form>
      
    </div>
  )
}
