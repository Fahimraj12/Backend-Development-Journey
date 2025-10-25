
const path = require('path');
// External Module
const express = require('express');
const hostRouter = express.Router();

const rootDir = require("../utils/pathUtils");

hostRouter.get("/add-home",(req,res, next)=>{
  console.log(req.url, req.method);
    res.sendFile(path.join(rootDir, "views", 'addHome.html'));
})

hostRouter.post("/add-home",(req,res, next)=>{
  console.log(req.body);
    res.sendFile(path.join(rootDir, "views", 'homeedit.html'));
})

module.exports = hostRouter;