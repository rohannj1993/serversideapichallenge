// Need to use weather api to get daily weather reports with UV results and wind speed as well as humidty.

var searchInput = document.querySelector("#search")
var searchForm = document.querySelector("#form")

var searchButton = document.querySelector("#btn")



function searchCity(lat, lon) {
  fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=imperial&appid=48da628734e9fec404e0b749f53c4fc7`)
    .then(function (response) {
      // request was successful
      if (response.ok) {
        return response.json()
      }
    })
    .then(function (data) {
      console.log(data);
      var current = document.querySelector(".current")
      var temp = document.createElement("p")
       temp = "temperature:" + data.current.temp
      var humidity = document.createElement("p")
       humidity = "humidity:" + data.current.humidity
       var uvi = document.createElement("p")
       uvi = "uvi:" + data.current.uvi
      var windSpeed = "windSpeed:" + data.current.wind_speed
      var iconImg = document.createElement("img")
      iconImg.setAttribute('src',
        `https://openweathermap.org/img/w/` + data.current.weather[0].icon + `.png`)
      current.append(temp, humidity, uvi, windSpeed, iconImg)
      for (var i = 0; i < 5; i++) {
        var fiveDay = document.querySelector(".five-day")
        // document.createElement
        var tempday1 = "temperature:" + data.daily[i].temp.day
        var windday1 = "windSpeed:" + data.daily[i].wind_speed
        var humidity1 = "humidity:" + data.daily[i].humidity
        fiveDay.append(tempday1, windday1, humidity1)
      }

      // var tempday2 = "temperature:" + data.daily[1].temp.day
      // var windday2 = "windSpeed:" + data.daily[1].temp.day
      // var humidity2 = "humidity:" + data.daily[1].humidity
      // var tempday3 = "temperature:" + data.daily[2].temp.day
      // var windday3 = "windSpeed:" + data.daily[2].wind_speed
      // var humidity3 = "humidity:" + data.daily[2].humidity
      // var tempday4 = "temperature:" + data.daily[3].temp.day
      // var windday4 = "windSpeed:" + data.daily[3].wind_speed
      // var humidtiy4 = "humidity:" + data.daily[3].humidity
      // var tempday5 = "temperature:" + data.daily[4].temp.day
      // var windday5 = "windSpeed:" + data.daily[4].wind_speed
      // var humidtiy5 = "humidity:" + data.daily[4].humidity



      // fiveDay.append(tempday1, windday1, humidity1, tempday2, windday2, humidity2, tempday3, windday3, humidity3, tempday4, windday4, humidtiy4, tempday5, windday5, humidtiy5)
    });
}
function getLocation() {
  var geoCity = document.getElementById("search").value;
  console.log(geoCity)
  fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${geoCity}&limit=1&appid=48da628734e9fec404e0b749f53c4fc7`)
    .then(function (response) {
      return response.json();
    }
    )
    .then(function (data) {
      console.log(data)
      var lat = data[0].lat;
      var lon = data[0].lon;
      console.log(lat, lon)
      searchCity(lat, lon)
    })
}


searchButton.addEventListener("click", getLocation)

function getUV() {

}