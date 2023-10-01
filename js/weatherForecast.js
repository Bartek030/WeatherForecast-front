let generateForecastCards = function (cityName, lang, units) {
    const BASIC_URL = 'http://localhost:8080';
    const url = BASIC_URL + '/weather-app/forecast/' + cityName + '?lang=' + lang + '&units=' + units;

    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: url,
        type: 'GET'
    }).done(function (data) {
        console.log(data);
        populateForecastWidget(data);
    }).fail(function () {
        alert("Nie udało się pobrać danych");
    });
};

let populateForecastWidget = function (data) {

    let htmlContent = '';
    for (let i = 0; i < data.list.length; i++) {
        htmlContent += `
        <div class="card m-1" style="width: 13rem;">
            <img src="https://openweathermap.org/img/wn/` + data.list[i].weather[0].icon + `@2x.png" class="card-img-top" alt="no-image" />
            <div class="card-body">
                <h5 class="card-title text-center card-desc">`+ data.list[i].weather[0].description + `</h5>
                <p class="card-text text-center h4">` + data.list[i].main.temp.toFixed(1) + ` '&#8451;</p>
            </div>
        </div>`;
    }
    $('#forecastBox').html(htmlContent);
};
