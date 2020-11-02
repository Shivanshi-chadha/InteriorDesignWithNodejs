const express=require("express");
const path=require("path");
const router=express.Router();


router.get('/',(req,res,next)=>{
    //res.sendFile(path.join(__dirname,"..","Views","home.html"));
    res.render("home",
    {
        title:"home",
    });
});


module.exports=router;
