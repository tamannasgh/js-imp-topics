const URL = "https://api.openweathermap.org/data/2.5/weather?lat=28.704060&lon=77.102493&appid=153a99418a3712793179048d24382e82";

fetch(URL)
    .then(function(res){
        if(!res.ok) throw new Error("something went wronng!!");
        return res.json();
    })
    .then(function(data){
        console.log(data);
        return data.weather[0];
    })
    .then(function(weather){
        const weatherDom = document.querySelector(".weather");
        weatherDom.textContent = weather.main;
    })

