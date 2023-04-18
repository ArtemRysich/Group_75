// https://www.postman.com/downloads/
// https://www.ukraine.com.ua/uk/blog/vse-o-domenah/chto-takoe-dns-server.html
// https://uk.wikipedia.org/wiki/SOAP
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

// Free API
// https://www.weatherapi.com/docs/
// https://swapi.dev/documentation
// https://pokeapi.co/
// https://the-one-api.dev/
// https://rickandmortyapi.com/documentation

// fetch('https://common-api.rozetka.com.ua/v2/fat-menu/full?front-type=xl&country=UA&lang=ru&r=0.3954234525174096').then(resp => console.log(resp)).catch(err => console.log(err))

// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
function success(pos) {
  const crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);



const form = document.querySelector(".js-search");
const BASE_URL = "http://api.weatherapi.com/v1";
const END_POINT_FORECAST = "/forecast.json";
const API_KEY = "ce2cb9b2a3da414bb5b172546231704";
const list = document.querySelector(".js-list");

form.addEventListener("submit", onSearch);

function onSearch(evt) {
  evt.preventDefault();

  const { query, days } = evt.currentTarget.elements;

  getWeather(query.value, days.value)
    .then((data) => list.innerHTML = createMarkup(data.forecast.forecastday))
    .catch((err) => console.log(err));
}

function getWeather(cityName, days) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: cityName,
    days: days,
    lang: "uk",
  });

  //   const URL = `${BASE_URL}${END_POINT_FORECAST}?key=${API_KEY}&q=${cityName}&days=${days}&lang=uk`;
  const URL = `${BASE_URL}${END_POINT_FORECAST}?${params}`;
  return fetch(URL).then((resp) => {
    console.log(resp);
    if (!resp.ok) { // resp.ok === false
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { icon, text },
        },
      }) => ` <li>
    <img src="${icon}" alt="${text}">
    <p>${text}</p>
    <h2>${date}</h2>
    <h3>${avgtemp_c}</h3>
</li>`
    )
    .join("");
}
