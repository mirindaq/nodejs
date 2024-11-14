const express = require('express');
const methodOverride = require('method-override')
const bodyParser = require('body-parser');
require('dotenv').config();

const route = require('./routes/client/index-route');
const routeAdmin = require('./routes/admin/index-route');
const database = require('./configs/database');

database.connect();

const app = express()
const port = process.env.PORT;

app.use(methodOverride('_method'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.locals.prefixAdmin = '/admin';

app.use(express.static('public'))
app.set('views', './views');
app.set('view engine', 'pug');

route(app);
routeAdmin(app);

app.listen(port, () => {
  console.log("chạy vào đây nè " + port );
});