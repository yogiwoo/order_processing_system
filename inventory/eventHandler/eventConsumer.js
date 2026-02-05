const orderEvent=require("./../../order/eventsHandler/eventEmitter");

orderEvent.on("ORDER_CREATED",(data)=>{
    console.log("order data received to invenotry",data)
})