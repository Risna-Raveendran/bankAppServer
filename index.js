// import express
const express = require('express');
// const req = require('express/lib/request');
// const res = require('express/lib/response');
const dataService = require('./services/data.service')

// create an app using express
const app = express()

// to parse JSON
app.use(express.json())

// resolve http reqst from client

// GET -to read data
app.get('/',(req,res)=>{
    res.status(401).send(" IT'S A GET METHOD");
})


// POST -to create data
app.post('/',(req,res)=>{
    res.send(" IT'S A POST METHOD");
})

// PUT -to update data
app.put('/',(req,res)=>{
    res.send(" IT'S A PUT METHOD");
})

// PATCH -to update partially data
app.patch('/',(req,res)=>{
    res.send(" IT'S A PATCH METHOD");
})

// DELETE -to delete data
app.delete('/',(req,res)=>{
    res.send(" IT'S A DELETE METHOD");
})

// Bank app - API

// register API
app.post('/register',(req,res)=>{
   const result = dataService.register(req.body.acno,req.body.password,req.body.uname)

res.status(result.statusCode).json(result)
})

// log in API
app.post('/login',(req,res)=>{
    const result = dataService.login(req.body.acno,req.body.password)
 
 res.status(result.statusCode).json(result)
 })

 // Deposite API
app.post('/deposite',(req,res)=>{
    const result = dataService. deposite(req.body.acno,req.body.password,req.body.amt)
     res.status(result.statusCode).json(result)
 })

// set up the port number
app.listen(3000,()=>{
    console.log("server started at port no: 3000");
})