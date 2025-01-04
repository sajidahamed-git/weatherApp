import "./styles.css";

const inputField = document.getElementById("input");
const form = document.getElementById("user-input");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityName = inputField.value;
  getWeather(cityName);
});
async function getWeather(cityName) {
  const weatherData = await callApi(cityName);
  if (weatherData) {
    console.log(weatherData);
    renderDOM(weatherData);
  } else console.log("jingel bell");
}

const condition = document.getElementById("condition");
const city = document.getElementById("city");
const feelsLike = document.getElementById("feels-like");   
const temp = document.getElementById('temperature')
const wind = document.getElementById('wind')
const humidity = document.getElementById('humidity')
function renderDOM(weatherData) {
  const weatherInfo = weatherData.currentConditions;
  city.textContent = weatherData.resolvedAddress;

  condition.textContent = weatherInfo.conditions;
  feelsLike.textContent = weatherInfo.feelslike;
  temp.textContent = weatherInfo.temp
  wind.textContent = weatherInfo.windspeed
  humidity.textContent = weatherInfo.humidity
}
async function callApi(cityName) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&key=MAGHLZ9N4TZVZM3CAUY7MQCD8&contentType=json`,
    {
      method: "GET",
      headers: {},
    },
  );
  const result = await response.json();
  return result;
}
function inputValidation() {
  // if empty
  inputField.classList.add("border-red-500");

  setTimeout(() => {
    inputField.classList.remove("border-red-500");
  }, 1000);
}
