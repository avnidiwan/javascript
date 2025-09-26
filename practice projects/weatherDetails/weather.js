const apiKey = "";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchedCity = document.querySelector("input");
const searchBtn = document.querySelector("button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.getElementById("city-name").innerHTML = data.name;
    document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.getElementById("wind").innerText = Math.round(data.wind.speed) + " km/hr";
    document.getElementById("humadity").innerText = Math.round(data.main.humidity) + " %";
    document.getElementById("weather-disc").innerHTML = data.weather[0].main;
    let weatherType = data.weather[0].main;


    let image = document.querySelector(".weather-img")
     image.src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
    // if (weatherType == "Clouds") {
    //     image.src = "/cloud.png";
    // }
    // else if (weatherType === "Rain") {
    //     image.src = "/heavyRain.png"
    // }
    // else if (weatherType === "Snow") {
    //     image.src = "/snow.png"
    // }
    // else if (weatherType === "Clear") {
    //     image.src = "/sun.png"
    // }
    // else if (weatherType === "Haze") {
    //     image.src = "/sun-cloud.png"
    // }
};

searchBtn.addEventListener("click", () => {
    checkWeather(searchedCity.value);
});
