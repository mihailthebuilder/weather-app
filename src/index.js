import "./index.scss";
import { getWeather, updateBackground } from "./common/common.js";
import { loadSearchBar } from "./components/search_bar/search_bar.js";
import { loadWeatherTable } from "./components/weather_table/weather_table.js";

// remember to apply try/catch
const pageLoad = async (location) => {
  const weatherData = await getWeather(location);

  await updateBackground(weatherData.temperature);
  await loadSearchBar();
  loadWeatherTable(weatherData);
};

pageLoad("London");

/*

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
