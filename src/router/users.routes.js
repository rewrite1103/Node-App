const {Router} = require('express')

const router = Router();

const { RendersignIn, RendersignUp, signIn, signUp, logOut } = require('../controller/users.controller');
const { route } = require('./index.routes');

router.get('/Register',RendersignUp);
router.post('/Register',signUp);

router.get('/Login',RendersignIn);
router.post('/Login',signIn);

router.get('/Out', logOut);


module.exports = router;