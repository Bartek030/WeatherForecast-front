let generateCurrentWeatherCard = function (cityName, lang, units) {
    const BASIC_URL = 'http://localhost:8080';
    const url = BASIC_URL + '/weather-app/current/' + cityName + '?lang=' + lang + '&units=' + units;
    
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: url,
        type: 'GET'
    }).done(function (data) {
        console.log(data);
        populateCurrentWeatherWidget(data);
    }).fail(function () {
        alert("Nie udało się pobrać danych");
    });
};

let populateCurrentWeatherWidget = function(data) {
    let iconUrl = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
    let description = data.weather[0].description;
    let temperature = data.main.temp.toFixed(1) + '&#8451;';
    let feelsLike = data.main.feels_like.toFixed(1) + '&#8451;';
    let tempMax = data.main.temp_max.toFixed(1) + '&#8451;';
    let tempMin = data.main.temp_min.toFixed(1) + '&#8451;';
    let pressure = data.main.pressure + ' hPa';
    let humidity = data.main.humidity + '%';
    let wind = data.wind.speed + ' m/s';

    $('.mainBox').removeAttr('hidden');

    $('#currentTitle').html('Aktualna pogoda dla: ' + data.name);

    $('#currentImage').attr('src', iconUrl);
    $('#description').html(description);
    $('#temperature').html('Temperatura: ' + temperature);
    $('#feels_like').html('Odczuwalna: ' + feelsLike);
    $('#temp_max').html('Maksymalna: ' + tempMax);
    $('#temp_min').html('Minimalna: ' + tempMin);
    $('#pressure').html('Ciśnienie: ' + pressure);
    $('#humidity').html('Wilgotność: ' + humidity);
    $('#wind').html('Wiatr: ' + wind);
};