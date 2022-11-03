const { connectDB } = require('../database/connection');

module.exports = async () => {
  try {
    await connectDB()
    console.log('Database connected!')
  } catch (error) {
    console.error('Ocurrió un error al iniciar: ', error)
    console.log('Intentando reconectar...')
    setTimeout(start, 10000)
  }
}