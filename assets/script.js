$(document).ready(function () {
  let key = "920a4b29fbcfc27b5c48d10de6154ef9";
  
  $("#submitWeather").on("click", weatherSearch)

  function weatherSearch() {
    const city = $('#city').val();
    
    console.log(city)
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key + "&units=imperial"
    console.log(url)
    $.ajax({
      method: "GET",
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key + "&units=imperial"
    }).then(function (data) {
      console.log(data)
      let wind = $("<p>").addClass("card-text").text("Wind: ")
    }
    )
  };
});