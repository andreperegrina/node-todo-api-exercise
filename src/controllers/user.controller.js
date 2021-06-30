const {v4: uuidv4} = require('uuid');
const storage = [];

const User = require('../models/user.model');

exports.create = (req, res) => {
    const {body = {}} = req;
    const {name, email, password} = body;
    const newUser = new User(uuidv4(), name, email, password);
    storage.push(newUser);
    res.send(newUser);
};

exports.get = (req, res) => {
    res.send(storage);
};

exports.storage = storage;
