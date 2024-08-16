import { createSlice,nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [{id:1,completed: false,text: "Task one"}]
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state,actions) => {
            const todo = {
                id: nanoid(),
                completed: false,
                text: actions.payload
            }
            state.todos.push(todo)
        },

        removeTodo: (state,actions) => {
            state.todos = state.todos.filter((todo)=> todo.id !== actions.payload)
        },

        toggleTask: (state,actions) => {
            state.todos = state.todos.map(todo => todo.id === actions.payload ? {...todo, completed: !todo.completed}: todo)
        },

        updateTodo: (state,actions) => {
            const { id, text } = actions.payload;
            const todo = state.todos.find(todo => todo.id === id);
                if (todo) {
                todo.text = text;
                 }
        }
    }
})

export const { addTodo, removeTodo, toggleTask, updateTodo } = todoSlice.actions
export default todoSlice.reducer