require ("dotenv").config();
const express = require('express')
const app = express()
const port = 3000
const axios = require('axios');
const apiurl="https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

console.log("token", process.env.RANDOMER_API_TOKEN);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/names", async (req, res, next) => {
    try {
      if (!process.env.RANDOMER_API_TOKEN) {
        throw new Error("You forgot to set RANDOMER_API_TOKEN");
      }
      const result = await axios.get(apiUrl, {
        headers: {
          "X-Api-Key": process.env.RANDOMER_API_TOKEN,
        },
      });
      res.json(result.data);
    } catch (err) {
      next(err);
    }
  });
  
/* Example in Node.js */
/*
let response = null;
new Promise(async (resolve, reject) => {
  try {
    response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
      },
    });
  } catch(ex) {
    response = null;
    // error
    console.log(ex);
    reject(ex);
  }
  if (response) {
    // success
    const json = response.data;
    console.log(json);
    resolve(json);
  }
});*/

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  
