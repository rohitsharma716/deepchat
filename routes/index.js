const express = require('express')
const router = express.Router();

const HomeControllar = require('../controllars/home_controlars');

console.log("the roter file")

router.get('/',HomeControllar.home)
router.use('/user_routes',require('./user_routes'))
router.use('/user_routes',require('./post'))
// router.use('/post',require('./post'))

module.exports= router;