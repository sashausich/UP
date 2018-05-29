const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/upgram');

require('./models/post');
require('./models/user');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static('public'));

const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user');

postRoutes(app);
userRoutes(app);

app.listen(port);
