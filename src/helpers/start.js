const { connectDB } = require('../database/connection');
const cron = require('node-cron');
const { saveWeatherHistory } = require('../controllers/history.controllers');
const fetchStayAlive = require('./fetchStayAlive');

const listenTimeDay = async () => {
  await saveWeatherHistory()
}

const start = async () => {
  try {
    await connectDB()
    await listenTimeDay()
    cron.schedule('0 */2 * * *', listenTimeDay)
    cron.schedule('*/20 * * * *', fetchStayAlive)
    console.log('Database connected!')
  } catch (error) {
    console.error('Ocurrió un error al iniciar: ', error)
    console.log('Intentando reconectar...')
    setTimeout(start, 3600000)
  }
}

module.exports = start