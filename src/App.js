import React, { useState } from "react";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Pine City, MN</p>
          </div>
          <div className="temp">
            <h1>60℉</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
            <p className="bold">65℉</p>
            <p> Feels Like: </p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">12 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
