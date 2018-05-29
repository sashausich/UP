module.exports = function (app) {
    const userController = require('../controllers/user');

    app.route('/api/user')
        .get(userController.listUsers);

    app.route('/api/user/:userId')
        .get(userController.getUser);
};
