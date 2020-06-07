import React from "react";
import '../Result.css';


const Result = (props) => {
    // const {value,
    //     error,
    //     photosNumber,
    //     camera,
    //     earth_date,
    //     imgs_srcs,
    //     rover,
    //     sol,
    //     alldata} = props.marsPhoto;

    const {
        value,
        error,
        photosNumber,
        submitted,
        info
    } = props.marsPhoto;





    let content = null;



    if (!error && submitted)  {

        if (info.length === 0){

            content = (
                <div>
                    <p>Dzień: {value}</p>
                    <p>Liczba zdjęć: {photosNumber}</p>
                    <p>Tego dnia łazik Curiosity nie zrobił żadnych zdjęć, wybierz inną datę.</p>
                </div>
            )
        }

        console.log(info);
        console.log(info[3]);
        if (info[3] !== undefined) {

            const photoContent = (
                info.map(n =>
                    (
                        <div className={"result"} key={"result" + n.idZdj}>
                            <img  src={n.srcZdj} alt={"zdj"} />
                            <p>Data: {n.dataZdj}</p>
                            <p>Łazik: {n.roverName}</p>
                        </div>
                        )
                )
            )



            // photoContent.setAttribute("class", "resultList");
            // photoContent.

            // const info3 = info[3];
            // const img_src1 = info3.srcZdj;

            content = (
                // <>
                //
                // </>
                <div>

                    {/*<div className={"topInfo"}>*/}
                        <p>Dzień: {value}</p>
                        <p>Liczba zdjęć: {photosNumber}</p>
                    {/*</div>*/}

                    {/*<img src={img_src1} alt={""}/>*/}
                    <div className={"resultList"}>
                        {photoContent}
                    </div>


                    <p></p>
                    <p></p>
                </div>
            )
        }


        // let photoContent = (<div></div>)
        //
        // for (let i = 0; i < imgs_srcs.length; i++){
        //     const photo = React.createElement("img", {
        //         src: imgs_srcs[i],
        //         alt: ""})
        //     // photoContent.innerHTML += photo;
        //     photoContent.appendChild(photo);
        //
        // }
        //
        // console.log(photoContent)

        // let photoContent = "";
        // for (let i = 0; i < imgs_srcs.length; i++){
        //         // const photo = React.createElement("img", {
        //         //     src: imgs_srcs[i],
        //         //     alt: ""})
        //         const img_src1 = imgs_srcs[i];
        //         photoContent += `<img src={(alldata.i).src_img} alt={""}/>`;
        //         // photoContent.appendChild(photo);
        //
        //     }



        // const photoContent = []
        // for (let i = 0; i < imgs_srcs.length; i++) {
        //     const img_src1 = alldata[i].img_src;
        //     const img1 = React.createElement('img', {
        //         src: img_src1
        //
        //     });
        // }

        // console.log("pht con:")
        // console.log(photoContent)




    }

    return (

        <div className="result">
            {error ? `Nie mamy w bazie ${value}` : content}
        </div>

    );
}

export default Result;