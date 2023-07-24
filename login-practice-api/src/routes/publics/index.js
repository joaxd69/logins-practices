const {Router} = require('express');
const {validateRegister} = require('../../middlewares');
const router= Router();

router.use('/login',require('./login'))
router.use('/register',require('./register'))

module.exports=router

