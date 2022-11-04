const fetch = require('node-fetch');

module.exports = async () => {
  await fetch(process.env.URL_SERVICE)
  console.log('mandó al stayalive')
}