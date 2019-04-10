const express = require("express");
const router = express.Router();

router.get("/contacts", (req, res) => {
  res.json(contacts);
});
router.get("/contacts/:id", (req, res) => {
  const userId = contacts.findIndex(contacts => {
    return contacts._id == req.params.id;
  });
  res.json(contacts[userId]);
});

module.exports = router;
