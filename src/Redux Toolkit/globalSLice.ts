import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type global = {
  txt: string;
};

type globalState = {
  TXT: string;
};

const initialState: globalState = {
  TXT: "kapibara",
};

const globalSlice = createSlice({
  name: "glob",
  initialState,
  reducers: {
    addTXT(state, action: PayloadAction<string>) {
      state.TXT = "kapibaraaaaa";
    },
  },
});

export const { addTXT } = globalSlice.actions;

export default globalSlice.reducer;
