const express = require("express");
const ordersSchema = require("./orderModel")
const router = express.Router();
const eventEmitter=require("./eventsHandler/eventEmitter")


router.post('/inventory', async (req, res) => {
    
})


router.get('/getOrder', (req, res) => {
    res.send("order are below");
})


module.exports = router