const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new mongoose.Schema({
	login: {
        type: String,
        required: true,
	},
	password: {
        type: String,
        required: true,
	},
});

module.exports = mongoose.model('Users', UserSchema);
