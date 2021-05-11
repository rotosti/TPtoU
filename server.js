const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const { User, SubTier } = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const sess = {
    secret: 'ultra super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
  };

let bodyParser = require('body-parser');
app.use(session(sess));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// User.create({username: 'hello', password: 'q', address:'123 main'})

User.create({email: "Zach", password: "qwerty1", firstname: "zach", lastname: "duty", streetaddress: "2323 jordan ave", zipcode: "60647", state: "IL"})

SubTier.create({tier_name: "premium", price: 40.00})
SubTier.create({tier_name: "deluxe", price: 60.00})
// change to true to rewrite tables in db
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});