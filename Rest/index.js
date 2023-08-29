const express = require('express');

const app = express();

const port = 8080;
const path = require('path');

let posts = [
    {
        username:'lucky',
        content:'I love Coding'
    },
    {
        username:'apniduniya',
        content:'Hardwork is important'
    },
    {
        username:'ajay',
        content:'I  got my first internship'
    }
] 

app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.use(express.static(path.join(__dirname,'public')));


app.get('/posts',(req,res)=>{
    // res.send('service working well..!')
    res.render('index.ejs',{posts});
})

app.get('/posts/new',(req,res)=>{
    res.render('new.ejs');
})

app.post('/posts',(req,res)=>{
    // console.log(req.body)
    let {username,content} = req.body;

    posts.push({username,content});
    res.send('post request working')
    // res.send('index.ejs',{posts})
});


app.listen(port,()=>{
    console.log('Listening to port ');
})


