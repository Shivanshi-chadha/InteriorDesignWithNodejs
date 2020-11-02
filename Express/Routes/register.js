const express=require("express");
const path=require("path");
const router=express.Router();
const bcrypt=require("bcrypt");

const passwordRoute=require('./Routes/password-config');

const initializePassport=require('./Routes/password-config');
initializePassport(password);

router.get('/reg',(req,res)=>{
    res.render("adminRegister",{
        title:"Admin Registration",

    });
});

router.get('/show',async(req,res)=>{
    const user=[];
   try
   {
       const hashPassword=await bcrypt.hash(req.body.password,10); 
       user.push({
           id:Date.now().toString(),
           name:req.body.name,
           email:req.body.email,
           password:req.body.password,
       });
       res.redirect('/admin/contact');

   }
   catch{
       res.redirect('/register/reg');
   }
   console.log(user);
});

module.exports=router;