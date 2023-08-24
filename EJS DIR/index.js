const express = require('express');
const path = require('path');
const instaData = require('./data.json');

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

    // const followers = ['adam','bob','abc','lucky','shradha'];

    const {name} = req.params;
    
    const data = instaData[name];
    // res.render('username',{name,followers});
    // res.render('username',{data});

    if(data){
        res.render('username',{data});
    }
    else{
        res.render('error');
    }
})



app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})


