$(document).ready(function () {
    const BASIC_URL = 'http://localhost:8080/weather-app';
    $("#weatherButton").on("click", function () {
        let cityName = $('#cityName').val();
        let lang = $('#lang').val();
        let units = $('#units').val();
        generateCurrentWeatherCard(cityName, lang, units);
        generateForecastCards(cityName, lang, units);
    });
});