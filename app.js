const express = require('express');
const stripe = require('stripe')(process.env.SECRET_KEY);
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
  res.render('index');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`[*] Server is running on port ${PORT} 🚦`) });
