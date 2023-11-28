"use strict";
// fetch('https://api.github.com/users/', {headers: {'Authorization': 'token' + GITHUB_API_KEY}})

fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            console.log(user.received_events_url)
        })})

    // .catch(error => console.error(error));

// function getGithubUsernames() {
//     return fetch('https://api.github.com/users')
//         .then(response => response.json())
//         .then(user => user.events.public)
//     console.log(user.events.public)



const lastCommit = "";
const userName = document.querySelector("#searchBar").value

 // https://github.com/octokit/core.js#readme
// const octokit = new octokit({
//     auth: 'GITHUB_API_KEY'
// })
//
// await octokit.request('GET /users/{username}/events/public', {
//     username: 'userName',
//     headers: {
//         'X-GitHub-Api-Version': '2022-11-28'
//     }
// })
// ==================
// function createPokemonElement(data) {
//     // console.log(data.name)
//     const paragraph = document.createElement("p");
//     let container = document.querySelector(".container");
//     paragraph.innerHTML = data.name;
//     container.appendChild(paragraph)
//     //     image
//     const image = document.createElement("img");
//     paragraph.appendChild(image)
//     image.src = data.sprites.front_shiny;
//     image.style.height = "200px"
//
// }
//
// function onError(error) {
//     console.log("Error", error)
// }
//
//
// const searchForm = document.querySelector('#searchForm');
// searchForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     let input = document.querySelector("#searchBar").value
//
//     fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
//         .then(res => res.json())
//         .then(data => createPokemonElement(data))
//         .catch(onFail)
//
// })

// ================
//
// function getLastCommitDate(username) {
//     const url = `https://api.github.com/users/${username}/events`;
//
//     return new Promise((resolve, reject) => {
//         fetch(url, {
//             headers: {
//                 'Authorization': 'token GITHUB_API_KEY'
//             }
//         })
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`GitHub API request failed: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 const commitEvents = data.filter(event => event.type === 'PushEvent');
//                 if (commitEvents.length > 0) {
//                     const lastCommitDate = commitEvents[0].created_at;
//                     resolve(lastCommitDate);
//                 } else {
//                     reject(new Error('No commit events found for the user.'));
//                 }
//             })
//             .catch(error => {
//                 reject(error);
//             });
//     });
// }
