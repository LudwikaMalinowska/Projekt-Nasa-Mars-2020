import React from "react";
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


                />
                <button
                    // onClick={handleClick}
                    id={"wyszukaj"}
                >Szukaj</button>

            </form>

        </div>


    )
}

export default Form;
