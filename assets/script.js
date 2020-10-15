$(document).ready(function () {
  let key = "920a4b29fbcfc27b5c48d10de6154ef9";


  $("#submitWeather").on("click", weatherSearch)

  function weatherSearch() {
    const city = $('#city').val();
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key + "&units=imperial"
    console.log(url)
    $.ajax({
      method: "GET",
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key + "&units=imperial"
    }).then(function (data) {
      console.log(data)
      $("#city").html("<h3>" + data.name + "</h3>");
      $("#wind").text("Wind Speed: " + data.wind.speed + " MPH");
      $("#temp").text("Temperature: " + data.main.temp + " ℉");
      $("#humidity").text("Humidity: " + data.main.humidity + "%");
      console.log("Wind Speed: " + data.wind.speed);
      console.log("Humidity: " + data.main.humidity);
      console.log("Temperature: " + temp);
    })
  };
  
  // Five-Day Forecast
  

});