// import fetch from 'node-fetch';
import express from 'express';
const app = express();
const PORT = 3000;
import delhiveryRoutes from './routes/DeliveryRoutes.js';

app.use('/api', delhiveryRoutes);


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// const http = require('https');

// const options = {
//   method: 'GET',
//   hostname: 'staging-express.delhivery.com',
//   port: null,
//   path: '/c/api/pin-codes/json/',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Token api-token-key Pass Token as "Token XXXXXXXXXXXXXXXXXX"'
//   }
// };

// const req = http.request(options, function (res) {
//   const chunks = [];

//   res.on('data', function (chunk) {
//     chunks.push(chunk);
//   });

//   res.on('end', function () {
//     const body = Buffer.concat(chun
// Sarthak garg
// 16:18
// const http = require('https');

// const options = {
//   method: 'GET',
//   hostname: 'staging-express.delhivery.com',
//   port: null,
//   path: '/c/api/pin-codes/json/',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Token api-token-key Pass Token as "Token XXXXXXXXXXXXXXXXXX"'
//   }
// };

// const req = http.request(options, function (res) {
//   const chunks = [];

//   res.on('data', function (chunk) {
//     chunks.push(chunk);
//   });

//   res.on('end', function () {
//     const body = Buffer.concat(chun
// );
//     console.log(body.toString());
//   });
// });

// req.end();

//https://delhivery-express-api-doc.readme.io/reference/testpin-codes