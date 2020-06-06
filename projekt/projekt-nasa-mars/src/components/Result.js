import React from "react";
import '../Result.css';


const Result = (props) => {
    const {value,
        error,
        photosNumber,
        camera,
        earth_date,
        img_src,
        rover,
        sol} = props;

    let content = null;

    if (!err)  {


        content = (
            // <>
            //
            // </>
            <div>
                ${props}
            </div>
        )
    }

    return (

        <div className="result">
            {err ? `Nie mamy w bazie ${city}` : content}
        </div>

    );
}

export default Result;