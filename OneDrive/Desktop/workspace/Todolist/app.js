const express=require("express");
const body=require("body-parser");
const app=express();
let items=["buy food","cook","Eat food"];
app.set('view engine',"ejs");
app.use(express.static('public'));
app.use(body.urlencoded({extended:true}));
app.get("/",function(req,res){
let today=new Date();
let optiions={
        weekday:"long",
        day:"numeric",
        month:"long"
};
let day=today.toLocaleDateString("en-US",optiions);


res.render("list",{kindofday:day,newlistitems:items});
})
app.post("/",function(req,res){
let item=req.body.newitem;
res.redirect("/");
items.push(item);

})
app.listen(3000,function(){
    console.log("server is running");
})