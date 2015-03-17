var express         = require('express');
var router          = express.Router();
var pagesController = require('../controllers/pages_controller');

router.get('/', pagesController.home);
router.get('/info', pagesController.info);
router.get('/about', pagesController.about);

module.exports = router;
