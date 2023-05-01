const express = require('express');
const router =express.Router();

const userControlar = require('../controllars/users_controlar')
// const userpost = require('../controllars/post_controlar')

router.get('/profile',userControlar.profile)
// router.get('/post',userpost)

module.exports=router;