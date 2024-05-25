const inp = document.getElementById('inp')
const btn = document.getElementById('btn')
const cityName = document.getElementById('countr')
const gradus = document.getElementById('gradus')
const des = document.getElementById('desc')


const getData = async(city)=>{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2f8f9746febbbdd580ca0c123684308c`)
    const data = await res.json()
    return data
}


btn.addEventListener('click' ,()=>{
    getData(inp.value).then((data)=>{
        cityName.innerHTML = data.name
        gradus.innerHTML = data.main.temp + '°C'
        des.innerHTML = data.weather[0].description    
    })
})