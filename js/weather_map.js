"use strict";

function clearField() {
    document.getElementById("search").value = "";
}

const weatherDiv = document.getElementById('weather')
fetch("data/weather_map.json")
    .then(res => res.json())
    .then(data =>{

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
            forecastDiv.setAttribute('class',"theWeather")
            weatherDiv.appendChild(forecastDiv)



        })
    })
// ==============================OLD STUFF===============================================


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



