const express = require("express");
const app = express();
const port = 8080;

app.listen(port, (req, res)=>{
    console.log(`Port ${port} is listening`);
});