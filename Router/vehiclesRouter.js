const express = require("express");
const router = express.Router();

router.get("/vehicles", (req, res) => {
  res.json(vehicles);
});
router.get("/vehicles/:id", (req, res) => {
  const userId = vehicles.findIndex(vehicles => {
    return vehicles._id == req.params.id;
  });
  res.json(vehicles[userId]);
});
router.post("/vehicles", (req, res) => {
  res.json(vehicles);
});
router.post("/vehicles/:id", (req, res) => {
  const userId = vehicles.findIndex(vehicles => {
    return vehicles._id == req.params.id;
  });
  res.json(vehicles[userId]);
});

module.exports = router;
