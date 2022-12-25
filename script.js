const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8ecd78fa8emsh8d760886f556833p1df48ejsn4e3c9bb827b3',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);

            temp.innerHTML = response.temp
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            hum.innerHTML = response.humidity
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees

        }
        )

        .catch (err => console.error(err));
}
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value);
})

getWeather("Pune")
    
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi', options)
.then(response => response.json())
.then(response => {
    console.log(response);
    tempNY.innerHTML = response.temp
    humNY.innerHTML = response.humidity
    wind_speedNY.innerHTML = response.wind_speed
    wind_degreesNY.innerHTML = response.wind_degrees
}
)
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=london', options)
.then(response => response.json())
.then(response => {
    console.log(response);
    templn.innerHTML = response.temp
    humln.innerHTML = response.humidity
    wind_speedln.innerHTML = response.wind_speed
    wind_degreesln.innerHTML = response.wind_degrees
}
)
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=seo', options)
.then(response => response.json())
.then(response => {
    console.log(response);
    tempsl.innerHTML = response.temp
    humsl.innerHTML = response.humidity
    wind_speedsl.innerHTML = response.wind_speed
    wind_degreessl.innerHTML = response.wind_degrees
}
)