import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

api.interceptors.request.use(config => {
  config.params = config.params || {};
  config.params.lat = 23.68;
  config.params.lon = 90.35;
  config.params.cnt = 50;
  config.params.appid = '63e113a2f9ca2c167772a6d08709d773';

  return config;
});

export default api;
