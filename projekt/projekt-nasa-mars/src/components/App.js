import React, {Component} from 'react';
import {Formik, Field} from 'formik';
import axios from 'axios';

import '../App.css';
import Form from "./Form";
import Result from "./Result";


// const axios = require('axios');

class App extends Component{

    state = {
        value: "",
        error: false,
        photosNumber: 0,
        // camera: "",
        // earth_date: "",
        // imgs_srcs: "",
        // rover: "",
        // sol: "",
        // alldata: ""
        submitted: false,
        searchBy: "mission",
        info: []
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


    handleSubmit = (e) => {
        e.preventDefault();
        // e.persist()
        console.log("klik")

        if (this.state.value.length === 0) return
        // if (prevState.value !== this.state.value) {
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


            // const ap2 = axios.get( APIBaseLink
            //     // + 'earth_date=' + earth_date
            //     + searchCriteria
            //     + '&api_key=' + nasaAPIkey)
                const ap2 = axios.get(link)
                .then(res => {
                    // console.log(response.ok)
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

                    console.log(this.props)
                })
                .catch(err => {
                    console.log(err);
                    this.setState(prevState => ({
                        error: true,
                        value: prevState.value
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
                    value: firstMissionDate
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
                    value: maxDate
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


                <div>

                    <button id={"newest"} onClick={this.handleClickOldest}
                    >Wyszukaj najstarsze</button>
                    <button id={"oldest"} onClick={this.handleClickNewest}
                    >Wyszukaj najnowsze</button>
                </div>
            <Result marsPhoto={this.state}/>
        </div>);
    }
}


export default App;
