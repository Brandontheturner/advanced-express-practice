const express = require("express");
const router = express.Router();
const controller = require("../Controllers/vehiclesController");

router.get("/vehicles", (req, res) => res.json(controller.list()));

router.get("/vehicles/:id", (req, res) =>
  res.json(controller.show(req.params.id))
);

router.post("/vehicles", (req, res) => res.json(controller.create(req.body)));

module.exports = router;
