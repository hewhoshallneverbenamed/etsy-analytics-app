import express from "express";
import mongoose from "mongoose";

import { logger } from "./src/middleware/logger.js";
import { errhandler } from "./src/middleware/errhandler.js";

import  authroutes  from "./src/routes/auth.js";
import  prodroutes  from "./src/routes/prod.js";


const app = express();
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
app.use(express.urlencoded({extended: true}))
app.use("/auth", authroutes);
// app.use("/static", express.static('public'));
app.use("/getprodinsight", prodroutes);

//err handlers
app.use(errhandler);






//listen
app.listen(port2, () => {
  console.log(`app listening on port ${port2}`);
});
