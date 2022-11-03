const { connect } = require('mongoose');
const { config } = require('dotenv');

config();

const uri = process.env.DB || '';

const connectDB = async () => await connect(uri);

module.exports = { connectDB };
