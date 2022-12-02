const express = require('express');
const app = express();

// first arg is address so here its the root page
//second arg is callback function that tells the server what to do when the request happens

app.get("/", function(req, resp){
    // this will send back the following response to the browser
    //either line below will work, doesnt have to be simple strings
    resp.send('hello');
    resp.send('<h1>Hello</h1>');
})

app.get('/about', function(req, resp){
    resp.send('my name is yoshi')
})
app.listen(3000, function(){
    console.log('server started on port 3000');
});