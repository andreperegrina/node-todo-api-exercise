const express = require('express')
const bodyParser = require('body-parser')
const userController = require('./controllers/user.controller');


const app = express();


// parse application/json
app.use(bodyParser.json())

app.post('/users', userController.create);

app.get('/users',userController.get);

module.exports = app;
