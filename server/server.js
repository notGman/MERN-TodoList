const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
require('./db/connection')

const port = process.env.PORT
const app = express()
app.use(bodyParser.json())
app.use(cors())
const router = require('./routes/route')
app.use(router)

app.listen(port,(req,res)=>{
  console.log(`Listening to http://localhost:${port}`);
})
