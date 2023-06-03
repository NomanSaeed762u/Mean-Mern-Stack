const express = require("express");
const Product = require("../../models/products");

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.status(200).send(products);
});

router.post("/", async (req, res) => {
  console.log(".....................");
  const payload = req.body;
  let product = new Product(payload);

  product = await product.save();
  res.status(200).send(product);
});

router.delete("/:productId", async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.productId);
  console.log(product)
  res.status(200).send(product);
});
router.put("/:productId", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.productId,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    console.log(updatedProduct);
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
