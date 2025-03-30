const apiKey = "63ab886af70758895dcc9117fc860c59";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const cityName = document.querySelector(".search-box input");
const submitBtn = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-icon");

const checkWeather = async (city) => {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    let skyCondition = data.weather[0].main;
    if (skyCondition == "Clear") {
      weatherIcon.src = "./images/clear.png";
    } else if (skyCondition == "Clouds") {
      weatherIcon.src = "./images/clouds.png";
    } else if (skyCondition == "Drizzle") {
      weatherIcon.src = "./images/drizzle.png";
    } else if (skyCondition == "Mist") {
      weatherIcon.src = "./images/mist.png";
    } else if (skyCondition == "Rain") {
      weatherIcon.src = "./images/rain.png";
    } else if (skyCondition == "Snow") {
      weatherIcon.src = "./images/snow.png";
    }
    weatherIcon.alt = skyCondition;

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
};

submitBtn.addEventListener("click", () => {
  checkWeather(cityName.value);
});
