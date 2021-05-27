const express = require("express");
const router = express.Router();
require("../db/conn");
const Transaction = require('../model/transaction')
const Customers = require("../model/userSchema");
router.get('/customers', async (req, res) => {
  const customers = await Customers.find({},{_id:0})
  res.send(customers)
})
router.post('/transfers', async (req, res) => {
  const { from, to, amount } = req.body;
  try {
    const fromCustomer = await Customers.findOne({'name':`${from}`})
    const newFromBalance = Number(fromCustomer.accountbalance) - Number(amount)
    Customers.updateOne({ name:from }, { accountbalance: newFromBalance }, err => {
     
       if (err) {
        console.log(err)
        res.status(500).send('Server Error')
      } 
      else {
        console.log('UPDATED')
      }
    })
    const toCustomer = await Customers.findOne({'name':`${to}`})  
    const newToBalance = Number(toCustomer.accountbalance) + Number(amount)
    Customers.updateOne({name: to }, { accountbalance: newToBalance }, err => {
      if (err) {
        console.log(err)
        res.status(500).send('Server Error')
      } 
      else {
        console.log('UPDATED')
      }
    })
    const transaction = new Transaction({
      from: fromCustomer,
      to: toCustomer,
      amount,
    })
    transaction.save()
    res.json(transaction)
  } catch (error) {
    console.log(error)
    res.status(500).send('Server Error')
  }
})
module.exports=router;