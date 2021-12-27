import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: "todos",
    initialState: [
        {id: 1, title: 'Task in this', completed: false},
        {id: 2, title: 'Design', completed: false},
        {id: 3, title: 'Development Tools', completed: false},
        {id: 4, title: 'React js containers', completed: false},
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            };
            state.push(newTodo);
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id);
                state[index].completed = action.payload.completed;
        },
            doneTodo: (state,  action) => {
                return state.filter((todo) => todo.id !== action.payload.id);
            },
    },
});

export const { addTodo, toggleComplete, doneTodo} = todoSlice.actions;

export default todoSlice.reducer;