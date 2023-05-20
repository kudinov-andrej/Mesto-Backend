const router = require('express').Router();
const userController = require('../controllers/users').default;

router.get('/users', userController.getUsers);

router.get('/users/:user_id', userController.getUserById);

router.post('/users', userController.crateUser);

module.exports = router;
