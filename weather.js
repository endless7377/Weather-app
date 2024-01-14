// The icon change is left to update 
// and responsiveness is not added to the site yet 

const apikey = "f2f2683d90ea9abd2343fed3f72ff840";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox =document.querySelector(".input-search");
const searchbtn =document.querySelector(".search-icon-image");

async function checkWeather(city){

    const response = await fetch(apiUrl + city +`&appid=${apikey}`);
    var data = await response.json();
    document.querySelector(".weather-place").innerHTML= data.name;
    document.querySelector(".temp-num").innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector(".wind-speed").innerHTML= data.wind.speed + "Km/hr";
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";

}

searchbtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
