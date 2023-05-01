const express = require('express')
const path = require('path')
const app = express()
const  port = 8000;

// const router = require('../routes');
app.use('/',require('../routes'))

app.set('view engine','ejs');
app.set('views','../views')


app.listen(port ,(err,res) => console.log(`this app is running in the port no: ${port}`))