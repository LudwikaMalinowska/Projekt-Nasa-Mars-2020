import React from "react";
import {Formik, Field} from 'formik';
import '../Form.css';


const Form = props => {

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
