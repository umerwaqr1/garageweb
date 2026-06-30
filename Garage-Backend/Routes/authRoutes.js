const express=require('express');
const router=express.Router();
const { loginAdmin }=require('../Controller/authControllers');

router.post('/login',loginAdmin);
module.exports=router;