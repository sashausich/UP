module.exports = function (app) {
    const postController = require('../controllers/post');

    app.route('/api/post')
        .get(postController.listPosts)
        .post(postController.createPost);

    app.route('/api/post/:postId')
        .get(postController.getPost)
        .put(postController.updatePost)
        .delete(postController.removePost);
};
