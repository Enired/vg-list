const express = require('express');
const app = express()
const PORT = 8081;

app.use(express.static('public'))

app.listen(PORT, ()=>{console.log('Server is Running')})