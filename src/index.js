import "./index.scss";
import { getWeather } from "./common/common.js";

const BACKGROUNDS = [
  {
    min_temp: -99,
    max_temp: -5,
    background_class: "freezing-background",
  },
  {
    min_temp: -4,
    max_temp: 5,
    background_class: "cold-background",
  },
  {
    min_temp: 6,
    max_temp: 16,
    background_class: "neutral-background",
  },
  {
    min_temp: 17,
    max_temp: 27,
    background_class: "warm-background",
  },
  {
    min_temp: 28,
    max_temp: 99,
    background_class: "hot-background",
  },
];

const updateWeather = async (location) => {
  try {
    let weatherData = await getWeather(location);

    let temp = weatherData.temperature;
    let tempRound = Math.round(temp);
    let newColors = BACKGROUNDS.filter(
      (elem) => elem.max_temp >= tempRound && elem.min_temp <= tempRound
    )[0];

    document.body.className = newColors.background_class;

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
