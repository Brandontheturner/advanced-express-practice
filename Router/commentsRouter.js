const express = require("express");
const router = express.Router();

router.get("/comments", (req, res) => {
  res.json(comments);
});
router.get("/comments/:id", (req, res) => {
  const userId = comments.findIndex(comments => {
    return comments._id == req.params.id;
  });
  res.json(comments[userId]);
});
router.post("/comments", (req, res) => {
  res.json(comments);
});
router.post("/comments/:id", (req, res) => {
  const userId = comments.findIndex(comments => {
    return comments._id == req.params.id;
  });
  res.json(comments[userId]);
});

module.exports = router;
