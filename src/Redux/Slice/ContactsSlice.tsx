import {createSlice} from "@reduxjs/toolkit";


const initialState =[
    {id:1 , name:'ali' ,age:22 , email:'ali@example.com' , number:'09123456789' ,favorite:true ,country:'iran'},
    {id:2 , name:'amir' ,age:30 , email:'amir@example.com' , number:'09123456789' ,favorite:false ,country:'iran'},
    {id:3 , name:'mahdi' ,age:10 , email:'mahdi@example.com' , number:'09123456789' ,favorite:false ,country:'iran'},
    {id:4 , name:'farzin' ,age:25 , email:'farzin@example.com' , number:'09123456789' ,favorite:true ,country:'iran'},
    {id:5 , name:'mohammad' ,age:48 , email:'mohammad@example.com' , number:'09123456789' ,favorite:true ,country:'iran'}
  ]

export const ContactsSlice = createSlice({
    
    name: 'contacts',
    initialState,
    reducers: {
        deleteContact: (state, action) => {
            const {payload} = action
            const index = state.findIndex(contact => contact.id === payload)
            state.splice(index, 1)
        },
        addContact: (state, action) => {
            
            const {payload} = action
            state.push(payload)
        },
        updateContact: (state, action) => {
            
            const {payload} = action
            const index = state.findIndex(state => state.id === payload.id)
            state[index] = payload
        },
        changeFavorite:(state,action)=>{
            const {payload} = action
            const index = state.findIndex( state => state.id === payload)
            state[index].favorite = (! state[index].favorite)
          }
    }
})

export const {deleteContact, addContact, updateContact,changeFavorite} = ContactsSlice.actions


export default ContactsSlice.reducer