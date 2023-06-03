const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/products/product.controller");
//const router1 = require('./routes/Userdata/user.controller')
const cors = require('cors');
app.use(cors());


app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/techliftBootcamp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(`Couldn't connected to MongoDB, ${error}`));

app.use("/products", router);
//app.use("/user", router1);

app.listen(5000, () => console.log("App is listening at port 5000"));
