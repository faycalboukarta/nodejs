const express = require('express');
const { get } = require('http');
const { allowedNodeEnvironmentFlags } = require('process');

const app =express()

var obj={
    name:"itc",
    member: 300
}
app.get("/",(req,res)=>{
    res.send(obj.name);
    // res.send("hello bro");
})
var html=''
app.listen(3000,()=>{
    console.log("you are in the air");
})

app.post("/login",(rec,res))