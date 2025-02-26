const axios = require("axios"); // Fixed typo
const dotenv = require("dotenv");

dotenv.config();

const API_KEY = process.env.COINGECKO_API_KEY;

const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/coins/",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "x-cg-pro-api-key": API_KEY, 
  },
});

module.exports = api;
