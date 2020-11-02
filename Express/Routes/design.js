const express=require("express");
const path=require("path");
const router=express.Router();

router.get('/design',(req,res)=>{
    res.render("design",
    {
        title:"design",
    });

});

module.exports=router;