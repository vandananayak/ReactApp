import React from 'react';
import Arithmetic_ops from "./component/arithmetic_ops";
import './App.css';

function App() {
    return (
        <div className="App">
            <Arithmetic_ops name={'Vandana'}>
                <p>Arithmetic operations</p>
            </Arithmetic_ops>
        </div>
    );
}

export default App;
