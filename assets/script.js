$(document).ready(function () {
  let key = "920a4b29fbcfc27b5c48d10de6154ef9";


  $("#submitWeather").on("click", weatherSearch)

  function weatherSearch() {
    const city = $('#city').val();
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key + "&units=imperial"
    console.log(url)
    $.ajax({
      method: "GET",
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key + "&units=imperial"
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
  
  $.ajax({
    method: "GET",
    url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + key + "&units=imperial",
  }).then(function (data) {
    console.log(data)
    $("#forecast").empty();
    $("#forecast").append("<h1>5-Day Forecast:</h1>");

    let makeDiv = $("<div>");
    let upDate = $("<h1>");
    let humidity = $("<p>");


    makeDiv.addClass("row");
    upDate = moment().add((i + 1), 'day').format('MM/DD/YYYY');
    makeDiv.append(upDate)
    humidity.text("Humidty: " + data.list)
  
  })

});