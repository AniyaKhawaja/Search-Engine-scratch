function updateWeather(response) {
    let tempElement = document.querySelector("#temp");
    let temp = response.data.temp.current;
    let cityElement = document.querySelector("#city");
    
    cityElement.innerHTML = searchInput.value;
    tempElement.innerHTML = Math.round(temp);
}

function searchCity (city) {
let apiKey = "69ba4a782t23bf4e605dfe17d2ob01a9";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${69ba4a782t23bf4e605dfe17d2ob01a9}&units=metric`;
 axios.get(apiUrl).then(updateWeather);
}

function handleSearchSubmit(event) {
event.preventDefault();
let searchInput = document.querySelector("#search-form-input");

searchCity(searchInput.value);
}

et searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Italy");