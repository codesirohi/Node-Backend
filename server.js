const express = require("express");
const dotenv = require("dotenv");

 //dotenv.config();

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send(`<h2> Working </h2> \n`);
  
});

app.listen(port, () => {
  console.log(`[server]: server is running at http://localhost:${port}/`);
});

let count =0;
// setInterval(()=>{

// })
console.log('instantaneous ')  