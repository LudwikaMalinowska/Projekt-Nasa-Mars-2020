import React from "react";

//sfc stateless function component
const Form = props => {

    // const handleClick = (e) => {
    //     e.preventDefault();
    //
    //     // console.log(props.value)
    // }

    return (
        <form
            onSubmit={props.submit}
        >
            <input
                type="text"
                value={props.value}
                onChange={props.change}
                placeholder="wpisz datę"

            />
            <button
                // onClick={handleClick}
            >Szukaj</button>
        </form>
    )
}

export default Form;