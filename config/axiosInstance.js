const axios = require("axios"); // Fixed typo
const dotenv = require("dotenv");

dotenv.config();

const API_KEY = process.env.COINGECKO_API_KEY;

const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/coins/",
  headers: {
    Accept: "application/json",
    "x-cg-pro-api-key": API_KEY, 
  },
});

const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-6gaS7zTgWHrFi9p3AvgNToD8'}
};

module.exports = {api, options};
