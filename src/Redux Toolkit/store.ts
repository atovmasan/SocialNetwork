import { configureStore } from "@reduxjs/toolkit";
import globalSLice from "./globalSLice";

const store = configureStore({
  reducer: {
    global: globalSLice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
