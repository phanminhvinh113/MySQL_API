const bookController = require('../controller/bookController')

const router = require('express').Router()

router.post('/',bookController.addBook)
router.get('/',bookController.getAllBook)

module.exports = router