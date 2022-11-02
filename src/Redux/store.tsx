import { configureStore } from '@reduxjs/toolkit'
import ContactsSlice from './Slice/ContactsSlice'
import TodoSlice from './Slice/TodoSlice'
export const store = configureStore({
  reducer: {
    contacts:ContactsSlice,
    todo:TodoSlice,
  },
})