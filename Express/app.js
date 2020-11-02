const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const path=require("path");
const mongoose=require("mongoose");

const adminRoutes=require('./Routes/admin');
const homeRoutes=require('./Routes/home');
const orderRoutes=require('./Routes/orders');
const viewRoutes=require('./Routes/vieworder');
const designRoutes=require('./Routes/design');
const contact=require('./Routes/contactus');
const priceRoute=require('./Routes/price');
const appointmentRoute=require('./Routes/appointment');

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,"public")));

app.use(homeRoutes);
app.use('/admin',adminRoutes);
app.use(orderRoutes.routes);
app.use(viewRoutes);
app.use(designRoutes);
app.use(contact);
app.use(priceRoute);
app.use(appointmentRoute);


app.use((req,res,next)=>{
   // res.status(404).send("<h1>Page Not Found</h1>");
   res.render("404",{
      title:"Page not found",
   }); // It is name of the EJS file here no need of extension also. 
});

mongoose
.connect("mongod://localhost:27017/mydemo")
.then((result)=> {
console.log("Database connected successfully");
})
   .catch((err)=>{
   console.log("Can't connect to database",err);
});

app.listen(7000);
