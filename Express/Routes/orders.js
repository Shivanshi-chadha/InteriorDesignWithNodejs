const express=require("express");
const router=express.Router();
const path=require("path");

const bookorders= [];

router.get('/order',(req,res,next)=>{
    //res.sendFile(path.join(__dirname,"..","Views","order.html"));
    res.render("orders",{
        title:"order",
    }); ///EJS file
});

router.post('/confirm',(req,res,next)=>{
    bookorders.push(req.body.name);
    bookorders.push(req.body.mail);
    bookorders.push(req.body.quantity);
    bookorders.push(req.body.number);

   // res.sendFile(path.join(__dirname,".","Routes","vieworder.js"));
    res.redirect('/view');
});



// to epxort multiple things
exports.routes=router;
exports.order=bookorders;



