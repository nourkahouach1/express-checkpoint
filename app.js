const express = require("express");
const path = require('node:path');
const port = 4000;
const app = express();

const verifytime = require("./Public/middlewares/verifytime");

app.use(verifytime);
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'public','Home.html'));
});

app.get('/Contact-us', (req, res) => {
  res.sendFile(path.join(__dirname,'public','Contact-us.html'));
});

app.get('/Our-Services', (req, res) => {
  res.sendFile(path.join(__dirname,'public','Our-Services'));
});

app.listen(port, (err) => {
  err ? console.log(err) : console.log(`server is running at ${port}`);
});
