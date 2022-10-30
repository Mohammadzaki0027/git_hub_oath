const express = require("express");

const app = express();
const bcrypt=require("bcrypt")

app.listen(8080, () => {
  try {
    console.log("connected");
  } catch (err) {
    console.log(err);
  }
});
