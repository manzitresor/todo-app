import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
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
        }
    }
})

export const { addTodo, removeTodo, toggleTask } = todoSlice.actions
export default todoSlice.reducer