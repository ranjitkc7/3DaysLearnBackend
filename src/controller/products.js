import { db } from "../db/db.js";

export const getAllProducts = function (req, res) {
  const query = "SELECT * FROM products";
  db.query(query, function (err, results) {
    if (err) {
      return res.status(500).send("Error fetching products");
    }
    res.status(200).json(results);
  });
};

export const createProduct = function (req, res) {
  const product_name = req.body.product_name;
  const price = req.body.price;
  const image_url = req.body.image_url;
  const created_by = req.body.created_by;

  const query = `INSERT INTO products (product_name,created_by, price,image_url) VALUES (?,?,?,?)`;

  db.query(
    query,
    [product_name, created_by, price, image_url],
    function (err, results) {
      if (err) {
        return res.status(500).send("Error creating product");
      }
      return res
        .status(201)
        .json({ product_id: results.insertId, product_name, price, image_url });
    }
  );
};
