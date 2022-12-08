const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan =require('morgan')
const dotenv = require('dotenv')
//
const authorRoute = require('./routes/author')
const routerBook = require('./routes/book')

const port =process.env.PORT;

dotenv.config()

//CONNECT DATABASE
mongoose.connect(process.env.MONGODB_URL,()=>{
    console.log('Connect Mongodb sucessfully!')
})


const app = express()
//
app.use(bodyParser.json())
app.use(cors())
app.use(morgan("combined"))

//ROUTES
app.use('/author',authorRoute)
app.use('/book',routerBook)

app.listen(port, ()=>{
    console.log(`Server running... with http://localhost:${port}`);
})

