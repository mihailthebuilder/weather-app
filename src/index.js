import "./index.scss";
import { getWeather, updateBackground } from "./common/common.js";
import { loadSearchBar } from "./components/search_bar/search_bar.js";
import { loadWeatherTable } from "./components/weather_table/weather_table.js";

const pageLoad = async () => {
  const weatherData = await getWeather("London");

  await updateBackground(weatherData.temperature);
  await loadSearchBar();
  loadWeatherTable(weatherData);
};

pageLoad();

/*
const updateWeather = async (location) => {
  try {
    let weatherData = await getWeather(location);

    let temp = weatherData.temperature;
    let tempRound = Math.round(temp);

    await updateBackground(temp);

    document.getElementById("city-name").innerText =
      weatherData.city + ", " + weatherData.country;
    document.getElementById("date-time").innerText = weatherData.dateTime;
    document.getElementById("description").innerText =
      weatherData.description.charAt(0).toUpperCase() +
      weatherData.description.slice(1);
    document.getElementById("weather-icon").src = weatherData.iconUrl;

    let tempElem = document.getElementById("temperature");
    tempElem.innerText = tempRound + "°";
    tempElem.setAttribute("tempValue", temp);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

updateWeather("London");

let button = document.querySelector("button");

button.addEventListener("click", () => {
  button.classList.add("button-clicked");
  setTimeout(() => {
    button.classList.remove("button-clicked");
  }, 200);

  let input = document.querySelector("input").value;
  updateWeather(input);
});

let aLinked = document.querySelector("a[href]");

aLinked.addEventListener("click", (event) => {
  document.querySelector("a:not([href])").setAttribute("href", "#");
  event.target.removeAttribute("href");

  if (event.target.innerText == "F") {
    let tempElem = document.getElementById("temperature");

    let celsTemp = parseFloat(tempElem.getAttribute("tempValue"));

    let fahrTemp = (celsTemp * 9) / 5 + 32;
    tempElem.setAttribute("tempValue", fahrTemp);
    tempElem.innerText = Math.round(fahrTemp);
  }
});
*/
