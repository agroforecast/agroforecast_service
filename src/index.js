const { config } = require('dotenv');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const start = require('./helpers/start');

// import './db_connection';

config();

const app = express();
const port = process.env.PORT || 4500;

// global middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (_, res) => {
  res.send('Hola, estás usando la API Rest del SAT!');
});

app.listen(port, async () => {
  start()
  console.log(`Server's runnig in ${port}!`);
});
