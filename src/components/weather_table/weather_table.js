import "./weather_table.scss";
import html from "./weather_table.html";

const convertTemp = (clickedElem) => {
  let tempElem = document.getElementById("temperature");
  let originalTemp = parseFloat(tempElem.getAttribute("tempValue"));

  let newTemp = 0;

  if (clickedElem.innerText == "F") {
    newTemp = (originalTemp * 9) / 5 + 32;
  } else {
    newTemp = ((originalTemp - 32) * 5) / 9;
  }

  tempElem.setAttribute("tempValue", newTemp);
  tempElem.innerText = Math.round(newTemp) + "°";

  let newConvertButton = document.querySelector("a:not([href])");
  newConvertButton.setAttribute("href", "#");
  newConvertButton.addEventListener("click", (event) => {
    convertTemp(event.target);
  });

  let clickedElemReplacement = document.createElement("a");
  clickedElemReplacement.innerText = clickedElem.innerText;
  clickedElem.replaceWith(clickedElemReplacement);
};

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

  tableHtml.querySelector("a[href]").addEventListener("click", (event) => {
    convertTemp(event.target);
  });

  document
    .querySelector("main")
    .appendChild(tableHtml.getElementById("data-container"));

  //setTimeout needs to be made so that the query is put in the queue, thus waiting for the other async things to finish first (e.g. getWeatherData & updateBackground)
  setTimeout(() => {
    document.getElementById("data-container").className = "visible";
  }, 100);
};

const removeWeatherTable = () => {
  document.getElementById("data-container").remove();
};

export { loadWeatherTable, removeWeatherTable };
