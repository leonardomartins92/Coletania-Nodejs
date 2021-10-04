const express = require('express')
const app = express()

//pm2 start pm2.js -i 0
//pm2 monit
//pm2 delete index

app.get('/',(req, res)=>{
    console.log('Olá mundo')
    res.send('ola mundo')
})

app.listen(3000)