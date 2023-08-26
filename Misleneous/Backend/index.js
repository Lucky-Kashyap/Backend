const express = require('express');
const app = express();

const port = 8080;

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});


app.get('/register',(req,res)=>{
    const {user,password} = req.query;

    res.send(`standard GET response. Welcome ${user} and pass : ${password}`);
})

app.post('/register',(req,res)=>{
    res.send('standard POST response');
})