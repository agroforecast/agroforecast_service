const { connectDB } = require('../database/connection');
const cron = require('node-cron');
const { saveWeatherHistory } = require('../controllers/history.controllers');

const listenTimeDay = async () => {
  await saveWeatherHistory()
}

const start = async () => {
  try {
    await connectDB()
    cron.schedule('* */3 * * *', listenTimeDay)
    console.log('Database connected!')
  } catch (error) {
    console.error('Ocurrió un error al iniciar: ', error)
    console.log('Intentando reconectar...')
    setTimeout(start, 3600000)
  }
}

module.exports = start