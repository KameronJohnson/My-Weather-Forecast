import axios from 'axios';

const API_KEY = '862b905d0e8a4486354c63d99c8c864f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

//fetchWeather() is an action creater that contains a request to backend API
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    //request returns a promise
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        //payload is an option property for acions that has additional data that describes this aciton
        payload: request
    };
}