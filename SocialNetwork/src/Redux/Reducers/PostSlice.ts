import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, doc, getDocFromCache, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/Initialaze";

interface CounterState {
  text: string;
  LikeCount: number;
  DisLikeCount: number;
  Rate: "like" | "dislike" | "none";
  Comments: string[];
}

const initialState: CounterState = {
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
    getData: (data: CounterState) => {
      console.log(data)
      data.LikeCount += 1
      console.log(data)
    },
  },
});




export const getDataAsync = createAsyncThunk("getData",  
  async () => {
    
const querySnapshot = await getDocs(collection(db, "Posts"));
querySnapshot.forEach((doc) => {
  
  console.log(doc.id, " => ", doc.data());
}
)
 }
)




export const { getData } = postSlice.actions;

export default postSlice.reducer;
