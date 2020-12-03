const BACKGROUNDS = [
  {
    min_temp: -99,
    max_temp: -5,
    background_class: 'freezing-background',
    color_class: 'dark'
  },
  {
    min_temp: -4,
    max_temp: 5,
    background_class: 'cold-background',
    color_class: 'dark'
  },
  {
    min_temp: 6,
    max_temp: 16,
    background_class: 'neutral-background',
    color_class: 'bright'
  },
  {
    min_temp: 17,
    max_temp: 27,
    background_class: 'warm-background',
    color_class: 'bright'
  },
  {
    min_temp: 28,
    max_temp: 99,
    background_class: 'hot-background',
    color_class: 'dark'
  },
]

const getWeather = async (location) => {

  let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7986a26ff47f7262c74542709f87e5e7&units=metric`
  
  let response = await fetch(url);
  let responseData = await response.json();

  let browserDate = new Date();

  let dateLocal = new Date((responseData.dt+responseData.timezone+browserDate.getTimezoneOffset()*60)*1000);

  let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  console.log(dateLocal.toTimeString());
  let dateString = days[dateLocal.getDay()] + ', ' + dateLocal.toTimeString().slice(0,5);

  console.log(dateLocal.getTimezoneOffset());

  return {
    'city': responseData.name,
    'country': responseData.sys.country,
    'temperature': responseData.main.temp,
    'description': responseData.weather[0].description,
    'iconUrl': `http://openweathermap.org/img/wn/${responseData.weather[0].icon}@2x.png`,
    'dateTime': dateString
  };
}

const update = async (location) => {
  try {
    let weatherData = await getWeather(location);

    let newColors = BACKGROUNDS.filter(elem=>elem.max_temp>=weatherData.temperature && elem.min_temp <= weatherData.temperature)[0];

    document.body.className = newColors.background_class;

  }
  catch (error) {
    console.log(`Error: ${error}`);
  }
}

update('London,CA');