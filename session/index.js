import express from 'express';
import session from 'express-session';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'apple',
  resave: false,
  saveUninitialized: true
}));

app.set('view engine', 'ejs');

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/profile', (req, res) => {
  req.session.data = req.body;
  console.log(req.session.data);
  res.render('profile');
});

app.get("/", (req, res) => {
  if (!req.session.data) {
    return res.redirect('/login');
  }

  res.render('home', { data: req.session.data });
});

const port = 3000;
app.listen(port, () => {
  console.log(`server is running on port : ${port}`);
});
