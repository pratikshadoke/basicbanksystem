const express = require('express')
const Transaction = require('../model/transaction')
const Customer = require('../model/userSchema')
require("../db/conn");
const router = express.Router()

router.get('/transactions', async (req, res) => {
  const transactions = await Transaction.find({}).sort({ date: -1 })
  res.send(transactions)
})



module.exports = router
