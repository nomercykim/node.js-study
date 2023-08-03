const express = require('express');
const helmet = require("helmet");
// import express from "express";
// import helmet from "helmet";
const app = express();
const ejs = require("ejs");


app.set('view engin', ejs);
app.set('view', './view');
app.use('/public', express.static(__dirname+'/public'));


app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());

const mainRouter = require('./router/mainRouter');
app.use('/', mainRouter);

app.listen(3000,function(req,res){
    console.log("Example app listening on Port 3000.")
}) 