module.exports = (date = new Date(Date.now())) => {
  const month = date.getUTCMonth() + 1; //months from 1-12
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  const full = (day > 10 ? day : '0' + day) + '/' + (month > 10 ? month : '0' + month) + '/' + year;
  return full
}