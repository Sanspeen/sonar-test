const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product");
const app = express();

app.use(express.json());

var a = 0

app.get("/", function (req, res) {
  res.send();
});

app.post("/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.post("/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.listen(3000, () => {
  console.log("Node JS is running on port 3000");
});

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://SantiagoFranco:ajiRPaqTzJweOmJq@cluster0.w4qz98p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((error) => {
    console.log(error);
  });
