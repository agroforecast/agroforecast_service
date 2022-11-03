const { connectDB } = require('../database/connection');
const cron = require('node-cron');
const { saveWeatherHistory } = require('../controllers/history.controllers');

const listenTimeDay = async () => {
  await saveWeatherHistory()
}

module.exports = async () => {
  try {
    await connectDB()
    cron.schedule('* */1 * * *', listenTimeDay)
    console.log('Database connected!')
  } catch (error) {
    console.error('Ocurrió un error al iniciar: ', error)
    console.log('Intentando reconectar...')
    setTimeout(start, 10000)
  }
}