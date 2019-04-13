const express = require("express");
const router = express.Router();
const controller = require("../Controllers/commentsController");

router.get("/comments", (req, res) => res.json(controller.list()));

router.get("/comments/:id", (req, res) =>
  res.json(controller.show(req.params.id))
);

router.post("/comments", (req, res) => res.json(controller.create(req.body)));

module.exports = router;
