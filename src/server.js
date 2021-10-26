const express = require("express");
const axios = require("axios");

const app = express();
app.get("/", (req, res) => {});
app.listen(3000, () => console.log("server started"));

const baseUrl = "api.openweathermap.org/data/2.5/weather?";
const apiKey = "22def37a278a366a676db77452b70402";

export const getWeatherData = async (cityName) => {
  try {
    const { data } = await axios.get(`${baseUrl}q=${cityName}&appid=${apiKey}`);
    return data;
  } catch (e) {
    throw e;
  }
};
