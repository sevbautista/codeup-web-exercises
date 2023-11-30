fetch(`https://api.openweathermap.org/data/2.5/weather?` +
    `lat=29.426825118534886&lon=-98.48948239256946` +
    `&appid=${OPEN_WEATHER_API}`)
    .then(data => data.json())
    .then(result => {
        console.log(result)
        const date = new Date (result.dt * 1000);
        console.log(date.toLocaleDateString());


    })

fetch(`https://api.openweathermap.org/data/2.5/weather?` +
    `lat=29.426825118534886&lon=-98.48948239256946` +
    `&appid=${OPEN_WEATHER_API}` + `&units=imperial`)
    .then(data => data.json())
    .then (currentWeather => console.log(currentWeather))

fetch(`https://api.openweathermap.org/data/2.5/weather?` +
    `id=4726206` +
    `&appid=${OPEN_WEATHER_API}` + `&units=imperial`)
    .then(data => data.json())
    .then (currentWeather => console.log(currentWeather))

fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
    `lat=29.426825118534886&lon=-98.48948239256946` +
    `&appid=${OPEN_WEATHER_API}`)
    .then(data => data.json())
    .then(result => {
        console.log(result)


    })
const weatherOutput = document.querySelector('#forecast')
// INCREMENT BY 8 FOR 5 DAYS (40 RETURNS)
fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
    `lat=29.426825118534886&lon=-98.48948239256946` +
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
            const humidity = document.createElement("p")
            time.innerText = date;
            temp.innerText = weather.main.temp;
            humidity.innerText = weather.main.humidity;
            weatherOutput.appendChild(time)
            weatherOutput.appendChild(temp)
            weatherOutput.appendChild(humidity)

        }
    })




// const weatherOutput = document.querySelector('#forecast')
// INCREMENT BY 8 FOR 5 DAYS (40 RETURNS)
fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
    `lat=29.426825118534886&lon=-98.48948239256946` +
    `&appid=${OPEN_WEATHER_API}`)
    .then(data => data.json())
    .then(result => {
        console.log(result)
        result.list.forEach(weather => {
            const date= new Date(weather.dt * 1000);
            console.log(date.toLocaleDateString());
            const time = document.createElement("p")
            const temp = document.createElement("p")
            time.innerText = date;
            temp.innerText = weather.main.temp;
            weatherOutput.appendChild(time)
            weatherOutput.appendChild(temp)

        }
    );


    })

