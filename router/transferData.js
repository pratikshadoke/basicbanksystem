const express = require('express')
const Customer = require('../model/userSchema')
require("../db/conn");
const router = express.Router()

router.get('/transfer', async (req, res) => {
  const namelist = await Customer.find({},{name:1,accountbalance:1,_id:1})
  console.log(namelist)
  res.send(namelist)
})

module.exports=router