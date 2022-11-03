const fetch = require('node-fetch');
const { load } = require('cheerio');

module.exports = async () => {
  const res = await fetch('https://www.smn.gob.ar/');
  const html = await res.text();

  const $ = load(html);

  const script = $('script:nth-child(1)').text().split(';')[7];
  const jwt = script.split("'")[3];

  return jwt;
};
