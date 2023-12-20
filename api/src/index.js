const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  console.log(req);

  res.send("Hello World!");
}).get('/test',(req,res)=>{
    res.send('Test');
}).get('/test/:id',(res,req) => {
    res.send(`test ${req.params.id}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
