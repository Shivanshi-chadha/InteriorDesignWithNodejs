const express=require("express");
const router=express.Router();
const path=require("path");

const orderInfo=require("./orders");
const order=orderInfo.order; // It will display all the values taht are entered inside the array.

router.get('/view',(req,res,next)=>{
    console.log("Products :" , order);
    //res.sendFile(path.join(__dirname,"..","Views","vieworder.html"));
    res.render("vieworder",{
        prod:order,
        title:"viewOrder",
    });
    });

module.exports=router;

