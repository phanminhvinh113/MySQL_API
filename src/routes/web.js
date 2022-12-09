
import siteRoute from './site.js'

function initWebRoutes(app){
    app.use('/',siteRoute)
}

module.exports = initWebRoutes