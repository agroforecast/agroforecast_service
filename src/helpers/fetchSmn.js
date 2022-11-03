const fetch = require('node-fetch');

module.exports = async (url, token) => {
  const content = {
    headers: {
      accept: 'application/json',
      'accept-language': 'es-ES,es;q=0.9',
      authorization: 'JWT ',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'sec-gpc': '1',
    },
    referrer: 'https://www.smn.gob.ar/',
    referrerPolicy: 'strict-origin-when-cross-origin',
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
  };

  content.headers.authorization += token;

  const response = await fetch(url, content);
  return response;
};
