const express = require('express');
const app = express();


// console.log(app);
let port = 8080;

app.listen(port,()=>{
    console.log('start server');
})

// app.use((req,res)=>{
//     // console.log(req);
//     // console.log(res);

//     res.send('This is basic response');
//     console.log('request recieve');
// })


app.get('/',(req,res)=>{
    res.send('Hello i am root path');
})

// app.get('/about',(req,res)=>{
//     res.send('You contacted about path');
// })

// app.get('/conatact',(req,res)=>{
//     res.send('You contacted conatct path');
// })

// app.get('/services',(req,res)=>{
//     res.send('You contacted services path');
// })


// app.get('*',(req,res)=>{
//     res.send('You conatcted wrong path');
// })



// app.post('/',(req,res)=>{
//     res.send('Data ENter');
// })


app.get('/:username/:id',(req,res)=>{
    // console.log(req.params);

    const {username,id} = req.params;

    let htmlStr = `<h1>Welcome to Page @${username}</h1>`

    res.send(htmlStr);
})


app.get('/search',(req,res)=>{
    // console.log(req.query);

    let {q} = req.query;

    if(!q){
        res.send('No Query Found');
    }

    res.send(`Result Query ${q}`);
})


