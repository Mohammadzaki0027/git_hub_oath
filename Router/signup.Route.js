const {Route}=require("express")

const SignupRoute=Route()


SignupRoute.post("/",(res,req)=>{
    res.send("Signup page")
})

module.exports={SignupRoute}