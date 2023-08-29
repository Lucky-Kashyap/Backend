const express = require('express');

const app = express();

const port = 8080;
const path = require('path');
const {v4:uuidv4} = require('uuid');



let posts = [
    {
        id:uuidv4(),
        username:'lucky',
        content:'I love Coding'
    },
    {   id:uuidv4(),
        username:'apniduniya',
        content:'Hardwork is important'
    },
    {   id:uuidv4(),
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
    let id = uuidv4();

    posts.push({id,username,content});
    // res.send('post request working');
    // res.send('index.ejs',{posts})

    res.redirect('/posts');
});

app.get('/posts/:id',(req,res)=>{
    let {id} = req.params;
    // let {name} = req.query;
    // console.log(name);

    let post = posts.find((post)=>id==post.id)
    // console.log(id);
    // console.log(post);
    // res.send('request working')
    res.render('show.ejs',{post})
})

app.patch('/posts/:id',(req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((post)=>id==post.id)
    post.content = newContent;
    console.log(post);
    // console.log(id);
    // console.log(newContent);
    res.send('patch request');
})
// app.delete('/posts/:id',(req,res)=>{
//     let {id} = req.params;

//     const post = posts.filter((post)=>id!==post.id);
//     res.render('show.ejs',{post});
// })
app.listen(port,()=>{
    console.log('Listening to port ');
})


