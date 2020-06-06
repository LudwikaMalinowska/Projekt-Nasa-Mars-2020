import React from "react";
import '../Result.css';


const Result = (props) => {
    const {value,
        error,
        photosNumber,
        camera,
        earth_date,
        imgs_srcs,
        rover,
        sol} = props.marsPhoto;

        const img_src = imgs_srcs[3]

    let content = null;

    // let photoContent = <div></div>
    //
    // for (let i = 0; i < imgs_srcs.length; i++){
    //     const photo = React.createElement("img", {
    //         src: imgs_srcs[i],
    //         alt: ""})
    //     // photoContent.innerHTML += photo;
    //     photoContent.appendChild(photo);
    //
    // }

    if (!error)  {


        content = (
            // <>
            //
            // </>
            <div>

                <p>Dzień: {value}</p>
                <p>Liczba zdjęć: {photosNumber}</p>
                <img src={img_src} alt={""}/>
                {/*{photoContent}*/}
                <p></p>
                <p></p>
            </div>
        )
    }

    return (

        <div className="result">
            {error ? `Nie mamy w bazie ${value}` : content}
        </div>

    );
}

export default Result;