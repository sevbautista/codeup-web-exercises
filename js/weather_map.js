"use strict";

function clearField() {
    document.getElementById("search").value = "";
}


mapboxgl.accessToken = MAPBOX_API;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/dark-v11', // style URL
    center: [-97.32371179959955, 32.75419564288404,], // starting position [lng, lat]
    zoom: 10, // starting zoom
});


// =============WORK ON THIS SECTION BELOW===============
// const marker1 = new mapboxgl.Marker({
//     color: "#d293a6",
//     draggable: true
// }).setLngLat([-97.414319023602, 32.68064132548091,])
//     .addTo(map);
//
//
// const Popup1 = new mapboxgl.Popup()
//     .setHTML("<p>moveable marker</p>")
//
// marker1.setPopup(Popup1);
// const alamoInfo = {
//     address: "The Dallas Aquarium, Dallas",
//     popupHTML: "<p>Welcome to the Alamo!</p>"
// };

// function placeMarkerAndPopup(info, token, map) {
//     geocode(info.address, token).then( coords => {
//         let popup = new mapboxgl.Popup()
//             .setHTML(info.popupHTML);
//         let marker = new mapboxgl.Marker()
//             .setLngLat(coords)
//             .addTo(map)
//             .setPopup(popup);
//         popup.addTo(map);
//     });
// }
//
// placeMarkerAndPopup(alamoInfo, ACCESS_TOKEN, map);

// ==========WORK ON THIS SECTION ABOVE==================
const weatherDiv = document.getElementById('forecast');
const forecastData = [];

fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
    `lat=32.75419564288404&lon=-97.32371179959955` + `&units=imperial` +
    `&appid=${OPEN_WEATHER_API}`)
    .then(data => data.json())
    .then(result => {

        const day = result.list;

        for (let i = 0; i < day.length; i += 8) {
            const weather = day[i];
            const date = new Date(weather.dt * 1000);

            forecastData.push({
                date: date.toLocaleDateString(),
                temperature: weather.main.temp,
                icon: weather.weather[0].icon,
                description: weather.weather[0].description,
                humidity: weather.main.humidity,
                wind: weather.wind.speed,
                pressure: weather.main.pressure
            });
        }
        updateForecastHTML();
    });


function updateForecastHTML() {
    forecastData.forEach(data => {
        const forecastDiv = document.createElement("div");
        forecastDiv.innerHTML =
            `<h4>${data.date}</h4>
            <p>${data.temperature}\u00B0</p>
            <img src="http://openweathermap.org/img/w/${data.icon}.png" alt="${data.icon}">
            <hr>
            <p>Description: ${data.description}</p>
            <p>Humidity: ${data.humidity}</p>
            <hr
            <p>Wind: ${data.wind}</p>
            <hr
            <p>Pressure: ${data.pressure}</p>
            
       `;

        forecastDiv.setAttribute('class', "theWeather");
        weatherDiv.appendChild(forecastDiv);
    });
}

fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
    `lat=32.75419564288404&lon=-97.32371179959955` + `&units=imperial` +
    `&appid=${OPEN_WEATHER_API}`)
    .then(data => data.json())
    .then(result => {
        console.log(result)
        const navCity = document.querySelector('h5')
        navCity.innerText =
            `Current City: ${result.city.name}`
    })

document.getElementById('find').addEventListener('click', function () {
    let currentLocation = geocode(document.getElementById('search').value, MAPBOX_API);
    currentLocation.then(result => {
        console.log(result)
        map.setCenter([result[0], result[1]])
    })
})


function geocode(search, token) {
    let baseUrl = 'https://api.mapbox.com';
    let endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(`${baseUrl}${endPoint}${encodeURIComponent(search)}.json?access_token=${token}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            return data.features[0].center
        });




// function reverseGeocode(coordinates, token) {
//     let baseUrl = 'https://api.mapbox.com';
//     let endPoint = '/geocoding/v5/mapbox.places/';
//     return fetch(`${baseUrl}${endPoint}${coordinates.lng},${coordinates.lat}.json?access_token=${token}`)
//         .then( res => res.json() )
//         // to get all the data from the request, comment out the following three lines...
//         .then( data => data.features[0].place_name );
}



