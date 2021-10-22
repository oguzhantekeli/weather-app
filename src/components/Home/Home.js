import React, { useState } from "react";
// import { Link } from "react-router-dom";

const Home = () => {
  const [error, SetError] = useState(false);
  return (
    <div className="container">
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
      <City />
    </div>
  );
};

const City = () => {
  return (
    <div className="cityList">
      <div className="cityBox">
        <div className="infos">
          <div className="textInfo">
            <p>Antalya</p>
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
          <img
            src="https://cdn.icon-icons.com/icons2/2098/PNG/512/trash_icon_128726.png"
            alt="trash icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
