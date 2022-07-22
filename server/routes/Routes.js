const urlController = require('../controllers/UrlController')

const router = require('express').Router();

router.post('/addurl' , urlController.addurl)

router.get('/getImageSource', urlController.getImageSource)

module.exports = router;