require('dotenv').config(); //this reads out .env file

const express = require('express');

const app = express();
const Customer = require('./models/customer.js');
app.use (express.json());
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});