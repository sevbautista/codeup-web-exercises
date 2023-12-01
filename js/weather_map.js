"use strict";


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
    marker: true,
    draggable: true
})
map.addControl(searchGeo)

searchGeo.on('result', (e) => {
    console.log(e.result);
    let searchLon = e.result.geometry.coordinates[0];
    let searchLat = e.result.geometry.coordinates[1];
    weatherData(searchLat, searchLon)
    let weatherClear = document.getElementById('weather')
    weatherClear.innerHTML = "";

})



// Add a new Marker.
const marker = new mapboxgl.Marker({
    color: '#F84C4C', // color it red
    draggable: true,
});

// Define the animation.
function animateMarker(timestamp) {
    const radius = 20;

    /*
    Update the data to a new position
    based on the animation timestamp.
    The divisor in the expression `timestamp / 1000`
    controls the animation speed.
    */
    marker.setLngLat([
        Math.cos(timestamp / 1000) * radius,
        Math.sin(timestamp / 1000) * radius
    ]);

    /*
    Ensure the marker is added to the map.
    This is safe to call if it's already added.
    */
    marker.addTo(map);

// Request the next frame of the animation.
    requestAnimationFrame(animateMarker);
}

// Start the animation.
requestAnimationFrame(animateMarker);

// // =============WORK ON THIS SECTION BELOW===============

// const alamoInfo = {
//     address: "The Alamo, San Antonio",
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
// placeMarkerAndPopup( MAPBOX_API, map);
// const marker1 = new mapboxgl.Marker({
//     color: "#d293a6",
//     draggable: true
// }).setLngLat(weatherData([lat], [lon]))
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


//
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
// //
// placeMarkerAndPopup(ala,  MAPBOX_API, map);

// ==========WORK ON THIS SECTION ABOVE==================
// const weatherDiv = document.getElementById('forecast');
// const forecastData = [];

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

                // forecastData.push({
                //     date: date.toLocaleDateString(),
                //     temperature: weather.main.temp,
                //     icon: weather.weather[0].icon,
                //     description: weather.weather[0].description,
                //     humidity: weather.main.humidity,
                //     wind: weather.wind.speed,
                //     pressure: weather.main.pressure
                // });
                // updateForecastHTML(weather);

                // const forecastDiv = document.createElement("div");
                html += `<div class="weather-card">
            <h4>${date.toLocaleString()}</h4>
            <p>${weather.main.temp}\u00B0F</p>
            <img src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png" alt="${weather.weather[0].icon}">
            <hr>
            <p>Description: ${weather.weather[0].description}</p>
            <p>Humidity: ${weather.main.humidity}</p>
            <hr>
            <p>Wind: ${weather.wind.speed}</p>
            <hr>
            <p>Pressure: ${weather.main.pressure}</p>
            </div>`;


                // forecastDiv.setAttribute('class', "theWeather");
                // weatherDiv.appendChild(forecastDiv);
            }

            const weatherId = document.getElementById("weather")
            const forecastDiv = document.createElement("div");
            forecastDiv.setAttribute('class', "theWeather");
            weatherId.appendChild(forecastDiv).innerHTML = html;


        });
}

// function updateForecastHTML(data) {
//     // forecastData.forEach(data => {
//         const forecastDiv = document.createElement("div");
//         forecastDiv.innerHTML =
//             `<h4>${data.date}</h4>
//             <p>${data.temperature}\u00B0</p>
//             <img src="http://openweathermap.org/img/w/${data.icon}.png" alt="${data.icon}">
//             <hr>
//             <p>Description: ${data.description}</p>
//             <p>Humidity: ${data.humidity}</p>
//             <hr
//             <p>Wind: ${data.wind}</p>
//             <hr
//             <p>Pressure: ${data.pressure}</p>
//
//        `;
//
//         forecastDiv.setAttribute('class', "theWeather");
//         weatherDiv.appendChild(forecastDiv);
//     // });
// }


// fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
//     `lat=32.75419564288404&lon=-97.32371179959955` + `&units=imperial` +
//     `&appid=${OPEN_WEATHER_API}`)
//     .then(data => data.json())
//     .then(result => {
//         console.log(result)
//         const navCity = document.querySelector('h5')
//         navCity.innerText =
//             `Current City: ${result.city.name}`
//     })

weatherData(32.75419564288404, -97.32371179959955)

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
}


// function reverseGeocode(coordinates, token) {
//     let baseUrl = 'https://api.mapbox.com';
//     let endPoint = '/geocoding/v5/mapbox.places/';
//     return fetch(`${baseUrl}${endPoint}${coordinates.lng},${coordinates.lat}.json?access_token=${token}`)
//         .then( res => res.json() )
//         // to get all the data from the request, comment out the following three lines...
//         .then( data => data.features[0].place_name );
// }



