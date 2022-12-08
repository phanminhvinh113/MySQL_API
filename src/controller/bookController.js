const { Book } = require("../model/model")

const bookController = {
    addBook : async (req,res)=>{
        try {
            const newBook = new Book(req.body)
            const saveBook = await newBook.save()
            res.status(200).json(saveBook)
        } catch (error) {
            res.json({
                message:error
            })
        }
    },
    getAllBook : async (req,res)=>{
        console.log(req.body)
       try {
        const allBook = await Book.find()
        res.json(allBook)
       } catch (error) {
         res.json({
            message:'error'
         })
       }
    }
}

module.exports = bookController