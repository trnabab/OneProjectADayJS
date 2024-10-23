const apiKey = "74f8ceb66a8d9d88adfaa86398a24282";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
weatherIcon = document.querySelector(".weather-icon");

city = "Sydney ";

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

checkWeather(city);

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
