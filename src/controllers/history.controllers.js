const getTimeDay = require('../helpers/getTimeDay');
const getWeatherLocation = require('../helpers/getWeatherLocation');
const makeWeatherAreas = require('../helpers/makeWeatherAreas');
const toFormatDate = require('../helpers/toFormatDate');
const History = require('../models/history.model');

const controller = {};

controller.saveWeatherHistory = async () => {
  const date = new Date(Date.now())
  const formatDate = toFormatDate(date)
  const timeday = getTimeDay(date)

  try {
    const history = await History.findOne({ date: formatDate })
    if (!history) {
      const areas = await makeWeatherAreas(timeday)
      const newHistory = new History({
        date: formatDate,
        areas
      })
      await newHistory.save();
      console.log('Se guardaron datos ', formatDate)
    } else {
      const { areas } = history
      const updates = []

      for (const area of areas) {
        if (!area[timeday]) {
          const { lat, lon } = area.coords
          const { weather } = await getWeatherLocation(lat, lon)
          area[timeday] = weather
          updates.push(area)
        }
      }
      if (updates.length > 0) {
        // const filterAreas = areas.filter(({ areaid }) => updates.some(update => update.areaid !== areaid))
        // console.log(filterAreas)
        history.areas = updates;
        await history.save()
        console.log('Se actualizaron datos ', formatDate)
      }
    }
  } catch (error) {
    console.error('Ocurrió un error al ejecutar: ', error)
  }
}

module.exports = controller;