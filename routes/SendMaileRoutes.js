const express=require('express');
const sendmaileController = require('../controllers/SendMailController');

const sendmailRoutes=express.Router();

sendmailRoutes.post('/sendemail',sendmaileController.sendMAIL);

module.exports=sendmailRoutes

