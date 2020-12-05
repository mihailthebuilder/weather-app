const getWeather = async (location) => {
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7986a26ff47f7262c74542709f87e5e7&units=metric`;

  let response = await fetch(url);
  let responseData = await response.json();

  let browserDate = new Date();

  let dateLocal = new Date(
    (responseData.dt +
      responseData.timezone +
      browserDate.getTimezoneOffset() * 60) *
      1000
  );

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let dateString =
    days[dateLocal.getDay()] + ", " + dateLocal.toTimeString().slice(0, 5);

  return {
    city: responseData.name,
    country: responseData.sys.country,
    temperature: responseData.main.temp,
    description: responseData.weather[0].description,
    iconUrl: `http://openweathermap.org/img/wn/${responseData.weather[0].icon}@2x.png`,
    dateTime: dateString,
  };
};

const updateBackground = async (temperature) => {
  const BACKGROUNDS = [
    {
      min_temp: -99,
      max_temp: -5,
      background_class: "freezing-background",
    },
    {
      min_temp: -5,
      max_temp: 5,
      background_class: "cold-background",
    },
    {
      min_temp: 5,
      max_temp: 16,
      background_class: "neutral-background",
    },
    {
      min_temp: 16,
      max_temp: 23,
      background_class: "warm-background",
    },
    {
      min_temp: 23,
      max_temp: 99,
      background_class: "hot-background",
    },
  ];

  let newColors = BACKGROUNDS.filter(
    (elem) => elem.max_temp > temperature && elem.min_temp <= temperature
  )[0];

  document.body.className = newColors.background_class;

  setTimeout(() => {
    console.log("test");
    return true;
  }, 5000);
};

export { getWeather, updateBackground };
