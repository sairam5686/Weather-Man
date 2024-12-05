const search_bar = document.querySelector(".subscribe-input");
const search_button = document.querySelector(".subscribe-button");
const form = document.querySelector(".subscribe-form");


//for text box
const description = document.querySelector(".desc-weather");
const degree = document.querySelector(".degree");
const cloud_box = document.querySelector(".cloud");
const humid_box = document.querySelector(".humid");
const pressure_box = document.querySelector(".Pressure");
const country_box = document.querySelector(".coun-city");
const image_for_weather = document.querySelector(".weather-image");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  requester();
});
//https://api.openweathermap.org/data/2.5/weather?units=metric&appid='

const requester = async () => {
  try {
    const city = search_bar.value.toLowerCase();
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=8412f2a6f71551806f2c02e327775519`,
      {
        method: "GET",
        
      }
    )
    if(!response.ok){
      throw new Error(response.statusText);
    }
    const data = await response.json()
    const weather_desc = (data.weather[0].description);
    
    //feren to celcius
    //(°F - 32) × 5/9

    const weather_cel = (data.main.temp - 32) *(5/9) ;
    const info_pressure = (data.main.pressure);
    const info_humid = (data.main.humidity);
    const info_cloud = (data.clouds.all);
    const city_name = (data.name);
    

    
     
    




    // HTML Template Parts for JS (Result display part)
    description.innerHTML =weather_desc;
    degree.innerHTML = weather_cel.toFixed(0)+'&deg;';
    cloud_box.innerHTML = info_cloud + '%';
    humid_box.innerHTML = info_humid;
    pressure_box.innerHTML = info_pressure;
    country_box.innerHTML = city_name;
    image_for_weather.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
    
      
  } catch (error) {
  console.log(error);
  
  }
    
};