import homeController from "../controller/homeController.js"
import express from 'express'
const router = express.Router()

router.get('/',homeController.homePage)
router.get('/news',homeController.newPage)
router.get('/user',homeController.userPage)

module.exports = router