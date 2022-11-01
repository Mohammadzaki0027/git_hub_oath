const express = require("express");
const app = express();
app.use(express.json())


app.get("/",(req,res)=>{
   return  res.sendFile(__dirname+"/index.html")
})
const client_secret="5bca7e9756391322c75f34f024a167b4e7007930"
const client_id="d9ef25dcf93821d24201"


app.get("/github/callback",(req,res)=>{
  const code=req.query.code
const access_token=axios.get(`https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}`)
// Get userdata
const userdata=axios.get("https://api.github.com/user",{
  headers:{Authorization:`Bearer ${access_token}`
}
})
  res.send("signin with git hub")
})

app.listen(8080, () => {
  try {
    console.log("connected");
  } catch (err) {
    console.log(err);
  }
});
