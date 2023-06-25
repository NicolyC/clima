const apiKey = "ac0f9cee7680e80ad6730d87273e1fd3";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + "&appid=" + apiKey);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block"
    document.querySelector(".weather").style.display = "none"
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "line/final/cloudy.svg"
    }
    else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "line/final/clear-day.svg"
    }
    else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "line/final/rain.svg"
    }
    else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "line/final/drizzle.svg"
    }
    else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "line/final/Mist.svg"
    }

    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none"
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
})