const fetchSmn = require("./fetchSmn");

module.exports = async (lat, lon, token) => {
  const response = await fetchSmn(
    `https://ws1.smn.gob.ar/v1/georef/location/coord?lat=${lat}&lon=${lon}`,
    token
  );
  const location = await response.json();
  return location;
};