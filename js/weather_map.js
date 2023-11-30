"use strict";

function clearField() {
    document.getElementById("search").value = "";
}


mapboxgl.accessToken = 'pk.eyJ1Ijoic2V2YmF1dGlzdGEiLCJhIjoiY2xwanluNzlmMDQ4ZjJpbzcxb2xleTlrMyJ9.Vuq2Tc5q8esCQ1hugjVuPg';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-97.32371179959955, 32.75419564288404,], // starting position [lng, lat]
    zoom: 10, // starting zoom
});

const marker1 = new mapboxgl.Marker({
    color: "#d293a6",
    draggable: true
}).setLngLat([-97.414319023602, 32.68064132548091,])
    .addTo(map);


const Popup1 = new mapboxgl.Popup()
    .setHTML("<p>moveable marker</p>")

marker1.setPopup(Popup1);

// =======================DON'T TOUCH============================
const weatherOutput = document.querySelector('#forecast')
fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
    `lat=32.75419564288404&lon=-97.32371179959955` + `&units=imperial` +
    `&appid=${OPEN_WEATHER_API}`)
    .then(data => data.json())
    .then(result => {
        console.log(result)
        const day = result.list;
        for (let i = 0; i < day.length; i += 8) {
            const weather = day[i]
            const date = new Date(weather.dt * 1000);
            console.log(date.toLocaleDateString());
            const time = document.createElement("p")
            const temp = document.createElement("p")
            const icon = document.createElement("p")
            const desc = document.createElement("p")
            const humid = document.createElement("p")
            const wind = document.createElement("p")
            const press = document.createElement("p")
            time.innerText = date.toLocaleDateString();
            temp.innerText = weather.main.temp;
            icon.innerText = weather.weather[0].icon;
            desc.innerText = weather.weather[0].description;
            humid.innerText = weather.main.humidity;
            wind.innerText = weather.wind.speed;
            press.innerText = weather.main.pressure;
            weatherOutput.appendChild(time)
            weatherOutput.appendChild(temp)
            weatherOutput.appendChild(icon)
            weatherOutput.appendChild(desc)
            weatherOutput.appendChild(humid)
            weatherOutput.appendChild(wind)
            weatherOutput.appendChild(press)


        }
    })
// =======================DON'T TOUCH============================

// =======================DON'T TOUCH============================

    const weatherDiv = document.getElementById('weather')
fetch("data/weather_map.json")
    .then(res => res.json())
    .then(data => {

        data.forEach(jsonData => {
            const forecastDiv = document.createElement("div");
            forecastDiv.innerHTML =
                `<h4>${jsonData.date}</h4>
                <p>${jsonData.temperature}</p>
                <p>${jsonData.icon}</p>
                <p>${jsonData.description}</p>
                <p>${jsonData.humidity}</p>
                <p>${jsonData.wind}</p>
                <p>${jsonData.pressure}</p>
           `
            forecastDiv.setAttribute('class', "theWeather")
            weatherDiv.appendChild(forecastDiv)


        })
    })
// =======================DON'T TOUCH============================

// ==============================OLD STUFF===============================================


// fetch(`https://api.openweathermap.org/data/2.5/weather?` +
//     `lat=32.75419564288404&lon= -97.32371179959955` +
//     `&appid=${OPEN_WEATHER_API}`)
//     .then( data => console.log(data));

// =========================================================
// function geocode(search, token) {
// API URL
// let baseUrl = 'https://api.mapbox.com';
// // THE ENDPOINT WHEN REQUESTING lng, lat BASED ON LOCATION NAME
// let endPoint = '/geocoding/v5/mapbox.places/';
// // THIS FETCH REQUEST TAKES IN URL ENDPOINT THAT WILL RETURN THE lng, lat
// return fetch(`${baseUrl}${endPoint}${encodeURIComponent(search)}.json?access_token=${token}`)
//     .then( res => res.json() )
//     // to get all the data from the request, comment out the following three lines...
//     .then( data => {
//         console.log(data)
//         return data.features[0].center
//     });
// }


// function reverseGeocode(coordinates, token) {
//     let baseUrl = 'https://api.mapbox.com';
//     let endPoint = '/geocoding/v5/mapbox.places/';
//     return fetch(`${baseUrl}${endPoint}${coordinates.lng},${coordinates.lat}.json?access_token=${token}`)
//         .then( res => res.json() )
//         // to get all the data from the request, comment out the following three lines...
//         .then( data => data.features[0].place_name );
// }



