//CORE MODULE
const path = require('path');

// External Module
const express = require('express');
const userRouter = express.Router();
const rootDir = require("../utils/pathUtils");

userRouter.get("/",(req,res, next)=>{
  console.log(req.url, req.method);
  res.sendFile(path.join(rootDir, "views", 'home.html'));
})

module.exports = userRouter;