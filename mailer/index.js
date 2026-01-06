import express from 'express';
import nodemailer from 'nodemailer';

const app = express();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sca23085@gmail.com',
    pass: 'tcrv skac mfbz tagi',

  }
})
// app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('view engine', 'ejs');
app.get('/mail', (req,res)=>{
  res.render('mail')
})

app.post('/submit-email', (req,res)=>{
  console.log(req.body);
  const mailOptions={
    from: 'sca23085@gmail.com',
    to: 'sca23085@gmail.com',
    subject: req.body.subject,
    text: req.body.mail
  }
  transporter.sendMail(mailOptions, (error, info)=>{
    if(error){
      req.send("Email Operation failed! Please! Try again some later...")
    }else{
      res.send("Mail Send");
    }
  })
  res.send("Email Send SuccessFully")
})

const port = 3000;
app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
})