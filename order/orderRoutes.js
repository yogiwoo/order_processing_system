const express=require("express");

const router=express.Router();

router.post('/createOrder',(req,res)=>{

})

router.get('/getOrder',(req,res)=>{
    res.send("order are below");
})


module.exports=router