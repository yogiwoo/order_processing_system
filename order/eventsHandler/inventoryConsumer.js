const orderEvent=require("./eventEmitter");
let currentStock=29;
orderEvent.on("ORDER_CREATED",(data)=>{
 
    if(currentStock>0){
        currentStock=currentStock-1;
        orderEvent.emit("INVENTORY_RESERVED",{orderId:data.orderId})
        console.log("inventory reserved orderId:",data.orderId);
    }
    else{
        orderEvent.emit("INVENTORY_FAILED",{orderId:data.orderId})
        console.log("inventory not reserved orderId:",data.orderId);
    }
    
})