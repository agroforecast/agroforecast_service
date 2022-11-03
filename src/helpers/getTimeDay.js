module.exports = (date) => {
  const hour = date.getHours()

  if (hour >= 0 && hour < 6) {
    return 'earlymorning'
  }
  else if (hour >= 6 && hour < 12) {
    return 'morning'
  }
  else if (hour >= 12 && hour < 18) {
    return 'afternoon'
  }
  // else if (hour >= 18 && hour < 24) {
  // }
  return 'night'
}