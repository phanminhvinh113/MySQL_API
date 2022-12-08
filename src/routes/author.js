const authorController =require('../controller/authorController')
const express = require('express');

const router = express.Router()

//ADD Author
router.get('/',authorController.getAllAuthor)

router.post('/',authorController.addAuthor)
//
module.exports =  router