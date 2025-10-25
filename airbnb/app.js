const path = require('path');
// External Module
const express = require('express');

//local Module
const useRouter = require('./routes/user-router');
const hostRouter = require('./routes/host-router');
const rootDir = require("./utils/pathUtils");
const app = express();

app.use(express.static(path.join(rootDir, "public")))
app.use(express.urlencoded());

app.use("",useRouter);
app.use(hostRouter);

app.use((req,res)=>{
  res.status(404).sendFile(path.join(rootDir, "views", '404.html'));
})

const PORT = 3000;
app.listen(PORT, () =>{
  console.log(`Server running on address https://localhost:${PORT}`);
});