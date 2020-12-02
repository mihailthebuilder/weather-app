const COLOUR_SCHEME = [
  {
    name: 'very_cold',
    min_temp: -99,
    max_temp: -5,
    background_color: '#264653',
    primary_font_color: '#FFFFFF',
    secondary_font_color: '#AEAEAE'
  },
  {
    name: 'cold',
    min_temp: -4,
    max_temp: 5,
    background_color: '#2A9D8F',
    primary_font_color: '#FFFFFF',
    secondary_font_color: '#AEAEAE'
  },
  {
    name: 'neutral',
    min_temp: 6,
    max_temp: 16,
    background_color: '#E9C46A',
    primary_font_color: '#000000',
    secondary_font_color: '#6A6A6A'
  },
  {
    name: 'warm',
    min_temp: 17,
    max_temp: 27,
    background_color: '#F4A261',
    primary_font_color: '#000000',
    secondary_font_color: '#6A6A6A'
  },
  {
    name: 'hot',
    min_temp: 28,
    max_temp: 99,
    background_color: '#E76F51',
    primary_font_color: '#FFFFFF',
    secondary_font_color: '#AEAEAE'
  },
]

const getWeather = async (location) => {

  let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7986a26ff47f7262c74542709f87e5e7&units=metric`
  
  let response = await fetch(url);
  let responseData = await response.json();

  return {
    'city': responseData.name,
    'country': responseData.sys.country,
    'temperature': responseData.main.temp,
    'description': responseData.weather[0].description,
    'iconUrl': `http://openweathermap.org/img/wn/${responseData.weather[0].icon}@2x.png`
  };
}

const update = async (location) => {
  try {
    let weatherData = await getWeather(location);

    let newColourScheme = COLOUR_SCHEME.filter(scheme=>scheme.max_temp>=weatherData.temperature && scheme.min_temp <= weatherData.temperature)[0];

    document.body.style.background = newColourScheme.background_color;
  }
  catch (error) {
    console.log(`Error: ${error}`);
  }
}

update('London,CA');