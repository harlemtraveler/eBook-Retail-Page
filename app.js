const express = require('express');
const keys = require('./config/keys');
// const result = require('dotenv').config({ path: './.env' });
const stripe = require('stripe')(keys.secretKey);
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();

// Middleware - Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Middleware - BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Static Folder - Images | Stylesheets | etc
app.use(express.static(`${__dirname}/public`));

// Index Route
app.get('/', (req, res) => {
  res.render('index', {
    publicKey: keys.publicKey
  });
});

// Charge Route
app.post('/charge', (req, res) => {
  const amount = 2500;
  //
  // console.log(req.body);
  // res.send('Success!');

  stripe.customers.create({
     email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(customer =>
    stripe.charges.create({
      amount,
      description: "Sample Charge",
         currency: "usd",
         customer: customer.id
    }))
  .then(charge => res.render("success"))
  .catch(err => console.log(err));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`[*] Server is running on port ${PORT} 🚦`) });
