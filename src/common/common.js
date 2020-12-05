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
