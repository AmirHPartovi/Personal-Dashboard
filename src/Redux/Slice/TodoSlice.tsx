import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {id: 1, title: 'buy ticket', status: false},
    {id: 2, title: 'Washing car', status: true},
    {id: 3, title: 'clean room', status: false},
    {id: 4, title: 'buy milk', status: true},
    {id: 5, title: 'make a cake', status: false},
]

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const {payload} = action
            state.push(payload)
        },
        deleteTodo: (state, action) => {
            
            const {payload} = action.payload
            const index = state.findIndex(todo => todo.id === payload)
            state.splice(index, 1)
        },
        updateTodo: (state, action) => {
            const {payload} = action
            const index = state.findIndex(state => state.id === payload.id)
            state[index] = payload
        },
        checkTodo:(state,action)=>{
            const {payload} = action
            const index = state.findIndex( state => state.id === payload)
            state[index].status = (! state[index].status)
        }
    }
})

export const {addTodo, deleteTodo, updateTodo , checkTodo} = todoSlice.actions

export default todoSlice.reducer