const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    const query = "SELECT * FROM products";
    db.query(query, (err, data) => {
      if (err) throw err;
      console.log(data);
      return res.json(data);
    });
  } catch (error) {
    console.error("Fetching product data faild", error);
    res.status(500).json({ error: "Internal Server error" });
  }
});

router.post("/", (req, res) => {
  try {
    const query =
      "INSERT INTO products (product_name, phone_number, note) VALUES (?)";
    const values = [
      req.body.product_name,
      req.body.phone_number,
      req.body.note,
    ];
    db.query(query, [values], (err, data) => {
      if (err) throw err;
      console.log(data);
      return res.json("Ne Product Added");
    });
  } catch (error) {
    console.error("Adding product data failed", error);
  }
});

router.delete("/:id", (req, res) => {
  try {
    const id = req.params.id;
    const query = "DELETE FROM products WHERE product_id = ?";
    db.query(query, [id], (err, data) => {
      if (err) throw err;
      if (data.affectedRows === 0) {
        return res.status(404).json({ message: "Product Not Found!" });
      }
      return res.status(200).json({ message: "Product Deleted!" });
    });
  } catch (error) {
    console.error("Deleting product data failed!", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id", (req, res) => {
  const id = req.params.id;

  const product_name = req.body.product_name;
  const phone_number = req.body.phone_number;
  const note = req.body.note;

  // use short
  // const values = [product_name, phone_number, note];

  const query =
    "UPDATE products SET product_name = ?, phone_number = ?, note = ? WHERE product_id = ?";

  // db.query(query, [values], (err, data) =>
  db.query(query, [product_name, phone_number, note, id], (err, data) => {
    try {
      if (err) throw err;
      if (data.affectedRows === 0)
        console.log(`No such prodcut found from id ${id}`);
      return res.json("Product Updated");
    } catch (error) {
      console.error("Updating product data failed!", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
});

module.exports = router;
