import React, {Component} from 'react';
import {Formik, Field, useFormik} from 'formik';
import axios from 'axios';

import '../App.css';
import Form from "./Form";
import EditForm from "./EditForm";
import Result from "./Result";

const _ = require('lodash');
// const axios = require('axios');

class App extends Component{

    state = {
        value: "",
        error: false,
        photosNumber: 0,
        submitted: false,
        searchBy: "mission",
        idSort: false,
        info: [],
        photoContent: [],
        favs: [],
        favClick: false,
        editedData: {}
    }

    myCallback = (edited) => {
        // console.log(edited)
        // [...we will use the dataFromChild here...]
        // console.log(dataFromChild);

        // this.setState({
        //     editedData: dataFromChild
        // })
        // this.state.editedData = dataFromChild;
        console.log("11111:")
        console.log(edited);
        console.log("22222:")
        console.log(edited.nrZdj);


        const favs2 = this.state.favs;

        const idOfEdited = edited.idZdj;
        const objToFind = favs2.find(n => n.idZdj === idOfEdited);
        const index = favs2.indexOf(objToFind);
        console.log("3333: " + index)

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
                <p>id: {edited.idZdj}</p>
                <p>Numer misji: {edited.nrMisji}</p>
                <p>Data: {edited.dataZdj}</p>
                <p>Łazik: {edited.roverName}</p>
                <p>Kamera: {edited.kamera}</p>
                <p className={"editPhoto"}
                   onClick={this.handleEditClick}
                   id={edited.nrZdj}
                >Edytuj</p>

            </div>
        )


        favs2[index] = {
            idZdj: edited.idZdj,
            nrZdj: edited.nrZdj,
            dataZdj: edited.dataZdj,
            srcZdj: edited.srcZdj,
            roverName: edited.roverName,
            nrMisji: edited.nrMisji,
            kamera: edited.kamera
        }

        this.setState({
            photoContent: photoContent2,
            favs: favs2
        })




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

    handleSortByIdClick = (e) => {

        this.setState({
            idSort: true
        })
    }

    handleSortDontSortClick = (e) => {
        this.setState({
            idSort: false
        })
    }

    handleShowFavClick = (e) => {

        const favs2 = this.state.favs

        if (favs2 !== undefined && favs2.length > 0) {

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
                                <i className="fa fa-heart-o" aria-hidden="true"></i>
                            </div>
                            <p>id: {n.idZdj}</p>
                            <p>Numer misji: {n.nrMisji}</p>
                            <p>Data: {n.dataZdj}</p>
                            <p>Łazik: {n.roverName}</p>
                            <p>Kamera: {n.kamera}</p>
                            <p className={"editPhoto"}
                               onClick={this.handleEditClick}
                               id={n.nrZdj}
                            >Edytuj</p>


                        </div>
                    )
                )
            )

            this.setState({
                value: "",
                photoContent: photoContent2,
                favClick: true,
                info: favs2
            })

        }
    }

    handleAddToFavClick = (e) => {
        console.log(e.target)

        const clickedPhoto = e.target.parentNode.parentNode
        // const clickedPhoto = e.target.parentNode
        console.log("ad fav klik")
        console.log(clickedPhoto)
        console.log("fav photos:")
        console.log(this.state.favs)

        // const photoIndex = e.target.parentNode.id
        const photoId = clickedPhoto.id
        console.log(photoId) //ok
        // const objToFind = this.state.favs.find(n => n.idZdj === photoId);
        // const photoIndex = this.state.favs.indexOf(objToFind);

        const info2 = this.state.info
        console.log(info2)
        console.log(info2[0].idZdj)
        const objToFind = info2.find(n => n.idZdj == photoId);
        console.log(objToFind)
        const photoIndex = this.state.info.indexOf(objToFind);
        console.log(photoIndex)

        const photoObj = this.state.info[photoIndex]
        console.log(photoObj)

        console.log("photo obj")
        console.log(photoObj)

        const ifIsFavAlready = this.state.favs.includes(photoObj)
        console.log("fav?:" + ifIsFavAlready)
        console.log(!ifIsFavAlready && photoObj !== undefined)

        if (!ifIsFavAlready && photoObj !== undefined) {
            e.target.className = "fa fa-heart"
            this.state.favs.push(photoObj)
        }
    }

    handleEditClick = (e) => {

        // const clickedIndex = e.target.id;
        const clickedPhoto = e.target.parentNode;
        console.log("1aaaa: ")
        console.log(clickedPhoto)

        // const idOfEdited = edited.idZdj;
        // const objToFind = favs2.find(n => n.idZdj === idOfEdited);
        // const index1 = favs2.indexOf(objToFind);

        const clickedId = clickedPhoto.id;
        console.log("bbbb: ")
        console.log(clickedId)
        // const objToFind = this.state.favs.find(n => n.idZdj == clickedId);
        const clickedInfo = this.state.favs.find(n => n.idZdj == clickedId);
        console.log("cccc: ")
        // console.log(objToFind)
        console.log(clickedInfo)
        const clickedIndex = this.state.favs.indexOf(clickedInfo);
        console.log("ddd:")
        console.log(clickedIndex)

        // const clickedInfo = this.state.info[clickedIndex];
        // console.log("eee: ")
        // console.log(clickedInfo)

        const photoContent2 = this.state.photoContent;
        photoContent2[clickedIndex] = (
            <div className={"result"} key={clickedInfo.idZdj} id={clickedInfo.idZdj}>
            {/*<div className={"result"} key={clickedInfo.idZdj} id={clickedInfo.nrZdj}>*/}


                <img  src={clickedInfo.srcZdj} alt={"zdj"} />

            <EditForm
                photoInfo={clickedInfo}
                callbackFromParent={this.myCallback}
            />

            </div>
        )


        this.setState({
            value: "",
            photoContent: photoContent2,
        })

    }

    // handleSaveEditingClick = (e) => {
    //
    //     const index = e.target.parentNode.id
    //     console.log(this.state.editedData)
    //
    //
    // }


    handleSubmit = (e) => {
        e.preventDefault();
        // e.persist()
        console.log("klik")

        if (this.state.value.length === 0) return

        else {

            const nasaAPIkey = 'C6I8154AGf0UtWBD48apqeVq9tE5ehYbyV8QjmcE';
            // const ap = axios.get('https://api.nasa.gov/planetary/apod?api_key=C6I8154AGf0UtWBD48apqeVq9tE5ehYbyV8QjmcE')
            //     .then(res => {
            //             console.log(res)
            //         }).catch(err => {
            //                         console.log(err);
            //                     });

            // `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${nasaAPIkey}`

            // const earth_date = '2015-6-3'
            const earth_date = this.state.value
            const APIBaseLink = 'https://api.nasa.gov/mars-photos/api/v1/'
                + 'rovers/curiosity/photos?';

            let searchCriteria = '';
            // let missionNumber = 2;
            let missionNumber = this.state.value
            if (this.state.searchBy === 'date')
                searchCriteria = 'earth_date=' + earth_date
            else if (this.state.searchBy === 'mission')
                searchCriteria = 'sol=' + missionNumber

            const link = APIBaseLink + searchCriteria + '&api_key=' + nasaAPIkey;
            console.log("Link: " + link)



            const ap2 = axios.get(link)
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
                    console.log(photosTab);
                    this.setState(state => ({
                        err: false,
                        photosNumber: photosTab.length
                    }));
                    return photosTab
                })
                .then(data => {
                    console.log(data)
                    const data1 = data[0]



                    const info = data.reduce( (acc, curr, index) => {

                        if (index > 500){
                            return [...acc]
                        }

                        const photoInfo = {
                            idZdj: curr.id,
                            nrZdj: index,
                            dataZdj: curr.earth_date,
                            srcZdj: curr["img_src"],
                            roverName: curr.rover.name,
                            nrMisji: curr.sol,
                            kamera: curr.camera.full_name
                        }
                        return [...acc, photoInfo];
                    }, [])

                    console.log(info)


                    this.setState( state => ({
                            submitted: true,
                            info: info
                        })
                    )

                    // console.log(this.props)


                    let content = "";
                    let sortedInfo =  _.sortBy(info, 'idZdj')
                    console.log(sortedInfo)

                    const infoToPrint = (this.idSort) ? sortedInfo : info;
                    // console.log(infoToPrint)

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
                                    <p>Łazik: {n.roverName}</p>
                                    <p>Kamera: {n.kamera}</p>


                                </div>
                            )
                        )
                    )

                    this.setState({
                        photoContent: photoContent,
                        favClick: false
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
        console.log("najstarsze")

        const missionNumber = 1; //1sza, najstarsza misja, najstarsze zdjęcia
        const nasaAPIkey = 'C6I8154AGf0UtWBD48apqeVq9tE5ehYbyV8QjmcE';
        const ap2 = axios.get('https://api.nasa.gov/mars-photos/api/v1/'
            + 'rovers/curiosity/photos?'
            + 'sol=' + missionNumber
            + '&api_key=' + nasaAPIkey)
            .then(response => {
                console.log("najst ok klik")

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

                console.log(response)

                this.setState({
                    value: firstMissionDate,
                    favClick: false
                })

                // e.persist()
                // this.handleSubmit(e)
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleClickNewest = (e) => {
        console.log("najnowsze")

        const missionNumber = 1;
        const nasaAPIkey = 'C6I8154AGf0UtWBD48apqeVq9tE5ehYbyV8QjmcE';
        const ap2 = axios.get('https://api.nasa.gov/mars-photos/api/v1/'
            + 'rovers/curiosity/photos?'
            + 'sol=' + missionNumber
            + '&api_key=' + nasaAPIkey)
            .then(response => {
                console.log("najst ok klik")

                if (response.status === 200) {
                    return response.data.photos;
                }
                else {
                    throw Error("Błąd");
                }
            })
            .then(response => {
                console.log(response)
                const maxDate = response[0].rover.max_date
                console.log(maxDate)

                this.setState({
                    value: maxDate,
                    favClick: false
                })

                // e.persist()
                // this.handleSubmit(e)

            })
            .catch(error => {
                console.log(error)
            })
    }





    render() {
        return (<div>
            <Form
                value={this.state.value}
                change={this.handleInputChange}
                submit={this.handleSubmit}/>
            <div>
                <button>Zmień kryteria wyszukiwania</button>

                <p>Szukaj według:</p>
                <p>Daty:</p>
                <input type="radio" id="dateSearch"
                       name={"searchCriteria"} value={"date"}
                       onClick={this.handleSearchByDateClick}/>
                <p>Numeru misji:</p>
                <input type="radio" id="missionSearch"
                       defaultChecked={"checked"}
                       name={"searchCriteria"} value={"mission"}
                       onClick={this.handleSearchByMissionClick}/>

            </div>
            <div className={"sort"}>
                <p>Posortuj według id </p>
                {/*<p>id: </p>*/}
                {/*<input type="radio" id="idFilter"*/}
                {/*       name={"filterCriteria"} value={"id"}*/}
                {/*       // onClick={this.handleSearchByDateClick}*/}
                {/*/>*/}
                <button
                    onClick={this.handleSortByIdClick}>Sortuj</button>
                <button
                    onClick={this.handleSortDontSortClick}>
                    Nie Sortuj</button>

            </div>


            <div>

                <button id={"newest"} onClick={this.handleClickOldest}
                >Wyszukaj najstarsze</button>
                <button id={"oldest"} onClick={this.handleClickNewest}
                >Wyszukaj najnowsze</button>
            </div>

            <button
                id={"showFav"}
                onClick={this.handleShowFavClick}
            >Pokaż zapisane zdjęcia</button>
            <Result marsPhoto={this.state}/>
        </div>);
    }
}


export default App;
