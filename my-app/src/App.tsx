import React from 'react';
import Arithmetic_ops from "./component/arithmetic_ops";
import './App.css';
import DisplayName from "./component/displayName";
import MultipleInput from "./component/multipleInput";
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <div>
                    <Link to="/" className="btn btn-primary">Name</Link>
                    <Link to="/multiple" className="btn btn-primary">Full Name</Link>
                </div>
                <Routes>
                    <Route path={'/'} element={<DisplayName/>}></Route>
                    <Route path={'/multiple'} element={<MultipleInput/>}></Route>
                </Routes>
            </Router>


        </div>
    );
}

export default App;
