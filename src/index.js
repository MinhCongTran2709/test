const path = require('path');
const { engine } = require ('express-handlebars');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
var methodOverride = require('method-override')
const app = express();
const route =require('./routes');
const db = require('./config/db');
//Connect to DB
db.connect();

const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'))

// route init
route(app);

// app.use(express.urlencoded({ extended: true, }));

// app.use(express.json());

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine(
  'hbs', 
  engine({ 
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    }
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});