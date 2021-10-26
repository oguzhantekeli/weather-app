import React, { useState } from "react";
import "./home.css";
import trashIcon from "./trash.png";
const Home = () => {
  const [error, SetError] = useState(false);
  return (
    <div className="container">
      <h1>Weather App</h1>
      {/* Add new city */}
      <div className="addNew">
        <div className="inputGroup">
          <label htmlFor="addCity">Add New City:</label>
          <input placeholder="Enter City Name" name="addCity" type="text" />
        </div>
        <button>+ Add</button>
      </div>
      {error ? (
        <div className="friendlyErrorMessage">
          <p>
            Soorry.. That Country Does Not Exist in This Planet Earth!! - Yet
          </p>
        </div>
      ) : (
        ""
      )}

      {/* Refresh / Filter */}
      <div className="refreshSearch">
        <button>Refresh</button>
        <div className="searchFilterBar">
          <input type="text" name="filterCity" placeholder="search..." />
        </div>
      </div>

      {/* City List */}
      <div className="cityList">
        <Cities />
        <Cities />
        <Cities />
        <Cities />
        <Cities />
        <Cities />
      </div>
    </div>
  );
};

const Cities = () => {
  return (
    <div className="cityBox">
      <div className="infos">
        <div className="textInfo">
          <p>Petersburg, RU</p>
          <p>Sunny</p>
        </div>
        <div className="icon">
          <img
            src={`http://openweathermap.org/img/wn/${"10d"}@2x.png`}
            alt="City Weather Info"
          />
        </div>
      </div>
      <div className="temperature">
        <h2>33 C'</h2>
      </div>
      <div className="deleteCity">
        <img src={trashIcon} alt="trash icon" />
      </div>
    </div>
  );
};

export default Home;
