const express = require('express')
const path = require('path')
const app = express()
const  port = 8000;
const HomeControllar = require('../controllars/home_controlars');
const router = require('../routes');

app.use('/',require('../routes'))
router.get('/',HomeControllar.home)


app.listen(port ,(err,res) => console.log(`this app is running in the port no: ${port}`))