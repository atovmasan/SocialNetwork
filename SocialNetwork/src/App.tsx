import './App.css';
import {Main} from './Components/Main/Main.tsx';
import {Profile} from './Components/Profile/Profile.tsx';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useSelector} from 'react-redux';
import {RootState} from './Redux/Store.ts';

function App() {
    let count = useSelector((state : RootState) => state.post.value);
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path=''
                        element={<Main/>}/>
                    <Route path="profile"
                        element={<Profile/>}/>
                    <p>{count}</p>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
