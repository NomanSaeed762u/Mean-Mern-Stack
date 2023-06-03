const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require('./routes/Formd/Formd.controller');
const router1 = require('./routes/Contact/Contact.controller');
const cors = require('cors');

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/FormData", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to FormData DB");
    app.use("/data", router);
  })
  .catch((error) => {
    console.log(`Couldn't connect to FormData MongoDB, ${error}`);
  });

app.use("/contact", router1);

app.listen(5000, () => {
  console.log("App is listening at port 5000");
});
