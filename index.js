const express = require("express");
app.use(express.json())
const app = express();
const bcrypt=require("bcrypt");
const { SignupRoute } = require("./Router/signup.Route");
app.use("/",SignupRoute)
SignupRoute.get("/",(req,res)=>{
    res.send("welcome to Homepage")
})

SignupRoute.notes("/notes",(req,res)=>{
    res.send("Welcome to notes page")
})
SignupRoute.post("/login",(req,res)=>{
    res.send("welcome to login page")
})

SignupRoute.post("/signup",(req,res)=>{
    res.send("welcome to signup")
})
app.listen(8080, () => {
  try {
    console.log("connected");
  } catch (err) {
    console.log(err);
  }
});
