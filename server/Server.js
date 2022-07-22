const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express()

var corsOption = {
   origin: 'http://localhost:3000'
}

app.use(cors(corsOption))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/url', require('./routes/Routes'))

app.get('/', (req,res)=>{
   res.json({
      message: "welcome"
   })
})



const PORT = process.env.PORT

app.listen(PORT, () => {
   console.log(`Server is connected to port: ${PORT}` )
})

