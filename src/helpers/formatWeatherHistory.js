module.exports = (weather) => {
  const { temperature, pressure, visibility, humidity, wind } = weather
  return { temperature, pressure, visibility, humidity, wind }
}