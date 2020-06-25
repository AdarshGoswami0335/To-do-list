const express = require("express");
const bodyparser = require("body-parser");
const app = express();
var items = ["Wake up early",
             "Have a tea",
             "Start Coding",
];
app.use(express.static("Public"));
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res){
var today = new Date();
var options = {
    weekday:"long",
    day:"numeric",
    month:"long",
}
var day =today.toLocaleDateString("en-us",options);
  res.render("list", {currentday:day,newitems:items});
});
app.post("/",function(req,res){
    var item = req.body.listitem;
    items.push(item);
    res.redirect("/");
})
app.listen(process.env.PORT,function(){
    console.log("Server started at port 3000");
});