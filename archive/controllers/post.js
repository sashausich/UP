const mongoose = require('mongoose');

const Post = mongoose.model('Posts');

exports.listPosts = function (req, res) {
	const filter = {};
	if (!req.query.top) {
		req.query.top = 9;
	}
	if (!req.query.skip) {
		req.query.skip = 0;
	}
	if (req.query.author) {
		filter.author = req.query.author;
	}
	Post.find(filter, (err, task) => {
		if (err) {
			res.send(err);
		}
		res.json(task.splice(req.query.skip, req.query.top));
	});
};


exports.createPost = function (req, res) {
	const newPost = new Post(req.body);
	newPost.save((err, task) => {
		if (err) {
			res.send(err);
		}
		res.json(task);
	});
};


exports.getPost = function (req, res) {
	Post.findById(req.params.postId, (err, post) => {
		if (err) {
			res.send(err);
		}
		res.json(post);
	});
};


exports.updatePost = function (req, res) {
	Post.findOneAndUpdate({ _id: req.params.postId }, req.body, { new: true }, (err, post) => {
		if (err) { res.send(err); }
		res.json(post);
	});
};


exports.removePost = function (req, res) {
	Post.remove({
		_id: req.params.postId,
	}, (err, post) => {
		if (err) { res.send(err); }
		res.json({ message: 'Post successfully deleted' });
	});
};
