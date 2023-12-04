"use strict";

// INITIALIZING MAP
mapboxgl.accessToken = MAPBOX_API;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
    center: [-97.32371179959955, 32.75419564288404,], // starting position [lng, lat]
    zoom: 10, // starting zoom
});


// SEARCH BOX
let searchGeo = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    marker: {
        draggable: true
    }

})
map.addControl(searchGeo)

// SEARCH RESULTS
searchGeo.on('result', (e) => {
    console.log(e.result);
    let searchLon = e.result.geometry.coordinates[0];
    let searchLat = e.result.geometry.coordinates[1];
    weatherData(searchLat, searchLon)
    let weatherClear = document.getElementById('weather')
    weatherClear.innerHTML = "";

})


// FETCH AND DISPLAY WEATHER DATA
function weatherData(lat, long) {
    let html = "";

    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + long +
        "&appid=" + OPEN_WEATHER_API + `&units=imperial`)
        .then(data => data.json())
        .then(result => {
            const navCity = document.querySelector('h5')
            navCity.innerText =
                `Current City: ${result.city.name}`

            const day = result.list;

            for (let i = 0; i < day.length; i += 8) {


                const weather = day[i];
                const date = new Date(weather.dt * 1000);


                html += `<div class="weather-card">
            <h4>${date.toLocaleString()}</h4>
            <p>${weather.main.temp}\u00B0F</p>
            <img src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png" alt="${weather.weather[0].icon}">
            <hr>
            <p>Description: ${weather.weather[0].description}</p>
            <p>Humidity: ${weather.main.humidity}&#37</p>
            <hr>
            <p>Wind: ${weather.wind.speed} mph</p>
            <hr>
            <p>Pressure: ${weather.main.pressure} mb</p>
            </div>`;

            }

            const weatherId = document.getElementById("weather")
            const forecastDiv = document.createElement("div");
            forecastDiv.setAttribute('class', "theWeather");
            weatherId.appendChild(forecastDiv).innerHTML = html;


        });
}

// INITIAL WEATHER DATA LOCATION
weatherData(32.75419564288404, -97.32371179959955)

// SEARCH BUTTON EVENT LISTENER
document.getElementById('find').addEventListener('click', function () {
    let currentLocation = geocode(document.getElementById('search').value, MAPBOX_API);
    currentLocation.then(result => {
        console.log(result)
        map.setCenter([result[0], result[1]])
    })
})

// GEOCODE LOCATION
function geocode(search, token) {
    let baseUrl = 'https://api.mapbox.com';
    let endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(`${baseUrl}${endPoint}${encodeURIComponent(search)}.json?access_token=${token}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            return data.features[0].center
        });
}

