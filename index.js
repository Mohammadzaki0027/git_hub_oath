const express = require("express");

const app = express();
const bcrypt=require("bcrypt")
app.get("/",(req,res)=>{
    res.send("welcome to Homepage")
})


app.post("/login",(req,res)=>{
    res.send("welcome to login page")
})

app.post("/signup",(req,res)=>{
    res.send("welcome to signup")
})
app.listen(8080, () => {
  try {
    console.log("connected");
  } catch (err) {
    console.log(err);
  }
});
