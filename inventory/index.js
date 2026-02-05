// console.log("event consumer oaded")
// const event=require("./eventHandler/eventConsumer")
// console.log("event consumer executed")

// setTimeout(()=>{
//  console.log("index is running in inventory service")
// },70000)

const express=require("express");
const mongoose=require("mongoose");
const app=express();
require('./eventHandler/eventConsumer');
app.listen(3004,()=>{
    mongoose.connect('mongodb://localhost:27017').then(()=>{
        console.log('mongodb connected sccessfully')
    })
    console.log("server started at 3003")

})