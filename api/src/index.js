const express = require("express");
const app = express();
const port = 3002;
const bodyParser = require('body-parser')

var cors = require("cors");

app.use(cors());
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post('/sign-in',(req,res) => {
  const {email,password} = req.body;

  if(email === 'admin' && password === 'admin'){
    return res.json({
      token:'123456789'
    });
  }
  res.status(401).send({
    message:'Invalid credentials'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
