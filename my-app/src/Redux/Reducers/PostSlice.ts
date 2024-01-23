import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../Store'

interface CounterState {
  value: number
}


const initialState: CounterState = {
  value: 0,
}

export const postSlice = createSlice({
  name: 'counter',

  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    }
  },
})

export const { increment } = postSlice.actions

export default postSlice.reducer

