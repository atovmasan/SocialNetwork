import { useEffect } from "react";
import "./App.css";
import { Main } from "./Components/Main/Main.tsx";
import { Profile } from "./Components/Profile/Profile.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { db, getPosts } from "./Firebase/Initialaze.tsx";
import { useDispatch } from "react-redux";
import { getData } from "./Redux/Reducers/PostSlice.ts";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getPosts(db)
      .then((data) => {
        dispatch(getData(data as any));
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Main />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
