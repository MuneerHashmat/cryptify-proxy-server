<h1 align="center">Cryptify API proxy server</h1>

## Overview

This Node.js and Express.js proxy API was created for my Cryptify cryptocurrency price tracker app to resolve CORS errors encountered with the CoinGecko API in the frontend.

## API Documentation

### Base url
```
https://cryptify.up.railway.app/
```

## Endpoints

1. **All cryptocurrencies** 

```
GET /api/v1/all-cryptos/:currency
```
currency options: usd, eur, inr

1. **Cryptocurrency detail by id** 

```
/api/v1/crypto-detail/:id
```

1. **Cryptocurrency historical prices by id** 

```
GET /api/v1/crypto-historical-data/:id/:currency
```

