import React from 'react';

let Greet = ((props: any) => {
    // props.name='Pranav' this is wrong can't change the readonly props. they are immutable
    // return <h1>Hello, {props.name}</h1>

    //multiple children in one div container
    return (
        <div>
            <h1>Hello, {props.name}</h1>
            {props.children}
        </div>
    )
})
export default Greet;
