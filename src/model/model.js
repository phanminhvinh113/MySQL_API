const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookShema = new Schema({
    name:{
        type:String,
    },
    publishedDate:{
        type:String,
      
    },
    genres:{
        type:[String],
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Author"
    }
})

const authorShema = new Schema({
    name:{
        type:String,
    },
    year:{
        type:Number
    },
    age:{
        type:Number
    },
    books:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Book",
        }
    ]
})
const Book  = mongoose.model("Book",bookShema)
const Author = mongoose.model("Author",authorShema)

module.exports = {Book,Author};