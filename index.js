const express = require("express");
const app = express();
app.use(express.json());
const axios = require("axios");

app.get("/", (req, res) => {
  return res.sendFile(__dirname + "/index.html");
});
const client_secret = "5bca7e9756391322c75f34f024a167b4e7007930";
const client_id = "d9ef25dcf93821d24201";

app.get("/github/callback", async (req, res) => {
  const code = req.query.code;
  const access_token = await axios.post(
    `https://github.com/login/oauth/access_token`,null,
    {
      params: {
        client_id: client_id,
        client_secret: client_secret,
        code: code,
      },
      headers:{accept:"application/json"}
    }
  );

  // Get userdata

  const userdata = await axios.get("https://api.github.com/user", {
    headers: { Authorization: `Bearer ${access_token.data.access_token}` },
  });
  console.log(userdata);
  res.send("signin with git hub");
});

app.listen(8080, () => {
  try {
    console.log("connected");
  } catch (err) {
    console.log(err);
  }
});
