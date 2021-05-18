const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

app.get('/', function(req, res) {
  res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
	var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);
   //console.log(req.body);
   res.send("The answer is " + (n1+n2));
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
});
