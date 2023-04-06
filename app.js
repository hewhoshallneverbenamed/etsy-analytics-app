const express = require("express");
const mongoose = require("mongoose");

const logger = require("./src/middleware/logger");
const err = require("./src/middleware/errhandler")
const app = express();

const authroutes = require("./src/routes/auth");
const prodroutes = require("./src/routes/test")
const port2 = 3000;


// Use connect method to connect to the server
async function connect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/interphase');
    console.log("Connected successfully to the server");
  } catch (error) {
    console.log(error);
  }
}

connect();


//init middleware
app.use(logger);

app.use(express.json());
// app.use(express.urlencoded({extended: false}));  for form submitions
app.use("/auth", authroutes);
// app.use("/static", express.static('public'));
app.use("/getprodinsight", prodroutes);

//err handlers
app.use(err);






//listen
app.listen(port2, () => {
  console.log(`app listening on port ${port2}`);
});
