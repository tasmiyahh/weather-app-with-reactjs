import axios from 'axios'
import Weathercard from '../weathercard';

import { useState } from "react";

const Home = () => {
    const [cityName, setcityName] = useState("");
    const [data, setData] = useState([])

    let submitHandler = (e) => {
        e.preventDefault();
        console.log('i am submit handler')

        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=e17758b6262dd8eecc69f94dc1e1cd42&units=metric`)
            .then(function (response) {
                // handle success
                console.log("response", response);
                setData(response.data.list)
            })
            .catch(function (error) {
                // handle error
                console.log("error in api call", error);
            })
            .then(function () {
                // always executed
            });


    }

    return (
        <div>
            <h1>Weather App Home</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="cityName">city name : </label>
                <input type="text" onChange={(e) => {
                    console.log(e.target.value);
                    setcityName(e.target.value)
                }} required id='cityName' placeholder="enter your city name" />
                <button type='submit' >Get weather data</button>
            </form>


            {
                data.map((eachItem, index) => {
                    return (
                        <Weathercard
                            key={index}
                            date={eachItem.dt_txt}
                            temp={eachItem.main.temp}
                            min={eachItem.main.temp_min}
                            max={eachItem.main.temp_max}

                        />)
                })



            }

        </div>
    )


}

export default Home;