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
    removeWeatherTable();

    let weatherData = await getWeather(document.querySelector("input").value);
    loadWeatherTable(weatherData);
    updateBackground(weatherData.temperature);
  });
  //setTimeout needs to be made so that the query is put in the queue, thus waiting for the other async things to finish first (e.g. getWeatherData & updateBackground)
  setTimeout(() => {
    document.getElementById("search-bar").className = "visible";
  }, 0);

  await delay(550);
};

export { loadSearchBar };
