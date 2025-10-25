// 
const path = require('path');

// External Module
const express = require('express');
const userRouter = express.Router();


homerouter.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.send(`<h1>Welcome to Complete Coding</h1>`);
})

module.exports = homerouter();