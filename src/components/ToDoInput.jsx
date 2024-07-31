import { useEffect, useState } from "react";
import { BiSolidPlusCircle } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

export default function ToDoInput() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function handleChange(event) {
    const { value } = event.target;
    setTask(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (task.trim() !== '') {
      setTodos(prev => [...prev, task]);
      setTask('');
    } else {
      console.log('wrong input');
    }
  }

  function removeItem(index) {
    const newTodos = todos.filter((_,i) => i !== index)
    setTodos(newTodos);
  }

  return (
    <>
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
        <ul>
          {todos.map((todo, index) => (
            <div key={index} className="flex items-center border-b border-gray-200 py-5">
              <input type="checkbox" className="mx-3 size-4 mt-1"></input>
              <li className="mr-auto text-2xl">{todo}</li>
              <div className="bg-gray-100 rounded-full h-11 w-11 flex items-center justify-center">
                  <MdDelete className="text-red-500 text-2xl cursor-pointer" onClick={()=>removeItem(index)} />
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
