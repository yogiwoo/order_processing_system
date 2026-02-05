const express = require("express");
const ordersSchema = require("./orderModel")
const router = express.Router();
const events=require('events');
const myEvents=new events();
router.post('/createOrder', async (req, res) => {
    const order = new ordersSchema(req.body);
    const saveOrder = await order.save();
    if (saveOrder) {
        myEvents.emit("ORDER_CREATED",{orderId:saveOrder._id,userId:saveOrder.userId,amount:saveOrder.totalAmount});

        myEvents.on("ORDER_CREATED",(data)=>{
            console.log("event data",data)
        })
        res.status(201).json({
            message: "Order created successfully",
            order: saveOrder
        });
    }
})


router.get('/getOrder', (req, res) => {
    res.send("order are below");
})


module.exports = router