const apiKey='c691a44654c0fa3625ff182bdc358091';
const apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox=document.querySelector('.search input');
const searchBtn=document.querySelector('.search button');
const weatherIcon=document.querySelector('.weather_icon');

async function checkWeather(city){
    const response=await fetch(apiUrl+ city+ `&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector('.error').style.display='block';
        document.querySelector('.weather').style.display='none';
    }

    else{
        var data=await response.json();

    console.log(data);

    document.querySelector('.city').innerText = data.name;
    document.querySelector('.temp').innerText = Math.round(data.main.temp)  + '°C';
    document.querySelector('.maximum').innerText = Math.round(data.main.temp_max)   + '°C';
    document.querySelector('.minimum').innerText = Math.round(data.main.temp_min) + '°C';
    document.querySelector('.humidity').innerText = Math.round(data.main.humidity) +'%';
    document.querySelector('.wind').innerText = Math.round(data.wind.speed) +'km/h';

    if (data.weather[0].main == 'Clouds') {
        weatherIcon.src = 'w_image/new_clouds.gif';
    }
    else if (data.weather[0].main == 'Rain') {
        weatherIcon.src = 'w_image/new_rain.gif';
    }
    else if (data.weather[0].main == 'Clear') {
        weatherIcon.src = 'w_image/new_sun.gif';
    }
    else if (data.weather[0].main == 'Snow') {
        weatherIcon.src = 'w_image/new_snow.gif';
    }
    else if (data.weather[0].main == 'Mist') {
        weatherIcon.src = 'w_image/new_mist.gif';
    }
    
    document.querySelector('.weather').style.display = 'block';
    documentquerySelector('.error').style.display='none';
    }

    
}
searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
});
