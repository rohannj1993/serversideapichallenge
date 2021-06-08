// Need to use weather api to get daily weather reports with UV results and wind speed as well as humidty.
var apiCall = "https://api.openweathermap.org/data/2.5/onecall?lat=40&lon=74&exclude={part}&appid=48da628734e9fec404e0b749f53c4fc7"

var searchInput = document.querySelector("#search")
var searchForm = document.querySelector("#form")

var searchButton = document.querySelector("#btn")



function searchCity() {
console.log("Hello")



fetch(apiCall).then(function(response) {
    // request was successful
    if (response.ok) {
      response.json().then(function(data) {
        console.log(data);
      });
    }
    else {
      alert("There was a problem with your request!");
    }
  });
}
  searchButton.addEventListener("click", searchCity) 