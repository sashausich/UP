const mongoose = require('mongoose');

const User = mongoose.model('Users');

exports.listUsers = function (req, res) {
	User.find({}, (err, task) => {
		if (err) {
			res.send(err);
		}
		const result = task.map((user) => {
			const userWithoutPassword = user;
			userWithoutPassword.password = undefined;
			return userWithoutPassword;
		});
		res.json(result);
	});
};


exports.getUser = function (req, res) {
	User.findById(req.params.userId, (err, user) => {
		if (err) {
			res.send(err);
		}
		const result = user;
		result.password = undefined;
		res.json(result);
	});
};
