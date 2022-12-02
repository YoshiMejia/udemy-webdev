const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}))
// below tells express to load all files, including the static 'public' directory
app.use(express.static("public"));

let items = [];

app.get('/', function(req, resp){
    let today = new Date();
    let currentDay = today.getDay();
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };
    let day = today.toLocaleDateString('en-US', options)
    // .render is sending the object in the 2nd arg to the view named in the first arg. so the list.ejs is receiving the kindOfDay and newListItem variables
    // here, newListItem is passing in the items array, so in list.ejs the variable newListItem is actually our items array from the top of this file
    resp.render('list', {kindOfDay: day, newListItem: items});
})

app.post('/', function(req, resp){
    items.push(req.body.newItem); 
    resp.redirect('/')
})

app.listen(3000, function(){
    console.log('Server started on port 3000');
})