const express = require('express');
const app = express();


app.get('/', function(req, resp){
    resp.send('Server is running');
})

app.listen(3000, function(){
    console.log('port running on 3000');
})