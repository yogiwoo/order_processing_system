const orderEvent=require('./eventEmitter')
const orderModel=require("./../orderModel");
const mongoose =require('mongoose');
const ObjectId = mongoose.Types.ObjectId
orderEvent.on("INVENTORY_RESERVED",async (data)=>{

    
    const data1=await orderModel.updateOne({_id:new ObjectId(data.orderId)},{$set:{status:"CONFIRMED"}})
    if(data1.modifiedCount>0){
        console.log("status updated")
    }
})

orderEvent.on("INVENTORY_FAILED",async (data)=>{
    const data1=await orderModel.updateOne({_id:new ObjectId(data.orderId)},{status:"FAILED"})
    if(data1.modifiedCount>0){
        console.log("order failed");
    }
})