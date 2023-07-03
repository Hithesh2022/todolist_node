const express =require("express");
const bodyparser=require("body-parser");
const app=express();
app.set('view engine',"ejs");
app.get("/",function(req,res){
let today=new Date();
let currentDay=today.getDay();
let day="";
switch(currentDay)
{
case 1: day="monday";
        break;
case 2: day="tuesday";
        break;
case 3 :day="wednesday";
        break;
case 4 :day="thursday";
        break;
case 5: day="friday";
        break;
case 6 :day="Saturday";
        break;
case 7:day="Sunday";
break;
default:console.log("Invalid Day");

}
res.render("list",{kindofday:day});
})
app.listen(3000,function(){
    console.log("server is running");
})