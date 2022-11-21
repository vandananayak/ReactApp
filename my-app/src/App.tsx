import React from 'react';
import Greet from "./component/greet";
import './App.css';

function App() {
    return (
        <div className="App">
            <Greet name={'Vandana'}>
                <p>Welcome to React app</p>
            </Greet>
        </div>
    );
}

export default App;
