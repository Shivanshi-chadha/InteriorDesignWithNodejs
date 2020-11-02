const express=require("express");
const path=require("path");
const router = require("./contactus");
const routes=express.Router();

routes.get('/appointment',(req,res)=>{
    res.render("appointment",{
        title:"Appointment",
    });
});


module.exports=router;