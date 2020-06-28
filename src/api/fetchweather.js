import axios from 'axios';
const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY ='cd0214fd082631cb9307ea2553db0cb3';

export const fetchWeather = async (query)=>{
const data = await axios.get(URL, {
    params:{
        q:query,
        appid: API_KEY,
        units:'Metric'
    }
})
.catch(function (error) {
if (error.response) {
      // Request made and server responded
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
  });
return data
}