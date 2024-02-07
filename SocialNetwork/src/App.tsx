import './App.css';
import {Main} from './Components/Main/Main.tsx';
import {Profile} from './Components/Profile/Profile.tsx';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './Redux/Store.ts';
import {increment} from './Redux/Reducers/PostSlice.ts';

function App() {
    const dispatch = useDispatch();
    const count = useSelector((state : RootState) => state.post.value);

    const callback = () => {
        dispatch(increment())
    }

    return (
        <div className="App">
            <button onClick={callback}>Increment</button>
            <p>{count}</p>
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
