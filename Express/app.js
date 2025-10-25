const http = require('http'); // Core Module
const express = require('express'); // External Module

const app = express();

app.use('/',(req, res, next)=>{
  console.log("First Midddleware",req.url,req.method);
  next();
})
app.use("/another-details",(req, res, next)=>{
  console.log("Second Midddleware",req.url,req.method);
  res.send("<p>Welcome to Express</p>")
  next();
})
const server = http.createServer(app);

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});