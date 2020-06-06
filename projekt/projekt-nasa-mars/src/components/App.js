import React, {Component} from 'react';
import '../App.css';
import Form from "./Form";
import Result from "./Result";

const axios = require('axios');

class App extends Component{

    state = {
        value: "",
        error: false,
        photosNumber: 0,
        camera: "",
        earth_date: "",
        imgs_srcs: "",
        rover: "",
        sol: "",
    }

    handleInputChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
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
            const ap2 = axios.get('https://api.nasa.gov/mars-photos/api/v1/'
                + 'rovers/curiosity/photos?'
                + 'earth_date=' + earth_date
                + '&api_key=' + nasaAPIkey)
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

                    const photosSrcs = []
                    for (let i = 0; i < data.length; i++){
                        photosSrcs.push(data[i].img_src);
                    }

                    this.setState(state => ({
                        camera: data1.camera,
                        earth_date: data1.earth_date,
                        id: data1.id,
                        imgs_srcs: photosSrcs,
                        rover: data.rover,
                        sol: data.sol
                        })

                    )

                    console.log(this.props)
                })
                .catch(err => {
                    console.log(err);
                    this.setState(prevState => ({
                        err: true,
                        value: prevState.value
                    }))
                });
        }
    }





    render() {
        return (<div>
            <Form
                value={this.state.value}
                change={this.handleInputChange}
                submit={this.handleSubmit}/>
            <Result marsPhoto={this.state}/>
        </div>);
    }
}


export default App;
