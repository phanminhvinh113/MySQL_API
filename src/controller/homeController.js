import db from '../../models/index'

const homeController = {
    homePage : async (req,res) => {
       try {
        const data = await db.User.findAll()
        res.render('homePage.ejs',{
            data: JSON.stringify(data)
        })
       } catch (error) {
            res.json({
                message:error
            })
       }
    },
    newPage: (req,res) =>{
        res.render('news/news.ejs')
    },
    userPage: async (req,res)=>{
      const data  = await db.User.findAll()
      res.json(data)
    }
    
}
module.exports = homeController;