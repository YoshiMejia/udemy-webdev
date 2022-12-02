const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.get('/', function(req, resp){
    resp.send('Hello world');
    // if you want to send multiple elements, use resp.write() and one final resp.send() at the end
    // ex:
    // resp.write('line 1');
    // resp.write('line 2');
    // resp.send();
})

app.listen(3000, function(){
    console.log('Server started on port 3000');
})