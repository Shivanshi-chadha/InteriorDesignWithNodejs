const express=require("express");
const path=require("path");
const router=express.Router();

router.get('/price',(req,res)=>{
    res.render("price",
    {
        title:"price",
    });
});

module.exports=router;