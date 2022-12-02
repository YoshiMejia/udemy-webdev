const express = require('express');
const app = express();
const bodyParser = require('body-parser')
//below line must be added in order to use body-parser
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', function(req, resp){
    resp.sendFile(__dirname + '/index.html');
})


app.post('/', function(req, resp){
    console.log(req.body);
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;
    resp.send('the sum is ' + result)
})

app.get('/bmicalculator', function(req,resp){
    resp.sendFile(__dirname + '/bmiCalculator.html');
})

app.post('/bmicalculator', function(req, resp){
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    let result = weight / height
    resp.send('your BMI is ' + result)
    
})

app.listen('3000');