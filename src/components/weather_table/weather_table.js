import "./weather_table.scss";
import html from "./weather_table.html";

const loadWeatherTable = () => {
  document.getElementById("search-bar").insertAdjacentHTML("afterend", html);
};

export { loadWeatherTable };
