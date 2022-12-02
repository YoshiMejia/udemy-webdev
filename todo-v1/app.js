const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.get('/', function(req, resp){
    resp.send('Hello world');
})

app.listen(3000, function(){
    console.log('Server started on port 3000');
})