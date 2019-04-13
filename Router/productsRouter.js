const express = require("express");
const router = express.Router();
const controller = require("../Controllers/productsController");

router.get("/products", (req, res) => res.json(controller.list()));

router.get("/products/:id", (req, res) =>
  res.json(controller.show(req.params.id))
);
//router grabbing product id res.json comparing it to the defined parameter and returning the id.

router.post("/products", (req, res) => res.json(controller.create(req.body)));

module.exports = router;
