import React, { useState } from "react";
import axios from "axios";

function App() {
  const [DataTransfer, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `${process.env.REACT_APP_WEATHER_ENDPOINT_URL}?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log("response.data is", response.data);
      })
      setLocation('');
    }
  };
  return (
    <div className="App">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyDown={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{DataTransfer.name}</p>
          </div>
          <div className="temp">
            {DataTransfer.main ? <h1>{DataTransfer.main.temp}℉</h1> : null}
          </div>
          <div className="description">
          {DataTransfer.main ? <p>{DataTransfer.weather[0].description}</p> : null}

          </div>
        </div>

        <div className="bottom">
          <div className="feels">
            {DataTransfer.main ? <p className="bold">{DataTransfer.main.feels_like}℉</p> : null}
            <p> Feels Like: </p>
          </div>
          <div className="humidity">
            {DataTransfer.main ? <p className="bold">{DataTransfer.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
          {DataTransfer.main ? <p className="bold">{DataTransfer.wind.speed}mph</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
