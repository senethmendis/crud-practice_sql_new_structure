const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

const port = process.env.SERVERPORT;
const products = require("./routes/products");

app.use("/products", products);

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("Server is runnig on port " + port);
});
