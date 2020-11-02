const express=require("express");
const path=require("path");
const router=express.Router();

router.get('/contact',(req,res,next)=>{
    //res.sendFile(path.join(__dirname,"..","Views","admin.html"));
    res.render("admin",
    {
        title:"admin",
    });
});


router.post("/display",(req,res,next)=>{
    console.log(req.body.name);
    console.log(req.body.mail);
    console.log(req.body.pass);
    res.send(req.body);
});

module.exports=router;