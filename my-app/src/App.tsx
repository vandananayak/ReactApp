import React from 'react';
import Arithmetic_ops from "./component/arithmetic_ops";
import './App.css';
import DisplayName from "./component/displayName";
import MultipleInput from "./component/multipleInput";

function App() {
    return (
        <div className="App">
            <DisplayName />
            <MultipleInput/>
        </div>
    );
}

export default App;
