const {Router} = require('express');
const router = Router();
const {renderindex, renderacerca} = require('../controller/index.controller');

router.get('/', renderindex);

router.get('/acerca', renderacerca);

module.exports = router;