const myEvents=require("./eventEmitter");

console.log("event consumer loaded---------");
myEvents.on("ORDER_CREATED",(data)=>{
    console.log("event received",data);
})

