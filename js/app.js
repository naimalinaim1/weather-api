// DO NOT show API KEY on your JS FILE
const API_KEY = "3d77a68f7a2c01a1d20ce482ef939404";

const loadTemperature = (city = "Dhaka") => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data))
    .catch((e) => console.log(e));
};

const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};
const displayTemperature = (data) => {
  setInnerText("city", data.name);
  setInnerText("temperature", data.main.temp);
  setInnerText("cloud-condition", data.weather[0].main);
};

document.getElementById("btn-search").addEventListener("click", () => {
  const searchField = document.getElementById("search-field");
  const city = searchField.value;
  loadTemperature(city);
});
loadTemperature("Dhaka");
