const homeController = {
    homePage : (req,res) => {
        res.render('homePage.ejs')
    },
    newPage: (req,res) =>{
        res.render('news/news.ejs')
    }
    
}
module.exports = homeController;