$(document).ready(function () {
   let city = $("#city").val();
   let key = 'appid=0ccd28292b38949c924be67f905d975a';
    $('#submitWeather').click(funtion(){

         if(city = ''){
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + 
            "appid=0ccd28292b38949c924be67f905d975a",
            method: "GET"
        }).then(function (response) {
            console.log(response)
        });
    }
    
});