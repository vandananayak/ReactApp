import React, {useState} from 'react';

let Arithmetic_ops = ((props: any) => {
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

    //destructuring props
    const {name, children} = props;
    return (

        <div>
            <h1>Hello, {name}</h1>
            {children}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <p>{count}</p>
        </div>
    )
})
export default Arithmetic_ops;
