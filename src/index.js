import "./index.scss";
import { getWeather, updateBackground } from "./common/common.js";
import { loadSearchBar } from "./components/search_bar/search_bar.js";
import { loadWeatherTable } from "./components/weather_table/weather_table.js";

const pageLoad = async (location) => {
  const weatherData = await getWeather(location);

  await updateBackground(weatherData.temperature);
  await loadSearchBar();
  loadWeatherTable(weatherData);
};

pageLoad("London");
