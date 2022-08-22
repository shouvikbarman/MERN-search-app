const express = require('express');
const app = express();
const cors = require('cors')
const db = require('./config/mongoose')
const port = 8000;

app.use(cors())
app.use('/',require('./routes'))
app.listen(port, function(err){
    if (err) {
        console.log(err);
    }
    console.log(`server is up and running on port:${port}`);
})