// console.log("hello world");

const express = require("express");
const mongoose=require("mongoose");
const app=express();
const routes=require("./Routes/route")

app.use(express.json());
app.use("/",routes);

// db connection
mongoose.connect("mongodb+srv://shalmalishiya:shiyashetty@cluster0.m7cysr2.mongodb.net/intern")
.then(()=>{
    console.log("DB connected");
})
.catch((err)=>{
    console.log(err,"something went wrong");
});

app.get("/test",(req,res)=>{
    res.send("helloo");
});

app.listen(4000,()=>{
    console.log("server is connected");
});

