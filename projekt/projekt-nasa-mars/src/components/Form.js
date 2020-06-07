import React from "react";
import '../Form.css';

//sfc stateless function component
const Form = props => {

    // const handleClick = (e) => {
    //     e.preventDefault();
    //
    //     // console.log(props.value)
    // }

    return (
        <div className={"search"}>

        <p>Mars photos</p>
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

        </div>
    )
}

export default Form;