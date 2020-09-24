$(document).ready( function(){

let apiKey = "d7daca23bb60b5cdedb491704005803bS";
const state = $("input").val();

///first call
$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q=malibu&appid=d7daca23bb60b5cdedb491704005803bS",
    method: "GET"
}).then(function (response) {
    console.log(response)
});

///second call
function currentWeather() {
    

$.ajax({
    url: "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=d7daca23bb60b5cdedb491704005803bS",
    method: "GET"
}).then(function (response) {
    console.log(response)
});

}


///third call
function fiveDayCast() {
    
$.ajax({
    url: "pro.openweathermap.org/data/2.5/forecast/hourly?id={city ID}&appid={API key}",
    method: "GET"
}).then(function (response) {
    console.log(response)
});

}})