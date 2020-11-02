const express=require("express");
const path=require("path");
const router=express.Router();

router.get('/contact',(req,res)=>{
    res.render("contact",
    {
        title:"Contact Us",
    });

});

module.exports=router;