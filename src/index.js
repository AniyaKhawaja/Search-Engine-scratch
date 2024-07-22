function updateWeather(response) {
    let tempElement = document.querySelector("#temp-value");
    let temp = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
  
    cityElement.innerHTML = response.data.city;
    tempElement.innerHTML = Math.round(temp);
  }
  
  function searchCity(city) {
    let apiKey = "69ba4a782t23bf4e605dfe17d2ob01a9";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(updateWeather);
  }
  
  function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
  
    searchCity(searchInput.value);
  }
  
  let searchFormElement = document.querySelector("#search-form");
  searchFormElement.addEventListener("submit", handleSearchSubmit);
  
  searchCity("Paris");
  
  
  
  
  