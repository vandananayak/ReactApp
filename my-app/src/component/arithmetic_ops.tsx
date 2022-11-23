import React, {useState} from 'react';

let Arithmetic_ops = ((props: any) => {
    const [res, setRes] = useState(0);
    const [val1, setVal1] = useState(0);
    const [val2, setVal2] = useState(0);
    // props.name='Pranav' this is wrong can't change the readonly props. they are immutable
    //multiple children in one div container
    const increment = (() => {
        if (res < 10) {
            setRes(res + 1);
        }
    })
    const decrement = (() => {
        if (res > 0) {
            setRes(res - 1);
        }
    })
    const sum = () => {
      setRes(val1 +val2) ;
    }
    const difference = () => {
        setRes(val1 -val2) ;
    }
    const divide = () => {
        setRes(val1 /val2) ;
    }
    const multiply = () => {
        setRes(val1 *val2) ;
    }

    //destructuring props
    const {name, children} = props;
    return (

        <>

                <h1>Hello, {name}</h1>
                {children}
            <div className="IncDec">
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <p>{res}</p>
            </div>
            <input type="number" value={val1} onChange={(e) => {
                setVal1(parseInt(e.target.value));
            }}/>
            <input type="number" value={val2} onChange={(e) => {
                setVal2(parseInt(e.target.value));
            }}/>
            <div>
                <button onClick={sum}>+</button>
                <button onClick={difference}>-</button>
                <button onClick={divide}>/</button>
                <button onClick={multiply}>*</button>
            </div>
        </>
    )
})
export default Arithmetic_ops;
