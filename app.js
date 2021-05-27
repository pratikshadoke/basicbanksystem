const dotenv=require("dotenv")
const express= require("express")
const app=express();
const path = require('path')
 

dotenv.config({path:'./config.env'});
require('./db/conn');

const PORT=process.env.PORT || 5000;

app.use(express.json())
app.use(require('./router/transferData'))
app.use(require('./router/customerdata'))
app.use(require('./router/transactiondata'))

app.use(express.static(path.join(__dirname, 'client', 'build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

app.listen(`${PORT}`,()=>
{
    console.log(`hello from ${PORT} `)
});

