const express = require('express');
const fs = require("fs");
const util = require('util');
const path = require('path');
const tipsRouter = (require('./routes/'));
const notes = require("./db/db.json");
const app = express();
const PORT = 3001


// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("api/tips", tipsRouter); 

//Static middlewear
app.use(express.static('public'));

//Get route

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
