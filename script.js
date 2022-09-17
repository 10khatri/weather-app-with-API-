const inputEl = document.querySelector(".city-input");
const btnEl = document.querySelector(".btn");
const descEl = document.querySelector(".desc");
const imageEl = document.querySelector(".image");
const regionEl = document.querySelector(".region");
const tempEl = document.querySelector(".temp");

function getUrl(cityName) {
  const appId = "038b7be51e9eba9a40b3e339f28eecf0";
  const query = cityName
  const unit = "metric"
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" + query +
    "&APPID=" + appId + "&units=" + unit;
  return url;
};


function handleBtn() {
  const cityName = inputEl.value;
  fetch(getUrl(cityName)).then((response) => {
    return response.json();
  }).then((data) => {

    descEl.innerText = data.weather[0].description;
    regionEl.innerText = inputEl.value + ", " + data.sys.country;
    tempEl.innerText = data.main.temp + "°";
    const imgUrl = data.weather[0].icon;
    const imageUrl = `http://openweathermap.org/img/wn/${imgUrl}@2x.png`
    imageEl.src = imageUrl;
  })
};

btnEl.addEventListener('click', handleBtn);