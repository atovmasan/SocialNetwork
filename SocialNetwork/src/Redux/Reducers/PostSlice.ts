import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, doc, getDocFromCache, getDocs } from "firebase/firestore";
import { db, getPosts } from "../../Firebase/Initialaze";

interface CounterState {
  text: string;
  LikeCount: number;
  DisLikeCount: number;
  Rate: "like" | "dislike" | "none";
  Comments: string[];
}

let initialState: CounterState = {
  text: "SomeText",
  LikeCount: 0,
  DisLikeCount: 0,
  Rate: "none",
  Comments: [""],
};

export const postSlice = createSlice({
  name: "Post",
  initialState,
  reducers: {
    giveLike(state) {
      console.log(state)
      state.LikeCount++
      console.log(state)
    },
   // getData: (state: any) => {
     //  console.log(state)
     // state = getDataAsync()
     // console.log(state)
    //}
  },
});




export const getDataAsync = createAsyncThunk('getData', async () => {
  const data = await getPosts();
  return data
});



export const { giveLike } = postSlice.actions;

export default postSlice.reducer;
