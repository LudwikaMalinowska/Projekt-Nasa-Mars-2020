import React from "react";
import '../Result.css';

const Result = (props) => {


    const {
        value,
        error,
        photosNumber,
        submitted,
        searchBy,
        info,
        photoContent,
        favs,
        favClick,
    } = props.marsPhoto;


    let content = null;

    if (favClick === true){
        content = (

            <div>
                <p>Zapisane zdjęcia</p>
                <p>Liczba zdjęć: {favs.length}</p>
                <div className={"resultList"}>
                    {photoContent}
                </div>
            </div>
        )}


    else if (error){


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


    else if (!error && submitted)  {

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


        else if (info.length !== 0) {


            let dayMissionLabel = "";
            if (searchBy === "mission")
                dayMissionLabel = "Misja nr"
            else if (searchBy === "date")
                dayMissionLabel = "Data"

            content = (

                <div>
                    <p>{dayMissionLabel}: {value}</p>
                    <p>Liczba zdjęć: {photosNumber}</p>
                    <div className={"resultList"}>
                        {photoContent}
                    </div>
                </div>
            )
        }

    }

    return (

        <div className="result">
            {content}
        </div>

    );
}

export default Result;