import axios from 'axios'



export default class WaetherService {

  constructor() {
  }

  getWeatherByCity(cityName) {
    return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName},tg&units=metric&appid=08d6f9734faaa07b2e5ab89ff13d1249`);
  }
}