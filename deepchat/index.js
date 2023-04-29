const express = require('express')
const path = require('path')
const app = express()
const  port = 9000;


app.listen(port ,(err,res) => console.log(`this app is running in the port no: ${port}`))