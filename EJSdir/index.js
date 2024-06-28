const express= require("express");
const app= express();
const path= require("path");
let port= 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res)=>{
    res.render("home.ejs");
})

app.get("/instagram/:username",(req, res)=>{
    let {username}= req.params;
    const data= require("./instadata.json");
    let instadata= data[username];
    res.render("instagram.ejs", {instadata});
    
})

app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
})