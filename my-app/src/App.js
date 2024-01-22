import logo from './logo.svg';
import './App.css';
import {Main} from './Components/Main/Main.tsx';
import {Profile} from './Components/Profile/Profile.tsx';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {store} from './Redux/Store.ts';

function App() {
    let st = store.getState
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path=''
                        element={<Main/>}/>
                    <Route path="profile"
                        element={<Profile/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
