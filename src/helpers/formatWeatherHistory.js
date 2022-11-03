module.exports = (weather) => {
  const { temperature, pressure, visibility, humidity, wind, date } = weather
  return { temperature, pressure, visibility, humidity, wind, date }
}