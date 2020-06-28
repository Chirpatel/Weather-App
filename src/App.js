import React, {useState} from 'react';
import './App.css';
import {fetchWeather} from './api/fetchweather';
const App = ()=>{
    const [query, setQuery] = useState('');
    const [weather,setWeather] = useState({});
    const search = async (e)=>{
        if(e.key === 'Enter'){
            searchenter();
        }
    }
    const searchenter = async ()=>{
        if(query.match(/^[A-Za-z]+$/)){
            const data = await fetchWeather (query);
            console.log(data)
            if(data!==undefined){
                setWeather(data.data);
                setQuery('');
            }
            else{
                popup();
            }
        }
        else{
            popup();
        }
        
    }
    const popup =()=>{
        console.log('Invalid');
        setWeather('Invalid');
        console.log(weather);
    }
    return(
        <div className='main-container'>
            <div className="inputbox">
            <input id ="input" type='text' className="search" placeholder ='Enter City Name' value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search}/>
            <button onClick={searchenter}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAACFElEQVRIib2Vv2tTURTHv7cpWtFBFyWJRaQNCO1YC+Kg9ceiQ+ogbs5KpVL/n25ODRbr6ipmKAVpKkjUQYV0EcFksZXk49Cv+gx5N++V4IHHubnvfO/nnnNvzgtKMWBa0h1Jc5JKnm5J2pT0PITwIU2byYAK8AzokW49oObNHAqyCHS82DbwGJgBjvuZ8VzDMW2gehhIF/gBPATGIrEFYAnYsyYbzOXqGLKQY3PXDGtnKqPPBOBBVkhC+8ja2rDAig93O1auiL4A7HiNqbS4MUlVSUHSagihB5zKAwohdCWteo3FGGje45f2K8B4HlhCezEGKnr8xf6KpAs5QZ/sS2kBg87kjKS7OUGx9f68aHk8af9Z0jJwOgfgnP1uDLTp8U37dUknJa0BExlBv7X11Ahg2lez4at6BHjj/0Y9dmWtLwBv3SEq0e24QQIs+XcZ2PLcPvAUuAfMA8U+7bLj1ofm7azabifXPTcO3HfXqANr7m/HErob3kgHOD8UZFHV6e+5rRQisQVnsu9svgKXnPHRrLC2xTvACjALnPAzCzzxmQB8B77xrzX6yxsrY434h6/rUk4CVwe8f9cPCxHglA5615yks47dlfRa0osQwkfHXZb0asASTUkLIYTWgHf5DZjg7xe335pAeSQgw4ou13+BlSKwjZGBErDmANDWSEGGlYH3CchP4PbIQQnYBgdt7JYk/QLo+O8OUiOPTAAAAABJRU5ErkJggg==" alt="Search"/></button>
            </div>
            {weather==="Invalid" && (
                <div className='city'>
                    <h1>Invalid City name</h1>
                </div>
            )}
            {weather.main && (
                <div className='city'>
                    <h2 className='city-name'>
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className='city-temp'>
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className='info'>
                        <img className='city-icon'src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>    
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;