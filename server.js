const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const { User } = require('./models');

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

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

User.create({username: 'hello', password: 'q', address:'123 main'})

User.create({username: "Zach", password: "qwerty1", address: "2323 jordan ave"})

// change to true to rewrite tables in db
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});