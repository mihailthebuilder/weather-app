import "./weather_table.scss";
import html from "./weather_table.html";

const loadWeatherTable = (weatherData) => {
  let tableHtml = new DOMParser().parseFromString(html, "text/html");

  tableHtml.getElementById("city-name").innerText =
    weatherData.city + ", " + weatherData.country;
  tableHtml.getElementById("date-time").innerText = weatherData.dateTime;
  tableHtml.getElementById("description").innerText =
    weatherData.description.charAt(0).toUpperCase() +
    weatherData.description.slice(1);
  tableHtml.getElementById("weather-icon").src = weatherData.iconUrl;

  let tempElem = tableHtml.getElementById("temperature");
  let tempValue = weatherData.temperature;

  tempElem.innerText = Math.round(tempValue) + "°";
  tempElem.setAttribute("tempValue", tempValue);

  document
    .querySelector("main")
    .appendChild(tableHtml.getElementById("data-container"));

  //setTimeout needs to be made so that the query is put in the queue, thus waiting for the other async things to finish first (e.g. getWeatherData & updateBackground)
  setTimeout(() => {
    document.getElementById("data-container").className = "visible";
  }, 100);
};

export { loadWeatherTable };
