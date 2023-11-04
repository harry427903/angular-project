const router = require('express').Router();
const authController = require('../controllers/authController');

console.log("reques called")

router.post('/login', authController.login);
router.post('/signup', authController.signup);

module.exports = router;


