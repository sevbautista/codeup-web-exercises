"use strict";

const jsonDiv =document.querySelector('#favePlaces')

fetch("data/mapbox_maps_api.json")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.forEach(jsonData => {
            const postDiv = document.createElement("div");
            postDiv.innerHTML = `
                <h2>${jsonData.name}</h2>
                <p>${jsonData.fact}</p>
                <h5>${jsonData.location}</h5>
                <h6>${jsonData.rating}</h6>
                `
            jsonDiv.appendChild(postDiv)
        })

    })

// const favePoke = document.querySelector('.favePoke');
// favePoke.addEventListener('click', () => {
//     event.preventDefault();
//     fetch(`https://pokeapi.co/api/v2/pokemon/duskull`)
//         .then(res => res.json())
//         // .then(data => createPokemonElement(data)
//         .then(data => favoritePokemon(data)
//         )
//     console.log("poke button has been clicked")
//
// })
//
// const mapMove = document.querySelector('h2');
// mapMove.addEventListener('click', () =>{
//     // event.preventDefault();
//     // :  [-79.96475569017957, 40.42884827989157,]
// })



 // ===================================
 // geocode("hawaiian bros", MAPBOX_API)
 //     .then(coords => {
 //         console.log(coords)
 //         const pizzaMarker= new mapboxgl.Marker();
 //     })
    // var baseUrl = 'https://api.mapbox.com';
    // var endPoint = '/geocoding/v5/mapbox.places/';
    // return fetch(`${baseUrl}${endPoint}${encodeURIComponent(search)}.json?access_token=${token}`)
    //     .then( res => res.json() )
    //     // to get all the data from the request, comment out the following three lines...
    //     .then( data => data.features[0].center);
// }
