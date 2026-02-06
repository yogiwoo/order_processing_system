const orderEvent=require('./eventEmitter')
const orderModel=require("./../orderModel");

orderEvent.on("INVENTORY_RESERVED",async (data)=>{

    
    const data=await orderModel.updateOne({_id:new ObjectId(data.orderId),status:"CONFIRMED"})
    if(data){
        console.log("status updated")
    }
})

orderEvent.on("INVENTORY_FAILED",async (Data)=>{
    const data=await orderModel.updateOne({_id:new ObjectId(data.orderId),status:"FAILED"})
    if(data){
        console.log("order failed");
    }
})