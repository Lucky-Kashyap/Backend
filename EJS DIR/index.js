const express = require('express');
const path = require('path');

const app = express();


const port = 8080;

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

app.get('/',(req,res)=>{
    // res.send('this is home');
    res.render('home.ejs');
})

app.get('/hello',(req,res)=>{
    res.send('hello');
    
})

app.get('/rolldice',(req,res)=>{
    let diceVal = Math.floor(Math.random() * 6 ) +1;
    // res.send('hello');
    // res.render('rolldice');
    res.render('rolldice',{num:diceVal});
})

app.get('/ig/:name',(req,res)=>{
    const {name} = req.params;

    res.render('username',{name});
})



app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})

