const express = require("express");
const ordersSchema = require("./orderModel")
const router = express.Router();
const eventEmitter=require("./eventsHandler/eventEmitter")
router.post('/createOrder', async (req, res) => {
    const order = new ordersSchema(req.body);
    const saveOrder = await order.save();
    if (saveOrder) {
        const data={
            orderId:saveOrder._id,
            userId:saveOrder.userId,
            totalAMount:saveOrder.totalAmount
        }
        eventEmitter.emit("ORDER_CREATED",data)
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