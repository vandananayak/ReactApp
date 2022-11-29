import React, {useState} from "react";

function MultipleInput() {

    const initialValues = {
        company: "",
        position: "",
    };
    const [values, setValues] = useState(initialValues);
    const handleInputChange = (e: any) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    function submitInput() {
        alert(values.company + ' ' + values.position)
    }

    return (<>
        <form onSubmit={submitInput}>
            <input
                value={values.company}
                onChange={handleInputChange}
                name="company"
            />
            <input
                value={values.position}
                onChange={handleInputChange}
                name="position"
            />
            <button type="submit"> Submit </button>
        </form>
    </>);
}

export default MultipleInput;