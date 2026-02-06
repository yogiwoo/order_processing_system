const express=require("express");
const mongoose=require("mongoose");
const app=express();
const orderRouter=require('./orderRoutes')
//event listner
require("./eventsHandler/eventConsumer");
require("./eventsHandler/inventoryConsumer");
require("./eventsHandler/Inventory_update_event")
require("./eventsHandler/paymentListner");
app.use(express.json());
app.use('/orders',orderRouter)
app.get('/',(req,res)=>{
    res.send("welcome to order processing system")
})

app.listen(3003,()=>{
    mongoose.connect('mongodb://localhost:27017').then(()=>{
        console.log('mongodb connected sccessfully')
    })
    console.log("server started at 3003")

})