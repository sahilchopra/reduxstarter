import axios from 'axios';
const API_KEY = 'be0a75493de42ea7beebba09250312a2';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = ROOT_URL + '&q=' + city + ',in';
  const request = axios.get(url);
  console.log('action:' + city);
  return{
    type: FETCH_WEATHER,
    payload: request
  }
}