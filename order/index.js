const express=require("express");

const app=express();
const orderRouter=require('./orderRoutes')
app.use(express.json());
app.use('/orders',orderRouter)
app.get('/',(req,res)=>{
    res.send("welcome to order processing system")
})

app.listen(3003,()=>{
    console.log("server started at 3003")
})