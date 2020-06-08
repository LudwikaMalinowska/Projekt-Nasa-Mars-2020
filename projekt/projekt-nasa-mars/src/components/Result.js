import React from "react";
import '../Result.css';
const _ = require('lodash');


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
        searchBy,
        idSort,
        info
    } = props.marsPhoto;





    let content = null;


    if (error){

        // let dayMissionLabel = "";
        if (searchBy === "mission"){
            content = (
                <div>
                    <p>Misja: {value}</p>
                    <p>Błąd. Wpisano nieprawidłowy numer misji. Wpisz liczbę z zakresu 1-2786</p>
                </div>
            )
        }

        else if (searchBy === "date"){
            content = (
                <div>
                    <p>Data: {value}</p>
                    <p>Błąd. Wpisano nieprawidłową datę. Wpisz datę w formacie rrrr-mm-dd</p>
                </div>
            )
        }



    }


    if (!error && submitted)  {

        if (info.length === 0){

            let dayMissionLabel = "";
            if (searchBy === "mission")
                dayMissionLabel = "Misja nr"
            else if (searchBy === "date")
                dayMissionLabel = "Data"

            content = (
                <div>
                    <p>{dayMissionLabel}: {value}</p>
                    <p>Liczba zdjęć: {photosNumber}</p>
                    <p>Tego dnia łazik Curiosity nie zrobił żadnych zdjęć, wybierz inną datę.</p>
                </div>
            )
        }

        console.log(info);
        // console.log(info[3]);
        if (info[3] !== undefined) {



            let sortedInfo =  _.sortBy(info, 'idZdj')
            console.log(sortedInfo)

            const infoToPrint = (idSort) ? sortedInfo : info;
            // console.log(infoToPrint)

            const photoContent = (
                infoToPrint.map(n =>
                    (
                        <div className={"result"} key={"result" + n.nrZdj} id={n.idZdj}>
                            <img  src={n.srcZdj} alt={"zdj"} />
                            <p>id: {n.idZdj}</p>
                            <p>Numer misji: {n.nrMisji}</p>
                            <p>Data: {n.dataZdj}</p>
                            <p>Łazik: {n.roverName}</p>
                            <p>Kamera: {n.kamera}</p>

                        </div>
                    )
                )
            )





            // photoContent.setAttribute("class", "resultList");
            // photoContent.

            // const info3 = info[3];
            // const img_src1 = info3.srcZdj;

            let dayMissionLabel = "";
            if (searchBy === "mission")
                dayMissionLabel = "Misja nr"
            else if (searchBy === "date")
                dayMissionLabel = "Data"

            content = (
                // <>
                //
                // </>
                <div>

                    {/*<div className={"topInfo"}>*/}
                    <p>{dayMissionLabel}: {value}</p>
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

    }

    return (

        <div className="result">
            {/*{error ? `Nie mamy w bazie ${value}` : content}*/}
            {content}
        </div>

    );
}

export default Result;