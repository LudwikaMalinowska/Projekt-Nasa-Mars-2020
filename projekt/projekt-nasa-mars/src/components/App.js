import React, {Component} from 'react';
import axios from 'axios';

import '../App.css';
import Form from "./Form";
import EditForm from "./EditForm";
import Result from "./Result";

const _ = require('lodash');

class App extends Component{

    state = {
        value: "",
        error: false,
        photosNumber: 0,
        submitted: false,
        searchBy: "mission",
        sort: false,
        sortBy: "",
        info: [],
        photoContent: [],
        favsToAdd: [],
        favs: [],
        favClick: false,
        editedData: {}
    }

    handleApplyEdit = (edited) => {

        const favs2 = this.state.favs;

        const idOfEdited = edited.idZdj;
        const objToFind = favs2.find(n => parseInt(n.idZdj) === parseInt(idOfEdited) );
        const index = favs2.indexOf(objToFind);

        const photoContent2 = this.state.photoContent;

        photoContent2[index] = (
            <div className={"result"} key={edited.idZdj} id={edited.idZdj}
            >
                <img  src={edited.srcZdj} alt={"zdj"} />
                <div
                    className={"favHeart"}
                    onClick={this.handleAddToFavClick}
                >
                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                </div>
                <p>Nazwa zdjęcia: {edited.nazwaZdj}</p>
                <p>id: {edited.idZdj}</p>
                <p>Numer misji: {edited.nrMisji}</p>
                <p>Data: {edited.dataZdj}</p>
                <p>Łazik: {edited.roverName}</p>
                <p>Status łazika: {edited.roverStatus}</p>
                <p>Kamera: {edited.kamera}</p>
                <p>Opis zdjęcia: {edited.opisZdj}</p>
                <p>E-mail osoby nadzorującej: {edited.bossEmail}</p>
                <div className={"editDelete"}>
                <p className={"editPhoto"}
                   onClick={this.handleEditClick}
                   id={edited.nrZdj}
                >Edytuj</p>
                <p
                    className={"deletePhoto"}
                    onClick={this.handleDeleteClick}
                >Usuń</p>
                </div>

            </div>
        )


        favs2[index] = {
            nazwaZdj: edited.nazwaZdj,
            idZdj: edited.idZdj,
            nrZdj: edited.nrZdj,
            dataZdj: edited.dataZdj,
            srcZdj: edited.srcZdj,
            roverName: edited.roverName,
            roverStatus: edited.roverStatus,
            nrMisji: edited.nrMisji,
            kamera: edited.kamera,
            opisZdj: edited.opisZdj,
            bossEmail: edited.bossEmail
        }

        this.setState({
            photoContent: photoContent2,
            favs: favs2
        })

    }

    handleDeleteClick = (e) => {
        const clickedPhoto = e.target.parentNode.parentNode;
        const clickedID = clickedPhoto.id;

        const objToDelete = this.state.favs.find(n => parseInt(n.idZdj) === parseInt(clickedID) );
        const favsWithoutDeleted = this.state.favs.filter(n => n !== objToDelete)

        this.state.favs = favsWithoutDeleted;

        document.getElementById("showFav").click()
    }



    handleInputChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleSearchByDateClick = (e) => {

        this.setState({
            value: "",
            searchBy: "date"
        })
    }

    handleSearchByMissionClick = (e) => {

        this.setState({
            value: "",
            searchBy: "mission"
        })
    }

    handleSortByNrClick = (e) => {

        this.setState({
            sort: true,
            sortBy: "nrMisji"
        })

        if (this.state.favClick === false)
            this.handleSubmit(e)
        else
            document.getElementById("showFav").click()
    }

    handleSortByIdClick = (e) => {

        this.setState({
            sort: true,
            sortBy: "id"
        })

        if (this.state.favClick === false)
            this.handleSubmit(e)
        else
            document.getElementById("showFav").click()
    }

    handleSortDontSortClick = (e) => {
        this.setState({
            sort: false,
            sortBy: ""
        })

        if (this.state.favClick === false)
            this.handleSubmit(e)
        else
            document.getElementById("showFav").click()
    }

    handleShowFavClick = (e) => {

        let favs2 = this.state.favs;

        if (favs2 !== undefined && favs2.length > 0) {


            if (this.state.sort === true) {

                // const sortedId =  _.sortBy(favs2, 'idZdj')

                this.setState({
                    info: favs2
                })
                this.handleSort();
                favs2 = this.state.info;
            }


            const photoContent2 = (
                favs2.map(n =>
                    (
                        <div className={"result"} key={n.idZdj} id={n.idZdj}
                        >
                            <img src={n.srcZdj} alt={"zdj"}/>
                            <div
                                className={"favHeart"}
                                onClick={this.handleAddToFavClick}
                            >
                                <i className="fa fa-heart" aria-hidden="true"></i>
                            </div>
                            <p>Nazwa zdjęcia: {n.nazwaZdj}</p>
                            <p>id: {n.idZdj}</p>
                            <p>Numer misji: {n.nrMisji}</p>
                            <p>Data: {n.dataZdj}</p>
                            <p>Łazik: {n.roverName}</p>
                            <p>Status łazika: {n.roverStatus}</p>
                            <p>Kamera: {n.kamera}</p>
                            <p>Opis zdjęcia: {n.opisZdj}</p>
                            <p>E-mail osoby nadzorującej: {n.bossEmail}</p>
                            <div className={"editDelete"}>
                            <p className={"editPhoto"}
                               onClick={this.handleEditClick}
                               id={n.nrZdj}
                            >Edytuj</p>
                            <p
                                className={"deletePhoto"}
                                onClick={this.handleDeleteClick}
                            >Usuń</p>
                            </div>


                        </div>
                    )
                )
            )

            this.setState({
                value: "",
                photoContent: photoContent2,
                favsToAdd: [],
                favClick: true,
                info: favs2
            })



        }
        else if (favs2.length === 0){
            this.setState({
                value: "",
                photoContent: [],
                favsToAdd: [],
                favClick: true,
                info: favs2
            })
        }
    }

    handleAddChoosenToFavClick = (e) => {

        const favsToAdd = this.state.favsToAdd;
        for (let i = 0; i < favsToAdd.length; i++){

            const isInFav = this.state.favs.includes(favsToAdd[i])
            if (!isInFav) {
                this.state.favs.push(favsToAdd[i])
            }
        }

        this.setState({
            favsToAdd: []
        })
    }

    handleAddToFavClick = (e) => {


        const clickedPhoto = e.target.parentNode.parentNode
        const photoId = clickedPhoto.id

        const info2 = this.state.info
        const objToFind = info2.find(n => parseInt(n.idZdj) === parseInt(photoId) );
        const photoIndex = this.state.info.indexOf(objToFind);

        const photoObj = this.state.info[photoIndex]

        const ifIsFavAlready = this.state.favs.includes(photoObj)
        const ifIsFavsToAddAlready = this.state.favsToAdd.includes(photoObj)


        if (!ifIsFavAlready && !ifIsFavsToAddAlready && photoObj !== undefined) {
            e.target.className = "fa fa-heart"
            // this.state.favs.push(photoObj)
            this.state.favsToAdd.push(photoObj)
        }
    }

    handleEditClick = (e) => {


        const clickedPhoto = e.target.parentNode.parentNode;
        const clickedId = clickedPhoto.id;
        const clickedInfo = this.state.favs.find(n => parseInt(n.idZdj) === parseInt(clickedId) );
        const clickedIndex = this.state.favs.indexOf(clickedInfo);

        const photoContent2 = this.state.photoContent;
        photoContent2[clickedIndex] = (
            <div className={"result"} key={clickedInfo.idZdj} id={clickedInfo.idZdj}>
                <img  src={clickedInfo.srcZdj} alt={"zdj"} />

            <EditForm
                photoInfo={clickedInfo}
                callbackFromParent={this.handleApplyEdit}
            />
            </div>
        )


        this.setState({
            value: "",
            photoContent: photoContent2,
        })

    }

    handleSort = () => {

        if (this.state.sort === true) {

            const info = this.state.info;
            const sortedId =  _.sortBy(info, 'idZdj')
            const sortedNr =  _.sortBy(info, 'nrMisji')


            let sortedInfo = info;
            if (this.state.sortBy === "id")
                sortedInfo = sortedId;
            else if (this.state.sortBy === "nrMisji")
                sortedInfo = sortedNr;


            this.setState({
                info: sortedInfo
            })

            if (!this.state.favClick)
                document.getElementById("wyszukaj").click()
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.value.length === 0) return

        else {

            const nasaAPIkey = 'C6I8154AGf0UtWBD48apqeVq9tE5ehYbyV8QjmcE';
            const earth_date = this.state.value
            const APIBaseLink = 'https://api.nasa.gov/mars-photos/api/v1/'
                + 'rovers/curiosity/photos?';

            let searchCriteria = '';
            let missionNumber = this.state.value
            if (this.state.searchBy === 'date')
                searchCriteria = 'earth_date=' + earth_date
            else if (this.state.searchBy === 'mission')
                searchCriteria = 'sol=' + missionNumber

            const link = APIBaseLink + searchCriteria + '&api_key=' + nasaAPIkey;


            axios.get(link)
                .then(res => {

                    if (res.status === 200) {
                        return res;
                    }
                    else {
                        throw Error("Błąd");
                    }
                })
                .then(res => {
                    const photosTab = res.data.photos;
                    this.setState(state => ({
                        err: false,
                        photosNumber: photosTab.length
                    }));
                    return photosTab
                })
                .then(data => {

                    const info = data.reduce( (acc, curr, index) => {

                        if (index > 500){
                            return [...acc]
                        }

                        const photoInfo = {
                            nazwaZdj: "",
                            idZdj: curr.id,
                            nrZdj: index,
                            dataZdj: curr.earth_date,
                            srcZdj: curr["img_src"],
                            roverName: curr.rover.name,
                            roverStatus: curr.rover.status,
                            nrMisji: curr.sol,
                            kamera: curr.camera.full_name,
                            opisZdj: "",
                            bossEmail: "",
                        }
                        return [...acc, photoInfo];
                    }, [])


                    this.setState( state => ({
                            submitted: true,
                            info: info
                        })
                    )


                    if (this.state.sort === true) {
                        this.handleSort()
                    }

                    const infoToPrint = this.state.info

                    const photoContent = (
                        infoToPrint.map(n =>
                            (
                                <div className={"result"} key={n.idZdj} id={n.idZdj}
                                >
                                    <img  src={n.srcZdj} alt={"zdj"} />
                                    <div
                                        className={"favHeart"}
                                        onClick={this.handleAddToFavClick}
                                    >
                                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                                </div>
                                    <p>id: {n.idZdj}</p>
                                    <p>Numer misji: {n.nrMisji}</p>
                                    <p>Data: {n.dataZdj}</p>
                                    {/*<p>Łazik: {n.roverName}</p>*/}
                                    {/*<p>Kamera: {n.kamera}</p>*/}


                                </div>
                            )
                        )
                    )

                    this.setState({
                        photoContent: photoContent,
                        favsToAdd: [],
                        favClick: false,
                        info: infoToPrint
                    })

                })
                .catch(err => {
                    console.log(err);
                    this.setState(prevState => ({
                        error: true,
                        value: prevState.value,
                        favClick: false
                    }))
                });
        }
    }

    handleClickOldest = (e) => {

        document.getElementById("dateSearch").click()

        const missionNumber = 1; //1sza, najstarsza misja, najstarsze zdjęcia
        const nasaAPIkey = 'C6I8154AGf0UtWBD48apqeVq9tE5ehYbyV8QjmcE';

        axios.get('https://api.nasa.gov/mars-photos/api/v1/'
            + 'rovers/curiosity/photos?'
            + 'sol=' + missionNumber
            + '&api_key=' + nasaAPIkey)
            .then(response => {
                if (response.status === 200) {
                    return response.data.photos;
                }
                else {
                    throw Error("Błąd");
                }
            })
            .then(response => {
                // const minDate = response[0].rover.landing_date
                const firstMissionDate = response[0].earth_date



                this.setState({
                    value: firstMissionDate,
                    favClick: false
                })

                document.getElementById("wyszukaj").click()

            })
            .catch(error => {
                console.log(error)
            })
    }

    handleClickNewest = (e) => {

        document.getElementById("dateSearch").click()

        const missionNumber = 1;
        const nasaAPIkey = 'C6I8154AGf0UtWBD48apqeVq9tE5ehYbyV8QjmcE';

        axios.get('https://api.nasa.gov/mars-photos/api/v1/'
            + 'rovers/curiosity/photos?'
            + 'sol=' + missionNumber
            + '&api_key=' + nasaAPIkey)
            .then(response => {

                if (response.status === 200) {
                    return response.data.photos;
                }
                else {
                    throw Error("Błąd");
                }
            })
            .then(response => {
                const maxDate = response[0].rover.max_date

                this.setState({
                    value: maxDate,
                    favClick: false
                })

                document.getElementById("wyszukaj").click()

            })
            .catch(error => {
                console.log(error)
            })
    }





    render() {
        return (<div className={"wrapper"}>
            <Form
                value={this.state.value}
                change={this.handleInputChange}
                submit={this.handleSubmit}/>

            <div className={"options wrapper"}>
            <div className={"searchCriteria"}>
                {/*<button>Zmień kryteria wyszukiwania</button>*/}
                <p>Zmień kryteria wyszukiwania</p>

                <p>Szukaj według:</p>
                <div>
                <p>Daty:</p>
                <input type="radio" id="dateSearch"
                       defaultChecked={"checked"}
                       name={"searchCriteria"} value={"date"}
                       onClick={this.handleSearchByDateClick}/>
                </div>
                <div>
                <p>Numeru misji:</p>
                <input type="radio" id="missionSearch"
                       name={"searchCriteria"} value={"mission"}
                       onClick={this.handleSearchByMissionClick}/>
                </div>

            </div>
            <div className={"sort"}>
                <p>Posortuj według: </p>

                <div className={"sortButtons"}>
                <button
                    onClick={this.handleSortByIdClick}>Id</button>
                <button
                    onClick={this.handleSortByNrClick}>Nr misji</button>
                <button
                    onClick={this.handleSortDontSortClick}>
                    Nie Sortuj</button>
                </div>
            </div>


            <div className={"minmaxButtons"}>

                <button id={"newest"} onClick={this.handleClickOldest}
                >Wyszukaj najstarsze</button>
                <button id={"oldest"} onClick={this.handleClickNewest}
                >Wyszukaj najnowsze</button>
            </div>
            <div className={"favButtons"}>
            <button
                id={"addFav"}
                onClick={this.handleAddChoosenToFavClick}
            >Dodaj wybrane do ulubionych</button>

            <button
                id={"showFav"}
                onClick={this.handleShowFavClick}
            >Pokaż zapisane zdjęcia</button>

        </div>
        </div>
                <div>
                    <Result marsPhoto={this.state}/>
                </div>

            </div>
            );
    }
}


export default App;
