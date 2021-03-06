import "./search_bar.scss";
import html from "./search_bar.html";
import { delay } from "../../common/common.js";
import {
  loadWeatherTable,
  removeWeatherTable,
} from "../weather_table/weather_table.js";
import { updateBackground, getWeather } from "../../common/common.js";

const loadSearchBar = async () => {
  document.querySelector("main").insertAdjacentHTML("afterbegin", html);

  document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();

    let weatherData = await getWeather(document.querySelector("input").value);

    if (weatherData === false) {
      alert("Please input a valid city");
    } else {
      loadWeatherTable(weatherData);
      updateBackground(weatherData.temperature);
      removeWeatherTable();
    }
  });
  //setTimeout needs to be made so that the query is put in the queue, thus waiting for the other async things to finish first (e.g. getWeatherData & updateBackground)
  setTimeout(() => {
    document.getElementById("search-bar").className = "visible";
  }, 100);

  await delay(550);
};

export { loadSearchBar };
