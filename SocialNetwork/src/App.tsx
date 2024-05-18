import "./App.css";
import {Main} from "./Components/Main/Main.tsx";
import {Profile} from "./Components/Profile/Profile.tsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {getData, getDataAsync} from "./Redux/Reducers/PostSlice.ts";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "./Redux/Store.ts";


function App() {
    // const dispatch: AppDispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getDataAsync())
    // }, [])
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path=""
                        element={<Main/>}/>
                    <Route path="profile"
                        element={<Profile/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
