// Need to use weather api to get daily weather reports with UV results and wind speed as well as humidty.

var searchInput = document.querySelector("#search")
var searchForm = document.querySelector("#form")

var searchButton = document.querySelector("#btn")



function searchCity(lat,lon) {
  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=48da628734e9fec404e0b749f53c4fc7`)
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
    var lat = data[0].lat ;
    var lon= data[0].lon ;
    console.log(lat,lon)
    searchCity(lat,lon)
  })
}


searchButton.addEventListener("click", getLocation)
