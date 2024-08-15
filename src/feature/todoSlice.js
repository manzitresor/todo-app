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
                text: actions.payload
            }
            state.todos.push(todo)
        }
    }
})

export const { addTodo } = todoSlice.actions
export default todoSlice.reducer