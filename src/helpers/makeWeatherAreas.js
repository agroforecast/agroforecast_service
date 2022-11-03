const getWeatherLocation = require('./getWeatherLocation');

module.exports = async (timeday) => {
  const listCoords = [
    { lat: -23.8946, lon: -61.852 },
    { lat: -24.7068, lon: -60.6017 }
  ];
  const areas = [];

  for (const coords of listCoords) {
    const { weather, location } = await getWeatherLocation(coords.lat, coords.lon)
    const areaid = location.ref.area_id;

    const area = {
      areaid,
      coords,
      earlymorning: null,
      morning: null,
      afternoon: null,
      night: null,
    }
    area[timeday] = weather
    areas.push(area)
  }

  return areas
}