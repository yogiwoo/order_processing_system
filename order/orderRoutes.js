const express = require("express");
const ordersSchema = require("./orderModel")
const router = express.Router();
const events=require('events');
const myEvents=new events();
router.post('/createOrder', async (req, res) => {
    const order = new ordersSchema(req.body);
    const saveOrder = await order.save();
    if (saveOrder) {

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