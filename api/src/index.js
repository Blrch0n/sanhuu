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
app.post("/login", (req, res) => {
  const { email_, password_, name_ } = req.body;

  const token_ = jwt.sign({ email_, password_ }, "secret-key", {
    expiresIn: "24h",
  });
  res.json({
    token_,q
  });
});

app.post("/sign-in", (req, res) => {
  const headers = req.headers;

  const a = headers.authorization;

  if (!a) {
    res.status(401).json({
      message: "Unauthorized - 6",
    });
    return;
  }
  try {
    jwt.verify(a, "secret-key");
  } catch (err) {
    res.status(401).json({
      message: "Unauthorized - 9",
    });
    return;
  }
  res.json({
    token,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
