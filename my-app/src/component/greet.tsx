import React, {useState} from 'react';

let Greet = ((props: any) => {
    const [count, setCount] = useState(0);
    // props.name='Pranav' this is wrong can't change the readonly props. they are immutable
    //multiple children in one div container
    const increment = (() => {
        if (count < 10) {
            setCount(count + 1);
        }
    })
    const decrement = (() => {
        if (count > 0) {
            setCount(count - 1);
        }
    })
    return (
        <div>
            <h1>Hello, {props.name}</h1>
            {props.children}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <p>{count}</p>
        </div>
    )
})
export default Greet;
