const express = require("express");
const userget = require("../../models/User");
const User = require("../../models/User");

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await userget.find();
  res.status(200).send(User);
});

router.post("/", async (req, res) => {
  const payload = req.body;
  let userget= new userget(payload);

  userget = await userget.save();
  res.status(200).send(userget);
});

router.delete("/:productId", async (req, res) => {
  const userget = await Product.findByIdAndDelete(req.params.productId);
  res.status(200).send(userget);
});

module.exports = router;
