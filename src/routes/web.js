import express from 'express'
import siteRoute from './site.js'
const router = express.Router()

function initWebRoutes(app){
    app.use('/',siteRoute)
}
module.exports = initWebRoutes