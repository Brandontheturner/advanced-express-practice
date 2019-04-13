const express = require("express");
const router = express.Router();
const controller = require("../Controllers/contactsController");

router.get("/contacts", (req, res) => res.json(controller.list()));

router.get("/contacts/:id", (req, res) =>
  res.json(controller.show(req.params.id))
);

router.post("/contacts", (req, res) => res.json(controller.create(req.body)));

module.exports = router;
