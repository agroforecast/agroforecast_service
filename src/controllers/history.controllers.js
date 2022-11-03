const History = require('../models/history.model');
import formatWeatherHistory from '../helpers/formatWeatherHistory';
import getTimeDay from '../helpers/getTimeDay';
import getWeather from '../helpers/getWeather';


export const saveWeatherHistory = async (req, res) => {
  const date = new Date(Date.now())
  // const timeday = getTimeDay(date)
  const coords = [
    { lat: -33.01245406, lon: -58.61076257 }
  ]

  const history = await History.find({ date })
  if (history) {
    for (const coord of coords) {
      const weather = formatWeatherHistory(await getWeather(coord.lat, coord.lon))
      // history[timeday as keyof typeof history] = 
    }
  }
}