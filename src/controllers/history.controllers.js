const getDateArgentina = require('../helpers/getDateArgentina');
const getTimeDay = require('../helpers/getTimeDay');
const getWeatherLocation = require('../helpers/getWeatherLocation');
const makeWeatherAreas = require('../helpers/makeWeatherAreas');
const toFormatDate = require('../helpers/toFormatDate');
const History = require('../models/history.model');

const controller = {};

controller.saveWeatherHistory = async () => {
  const date = getDateArgentina()
  const { full, time } = toFormatDate(date)
  const timeday = getTimeDay(time)

  try {
    const history = await History.findOne({ date: Date(full) })
    if (!history) {
      const areas = await makeWeatherAreas(timeday)
      const newHistory = new History({
        date: Date(full),
        areas
      })
      await newHistory.save();
      console.log('Se guardaron datos ', full, time)
    } else {
      const { areas } = history
      const updates = []

      for (const area of areas) {
        const { lat, lon } = area.coords
        const { weather } = await getWeatherLocation(lat, lon)
        area[timeday] = weather
        updates.push(area)
      }

      if (updates.length > 0) {
        history.areas = updates;
        await history.save()
        console.log('Se actualizaron datos ', full, time)
      }
    }
  } catch (error) {
    console.error('Ocurrió un error al ejecutar: ', error)
  }
}

module.exports = controller;