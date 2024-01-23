import { configureStore } from '@reduxjs/toolkit'
import PostReducer from './Reducers/PostSlice.ts'

export const store = configureStore({
  reducer: {
    post: PostReducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch