const fetchSmn = require("./fetchSmn");
const getLocationCoord = require("./getLocationCoord");
const getSmnToken = require("./getSmnToken")

module.exports = async (lat, lon) => {
  const token = await getSmnToken();
  const location = await getLocationCoord(lat, lon, token);
  const response = await fetchSmn(`https://ws1.smn.gob.ar/v1/weather/location/${location.id}`, token);
  return await response.json();
}