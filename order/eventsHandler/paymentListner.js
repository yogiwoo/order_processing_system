const orderEvent=require("./../eventsHandler/eventEmitter");
orderEvent.on('INVENTORY_RESERVED',(data)=>{

    let payment=false; //simulate
    if(payment){
        orderEvent.emit("PAYMENT_SUCCESS",{orderId:data.orderId})
        console.log("Payment success");
    }
    else{
        orderEvent.emit("PAYMENT_FAILED",{orderId:data.orderId});
        console.log("payment failed");
    }
})