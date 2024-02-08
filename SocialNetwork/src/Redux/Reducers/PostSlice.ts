import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../Store";

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
    like: (state) => {
      if (state.Rate != "like") {
        state.LikeCount++;
        state.Rate = "like";
      } else {
        state.LikeCount--;
        state.Rate = "none";
      }
    },
  },
});

export const { like } = postSlice.actions;

export default postSlice.reducer;
