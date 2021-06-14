require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

//Connect to database with mangoose
mongoose.connect('mongodb://mongo/database',{ useUnifiedTopology: true , useNewUrlParser: true })
const db = mongoose.connection
db.on('error',(error)=>console.error(error))
db.once('open',() =>console.log("Try to connected to Database ..."))

app.use(cors({
    origin: '*'
}))
app.use(express.json())

const apiRouter = require('./routes/api')
app.use('/api', apiRouter)

app.listen(8080, () => {
    console.log(`Serveur à l'écoute sur le port http://localhost:8080/`)
 
})