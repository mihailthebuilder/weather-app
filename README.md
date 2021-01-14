# Weather App

## Overview

A simple web app that displays today's weather in a city input by the user. Made with JavaScript, [Webpack 5](https://webpack.js.org/), [Sass](https://sass-lang.com/) and the [Open Weather Map API](https://openweathermap.org/).

<span style="text-decoration: underline">**14.1.2021 update:**</span> Having had another look at the project, I realise the way I set up the animations are not ideal. I explain further [here](#sub-optimal-setup).

## Highlights

### Weather API

All the data is generated from the `getWeather` function in [common.js](./src/common/common.js) by using Open Weather Map's [current weather API](https://openweathermap.org/current):

```js
const getWeather = async (location) => {
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7986a26ff47f7262c74542709f87e5e7&units=metric`;

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
      iconUrl: `https://openweathermap.org/img/wn/${responseData.weather[0].icon}@2x.png`,
      dateTime: dateString,
    };
  } catch (error) {
    return false;
  }
};
```

The `appid` part of the `url` string represents an authentication which I obtained by signing up for a free account with Open Weather Map. Their API requires me to submit such a key in order to retrieve data. <span style="text-decoration: underline">**Note:**</span> You shouldn't reveal your API key for security reasons, but I decided to do it for showcasing purposes.

### Animations

#### Sub-optimal setup

### Friendly to all devices
