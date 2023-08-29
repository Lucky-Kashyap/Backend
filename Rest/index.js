const express = require('express');

const app = express();

const port = 8080;
const path = require('path');
const {v4:uuidv4} = require('uuid');
const methodOverride = require('method-override');


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
app.use(methodOverride('_method'));

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
    // res.send('patch request');
    // res.render('index.ejs',{post});
    res.redirect('/posts');
})

app.get('/posts/:id/edit',(req,res)=>{
    let {id} = req.params;

    let post = posts.find(post=> id==post.id);

    res.render('edit.ejs',{post});

})
// app.delete('/posts/:id',(req,res)=>{
//     let {id} = req.params;

//     const post = posts.filter((post)=>id!==post.id);
//     res.render('show.ejs',{post});
// })
app.listen(port,()=>{
    console.log('Listening to port ');
})


