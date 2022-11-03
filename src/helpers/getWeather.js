const fetchSmn = require("./fetchSmn");

module.exports = async (location, token) => {
  const response = await fetchSmn(`https://ws1.smn.gob.ar/v1/weather/location/${location}`, token);
  return await response.json();
}