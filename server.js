// import dependencies
const express = require('express');
const session = require('express-session');
require('dotenv').config();
// instantiate server
const app = express();
const PORT = process.env.PORT || 3001;
// import connection to sql db via sequelize
const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// connect session data to db (saves session token to db)
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// gives server access to session
app.use(session(sess));

// middleware for handling json data and supplying static assets for front end
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// use routes in controllers folder
app.use(require('./controllers/'));

// connects to db via sequelize then starts server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});