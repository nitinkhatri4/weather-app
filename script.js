const apiKey = "63ab886af70758895dcc9117fc860c59";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const cityName = document.querySelector(".search-box input");
const submitBtn = document.querySelector(".search-box button");

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
    document.querySelector(
      ".weather-icon"
    ).src = `weather-app/images/${skyCondition}.png`;
    document.querySelector(".weather-icon").alt = skyCondition;

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
};

submitBtn.addEventListener("click", () => {
  checkWeather(cityName.value);
});
