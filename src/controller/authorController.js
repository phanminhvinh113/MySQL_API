const {Author,Book}= require('../model/model')

const authorController  = {
    //ADD [POST]
    addAuthor: async (req,res)=>{
       try {
            const newAuthor = new Author(req.body)
            await newAuthor.save().exec()
            res.status(200).json({
                message:'success'
            })
       } catch (error) {
            res.status(500).json(error)
       }
    },

    getAllAuthor: async (req,res,next) =>{
        try {
            const authors = await Author.find()
            res.status(200).json(authors)
        } catch (error) {
            res.status(404).json({
                message: "error"
            })
            next()
        }
    }
}

module.exports = authorController