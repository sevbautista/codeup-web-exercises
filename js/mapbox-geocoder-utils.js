"use strict";

/***
 * geocode is a method to search for coordinates based on a physical address and return
 * @param {string} search is the address to search for the geocoded coordinates
 * @param {string} token is your API token for MapBox
 * @returns {Promise} a promise containing the latitude and longitude as a two element array
 *
 * EXAMPLE:
 *
 *  geocode("San Antonio", API_TOKEN_HERE).then(function(results) {
 *      // do something with results
 *  })
 *
 */
function geocode(search, token) {
    // API URL
    let baseUrl = 'https://api.mapbox.com';
    // THE ENDPOINT WHEN REQUESTING lng, lat BASED ON LOCATION NAME
    let endPoint = '/geocoding/v5/mapbox.places/';
    // THIS FETCH REQUEST TAKES IN URL ENDPOINT THAT WILL RETURN THE lng, lat
    return fetch(`${baseUrl}${endPoint}${encodeURIComponent(search)}.json?access_token=${token}`)
        .then( res => res.json() )
        // to get all the data from the request, comment out the following three lines...
        .then( data => {
            console.log(data)
            return data.features[0].center
        });
}


/***
 * reverseGeocode is a method to search for a physical address based on inputted coordinates
 * @param {object} coordinates is an object with properties "lat" and "lng" for latitude and longitude
 * @param {string} token is your API token for MapBox
 * @returns {Promise} a promise containing the string of the closest matching location to the coordinates provided
 *
 * EXAMPLE:
 *
 *  reverseGeocode({lat: 32.77, lng: -96.79}, API_TOKEN_HERE).then(function(results) {
 *      // do something with results
 *  })
 *
 */
function reverseGeocode(coordinates, token) {
    let baseUrl = 'https://api.mapbox.com';
    let endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(`${baseUrl}${endPoint}${coordinates.lng},${coordinates.lat}.json?access_token=${token}`)
        .then( res => res.json() )
        // to get all the data from the request, comment out the following three lines...
        .then( data => data.features[0].place_name );
}