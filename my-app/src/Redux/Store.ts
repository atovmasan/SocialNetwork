import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Reducers/PostSlice'

export const store = configureStore({
  reducer: {
    post: counterSlice
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch