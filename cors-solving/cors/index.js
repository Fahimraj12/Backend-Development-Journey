import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.get('/', (req, res)=>{
  res.send({
    name: "fahim",
    age: "21",
    email: "fahim@test.com"
  })
})

const port = 3000;
app.listen(port, ()=>{
  console.log(`server is running on ${port} Port`); 
})