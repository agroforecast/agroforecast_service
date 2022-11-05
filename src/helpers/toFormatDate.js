const getDateArgentina = require("./getDateArgentina");

module.exports = (date = getDateArgentina()) => {
  const [full, time] = date.split(', ')
  return { full, time }
}