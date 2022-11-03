const formatWeatherHistory = require("./formatWeatherHistory");
const getLocationCoord = require("./getLocationCoord");
const getSmnToken = require("./getSmnToken");
const getWeather = require("./getWeather");

module.exports = async (lat, lon) => {
  const token = await getSmnToken();
  const location = await getLocationCoord(lat, lon, token);
  const weather = formatWeatherHistory(await getWeather(location.id, token))
  return { location, weather }
}