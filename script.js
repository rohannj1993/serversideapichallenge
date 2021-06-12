// Need to use weather api to get daily weather reports with UV results and wind speed as well as humidty.
var apiCall = "https://api.openweathermap.org/data/2.5/onecall?lat=40&lon=-74&exclude={part}&appid=48da628734e9fec404e0b749f53c4fc7"

var searchInput = document.querySelector("#search")
var searchForm = document.querySelector("#form")

var searchButton = document.querySelector("#btn")



function searchCity() {
  console.log("Hello")



  fetch(apiCall)
    .then(function (response) {
      // request was successful
      if (response.ok) {
        return response.json()
      }
    })
    .then(function (data) {
      console.log(data);
    });
}
function getLocation() {
  var geoCity = document.getElementById("search").value;
  console.log(geoCity)
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${geoCity}&limit=1&appid=48da628734e9fec404e0b749f53c4fc7`)
  .then(function(response){
    return response.json();
  }
  )
  .then(function(data){
    console.log(data)
  })
}


searchButton.addEventListener("click", getLocation)
