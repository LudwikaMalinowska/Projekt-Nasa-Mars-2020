import React from "react";
import {Formik, Field} from 'formik';
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

// {/*// <div>*/}
// //{/*    <button id={"newest"}>Wyszukaj najstarsze</button>*/}
// //{/*    <button id={"oldest"}>Wyszukaj najnowsze</button>*/}
//
// </div>
//
// {/*// <div className={"search"}>*/}
// {/*//*/}
// {/*// <p>Mars photos</p>*/}
// {/*//*/}
// {/*// <Formik initialValues={{userId: 0, title: ""}}*/}
// //         onSubmit={props.submit}>
// //     {(formProps) => (
// //         <form
// //             onSubmit={formProps.submit}
// //         >
// //             <Field
// //                 type="text"
// //                 value={props.value}
// //                 name={"userId"}
// //                 onChange={props.change}
// //                 placeholder="wpisz datę"
// //             />
// //
// //             <button type={"submit"}>OK</button>
// //         </form>
// //     )}
// // </Formik>