import React, {useState} from "react";

function DisplayName() {
    const [name, setname] = useState("");

    function submitName() {
        alert(name)
    }

    function handleChanges(event: any) {
        setname(event.target.value)
    }

    return (
        <>
            <form onSubmit={submitName}>
                <label>Name: </label>
                <input type="text" value={name} onChange={handleChanges}/>
                <button type={"submit"}>Submit</button>
            </form>
        </>
    )
}

export default DisplayName;