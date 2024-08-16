import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { removeTodo, toggleTask, updateTodo } from "../feature/todoSlice";
import { useState } from "react";

export default function DisplayTodo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editText, setEditText] = useState('');

  function handleEdit(todoId, todoText) {
    setEditingTodoId(todoId);
    setEditText(todoText);
  }

  function handleEditDone(event, todoId) {
    if (event.key === 'Enter') {
      dispatch(updateTodo({ id: todoId, text: editText }));
      setEditingTodoId(null);
    }
  }

  function handleInputChange(event) {
    setEditText(event.target.value);
  }

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <div key={todo.id} className="border-b border-gray-200 py-5">
            <div className="flex items-center py-5">
              <input 
                type="checkbox" 
                checked={todo.completed} 
                className="mx-3 size-4 mt-1"
                onChange={() => dispatch(toggleTask(todo.id))}
              />
              <i className={`mr-auto text-2xl ${todo.completed ? 'line-through' : ''}`}>
                {editingTodoId === todo.id ? (
                  <input
                    type="text"
                    className="w-full outline py-2 text-xl px-4"
                    value={editText}
                    onChange={handleInputChange}
                    onKeyDown={(event) => handleEditDone(event, todo.id)}
                  />
                ) : (
                  todo.text
                )}
              </i>
              <FiEdit 
                className="text-xl mr-auto cursor-pointer hover:text-green-800" 
                onClick={() => handleEdit(todo.id, todo.text)} 
              />
              <div className="bg-gray-100 rounded-full h-11 w-11 flex items-center justify-center">
                <MdDelete 
                  className="text-red-500 text-2xl cursor-pointer hover:text-red-400" 
                  onClick={() => dispatch(removeTodo(todo.id))}
                />
              </div>
            </div>
          </div>
        ))}
      </ul>
    </>
  );
}
