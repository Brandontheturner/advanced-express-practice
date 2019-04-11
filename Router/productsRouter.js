const express = require("express");
const router = express.Router();

router.get("/products", (req, res) => {
  res.json(products);
});
router.get("/products/:id", (req, res) => {
  const userId = products.findIndex(products => {
    return products._id == req.params.id;
  });
  res.json(products[userId]);
});
router.post("/products", (req, res) => {
  res.json(products);
});
router.post("/products/:id", (req, res) => {
  const userId = products.findIndex(products => {
    return products._id == req.params.id;
  });
  res.json(products[userId]);
});

module.exports = router;
