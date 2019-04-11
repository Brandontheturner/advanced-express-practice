const express = require("express");
const router = express.Router();

router.get("/contacts", (req, res) => {
  res.json(contacts);
});
router.get("/contacts/:id", (req, res) => {
  res.json(contacts);
});
router.post("/contacts", (req, res) => {
  res.json(contacts);
});
router.post("/contacts/:id", (req, res) => {
  res.json(contacts);
});

module.exports = router;
