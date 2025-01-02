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
const main = document.getElementById("mainContainer");
const city = document.getElementById("city");
function renderDOM(weatherData) {
  city.textContent = weatherData.resolvedAddress;
}
async function callApi(cityName) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=us&key=MAGHLZ9N4TZVZM3CAUY7MQCD8&contentType=json`,
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
