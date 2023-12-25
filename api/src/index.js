const express = require("express");
const app = express();
const port = 3002;
const bodyParser = require("body-parser");
var jwt = require("jsonwebtoken");

var cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/sign-in", (req, res) => {
  const headers = req.headers;

  const a = headers.Authorization;

  if(!a){
    res.status(401).json({
      message:'Unauthorized - 6',
    })
    return;
  }
  try{
    jwt.verify(a,'secret-key')
  }catch(err){
    res.status(401).json({
      message:'Unauthorized - 9',
    })
    return;
  }
  const { email, password } = req.body;

  const token = jwt.sign({ email }, "secret-key",{expiresIn:'24h'});
  res.json({
    token,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
