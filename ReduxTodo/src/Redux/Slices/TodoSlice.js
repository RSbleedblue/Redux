import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: "Todo",
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.todos.splice(action.payload, 1);
        },
        editTodo: (state, action) => {
            state.todos[action.payload.index] = action.payload.val;
        }
    }
});

export const { addTodo, deleteTodo, editTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
