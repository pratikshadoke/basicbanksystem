const mongooose = require('mongoose');

const userSchema = new mongooose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
         type: String,
        required:true
    },
    phone: {
        type: Number,
        required:true
    },
    accountno: {
         type: Number,
        required:true
    },
    ifscno:{
        type: Number,
        required:true
    },
    accountbalance:{
        type:Number,
        required:true
    }
})

const Customers = mongooose.model('CUSTOMERS', userSchema);

module.exports = Customers;